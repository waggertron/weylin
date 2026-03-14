# Resume Management Process

## Overview
This repo manages Weylin Wagnon's resume — content, versioning, feedback, and PDF generation.

## Target Role
- **Level:** Senior (P3) → Lead (P4)
- **Title:** Senior/Lead Full Stack Engineer
- **Experience strength:** Web, Backend, and Platform engineering
- **Seeking:** Web, Backend, or Fullstack roles (in that priority)
- **Focus:** Full Stack Engineer with AI, Web Applications, and Platform expertise
- **Key differentiators:** Backend/platform depth, AI-augmented development workflow, team leadership and mentorship

## Directory Structure
```
weylin-wagnon-resume/
├── RESUME-PROCESS.md          # This file — how everything works
├── content/
│   ├── versions/              # Dated markdown snapshots of resume content
│   │   ├── 2026-02-09-original.md
│   │   ├── 2026-02-27-current.md
│   │   └── YYYY-MM-DD-*.md   # Future versions
│   └── feedback/              # Review notes, recruiter feedback
│       └── 2026-03-13-disney-reviewer.md
├── outputs/                   # Generated PDFs
│   └── 2026-02-27-resume.pdf
├── work-history/              # Git commit summaries, accomplishments
│   └── 2026-Q1-work-accomplished.md
└── src/                       # PDF generation source code
    ├── package.json
    ├── resume-data.ts         # Structured resume content (single source of truth)
    ├── resume.tsx             # React PDF layout/styling
    └── generate.ts            # Build script to output PDF
```

## PDF Generation
- **Library:** `@react-pdf/renderer` (React PDF)
- **How it works:** Resume content lives in `resume-data.ts`, styling/layout in `resume.tsx`, run `generate.ts` to produce PDF
- **To regenerate:** `cd src && npx tsx generate.ts`

## Update Process

### When updating resume content:
1. Edit `src/resume-data.ts` with new content
2. Regenerate PDF: `cd src && npx tsx generate.ts`
3. Copy output to `outputs/` with date prefix
4. Save a markdown snapshot to `content/versions/` with date prefix
5. Commit changes

### When receiving feedback:
1. Save feedback to `content/feedback/YYYY-MM-DD-source.md`
2. Update content based on feedback
3. Follow the update process above

### When gathering new work history:
1. Run git log across all repos for the period
2. Save summary to `work-history/YYYY-QN-work-accomplished.md`
3. Use accomplishments to update resume bullets

## Resume Philosophy (from Disney reviewer feedback)
- **Business impact first, always:** Every bullet point leads with the business outcome/value closest to the bullet. Tools and tech come after. "Reduced costs by $100k through..." not "Built a framework that reduced..."
- **Value first, tools second:** Lead bullets with business impact, then mention tech used
- **Emphasize teamwork:** Show collaboration, not solo work
- **Show scale:** Be prepared to discuss systems at massive data volumes
- **Less is more:** Focus on recent roles with high-impact bullets
- **Framing:** "Full Stack Engineer: AI and Web Applications" not "AI-First"
