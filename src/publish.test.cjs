const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

test("generation publishes the archive and preserves it when a later render fails", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "resume-publish-"));
  try {
    const source = path.join(root, "src");
    const outputs = path.join(root, "outputs");
    await fs.mkdir(source);
    for (const name of ["generate.tsx", "resume.tsx", "resume-data.ts", "package.json", "tsconfig.json", "assets"]) {
      await fs.cp(path.join(__dirname, name), path.join(source, name), { recursive: true });
    }
    await fs.symlink(path.join(__dirname, "node_modules"), path.join(source, "node_modules"), "dir");
    const generate = () => spawnSync(process.execPath, [path.join(__dirname, "node_modules/tsx/dist/cli.mjs"), path.join(source, "generate.tsx")], {
      cwd: root,
      encoding: "utf8",
    });

    const result = generate();
    assert.equal(result.status, 0, result.stderr);
    const archives = (await fs.readdir(outputs)).filter(name => /^\d{4}-\d{2}-\d{2}-resume-cv-weylin-wagnon\.pdf$/.test(name));
    assert.equal(archives.length, 1);
    const published = await fs.readFile(path.join(outputs, "resume.pdf"));
    assert.equal(published.subarray(0, 5).toString(), "%PDF-");
    assert.deepEqual(published, await fs.readFile(path.join(outputs, archives[0])));

    await fs.rm(path.join(source, "assets"), { recursive: true });
    assert.notEqual(generate().status, 0);
    assert.deepEqual(await fs.readFile(path.join(outputs, "resume.pdf")), published);
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});
