---
name: optimize-whitespace
description: Complete resume generation, styling, and whitespace optimization guide — covers layout, content rules, PDF generation, and density optimization
---

# Resume Generation & Optimization

## Architecture

- **Layout:** Two-column with dark header bar, left sidebar (skills, education, interests), right main area (experience)
- **Styling:** Purple accent (`#5B4FC4`), dark header (`#1E1B2E`), light sidebar (`#F5F4F8`), Helvetica font family
- **Components:** Skill pills (highlighted for key skills), metric highlighting (`~~metric~~` → purple underlined), bold markers (`**text**`)
- **Library:** `@react-pdf/renderer` — generates PDF from React components

## Files

- Content: `src/resume-data.ts` (single source of truth for all text)
- Layout: `src/resume.tsx` (styles, components, two-column layout)
- Generator: `src/generate.tsx` (builds PDF)
- Output: `outputs/YYYY-MM-DD-resume.pdf`
- Process doc: `RESUME-PROCESS.md`
- Removed content: `content/removed-content.md` (cut bullets, skills, and projects — use to fill or swap)
- Version history: `content/versions/` (dated snapshots of resume content)

## Generation

Run from the resume repo root:
```bash
cd src && npx tsx generate.tsx
```

## Finalizing a Version

When the user declares the resume finished:
1. Copy the PDF to `versions/` with date and time in the filename: `YYYY-MM-DD-HHMM-resume.pdf`
2. Save a memory marking the version as complete
```bash
mkdir -p versions
cp outputs/YYYY-MM-DD-resume.pdf versions/YYYY-MM-DD-HHMM-resume.pdf
```

## Content Rules

- **Business impact first, always** — every bullet leads with the outcome/result, not the action
- **Metrics marked with `~~`** — e.g., `~~$100k~~`, `~~85% coverage~~` → renders purple + underlined
- **Bold marked with `**`** — e.g., `**bold text**` → renders Helvetica-Bold
- Content must remain truthful — only add detail that is accurate
- Target role: Senior (P3) → Lead (P4) Full Stack Engineer
- Emphasize teamwork and collaboration language
- Older roles (Gravity Brands, Wyobyte, Codesmith) condensed to 1 bullet each
- When adding/removing content, consult `content/removed-content.md` — previously cut items are lower priority; update the file when cutting or restoring content

## Layout Considerations

- **Header:** Large name (26pt) needs `marginBottom: 14` + `lineHeight: 1.2` to prevent title overlap — react-pdf underestimates vertical space for large fonts
- **Sidebar width:** 165pt — skills organized in pill/tag format by category (Languages, Backend & Infra, Data & Frontend, AI & ML, Practices)
- **Highlighted skills:** Go, Python, TypeScript, AWS, Docker, Kubernetes, React, Next.js, HTML, CSS, JS, LLMs, Claude, Prompt Eng., API Design get purple pill variant
- **Highlighted pills always come first** in their section — highlighted items before non-highlighted
- **Date column:** Right-aligned, purple accent color — keep clean/open whitespace below dates
- **Contact info:** 10pt font, right-aligned in header with icon labels (IN, @, </>, W, ○, ☎) — order lines by text length similarity so the column looks visually balanced
- **Portfolio URL:** `waggertron.github.io/weylin` with "W" icon, placed between GitHub and location lines
- **Section spacing:** Keep tight between role headers and bullets — minimize vertical gaps
- **Bottom gap:** Minimize distance between last content and page bottom

## Visual Flair Features

These are the "top tier" visual differentiators — preserve them on all updates:

- **Header gradient:** Two-tone simulated gradient (`#1E1B2E` left, `#2A2450` right) using absolutely positioned Views behind header content — react-pdf doesn't support CSS gradients or SVG z-ordering, so use layered Views in a `headerWrap` container
- **Purple accent strip:** 2.5pt tall `headerAccent` bar between header and body content
- **Section title underlines:** Purple `borderBottom` on "EXPERIENCE" and sidebar section titles (CORE SKILLS, EDUCATION, INTERESTS) for visual hierarchy
- **Highlighted first position:** Most recent experience entry gets `expEntryHighlight` style — light purple background (`#F0EEF8`), thicker accent left border (2.5pt), padding all around, subtle border radius
- **Left accent bars on all entries:** Every experience entry has a thin left border (2pt `lightBorder` for normal, 2.5pt `accent` for highlighted)
- **Metric highlighting:** `~~metric~~` markers render in purple, bold, and underlined — draws eye to quantified impact
- **Skill pills:** Key skills (Go, Python, TypeScript, AWS, Docker, Kubernetes, React, Next.js) get purple background pill variant; others get white with light border

## Whitespace Density Optimization

### Goal
Make resume body text appear as a solid, dense block. Every bullet's last line should end close to the right text margin.

### Process

1. **Generate the PDF** — run `cd src && npx tsx generate.tsx`
2. **Read the PDF** — visually inspect every bullet point's last line
3. **Identify short last lines** — any final line that fills less than ~80% of the available width
4. **Fix each one:**
   - **Orphan word (1-2 words alone on last line):** Trim content from the bullet to pull the orphan up to the previous line, or add enough words to fill the line
   - **Short last line (< 60% width):** Extend with meaningful, truthful detail (tool names, scope qualifiers, additional context) until the line fills
   - **Near-full last line (> 80% width):** Leave as-is
5. **Regenerate and re-check** — repeat until all bullets have dense last lines

### Rules
- Border/margin whitespace is acceptable — body text whitespace is not
- The date column (right side) should remain clean/open — text should not bleed into it
- Skills section follows the same density rules — pills should fill sidebar width
- Prefer extending content over trimming when possible, as it adds signal density for recruiters
- Reducing open white space is a top priority — recruiters notice density
- Minimize gap between last content and bottom of page

## Multi-Page Awareness

- **2-page maximum** — resume must never exceed 2 pages. Always verify page count after generation (`pdfinfo` or visual check). If content overflows to page 3, trim or restructure before delivering.
- **Always check both pages** after generating — verify layout, spacing, and content on each page
- **Page addition requires user approval** — before making any change that would add a page (e.g., going from 1→2 or 2→3), stop and ask the user for confirmation. Never silently add pages.
- **This is a PDF — we control the viewport.** Unlike web pages, each PDF page is a fixed canvas. Use explicit `<Page>` components with intentionally constructed content per page rather than letting content flow and hoping for the best. Split sidebar and experience content deliberately across pages for full control over layout, padding, and backgrounds on each page.
- Page-level `paddingTop` on `<Page>` applies to ALL pages including continuations — use it to ensure page 2+ content doesn't start at the very top edge
- Compensate by reducing the header's internal `paddingTop` so page 1 header position stays the same
- `wrap={false}` on experience entries prevents a single role from splitting across pages — react-pdf will push the whole block to the next page instead
- The sidebar flows across all pages — its background color extends naturally via the flex layout

## Known react-pdf Gotchas

- `borderBottomWidth` can cause "Invalid border width: undefined" — use `border` shorthand string instead: `border: \`0.5 solid #color\``
- Special Unicode characters may not render in all fonts — stick to standard glyphs (e.g., `•` U+2022 for bullets)
- Large font sizes need extra `marginBottom` or `lineHeight` to prevent text overlap with subsequent elements
- `letterSpacing` + `textTransform: "uppercase"` can make text unexpectedly wide — use sparingly
- **SVG z-ordering doesn't work** — `zIndex` on SVG elements is ignored; absolutely positioned SVGs will always cover text. Use layered `<View>` elements with `position: "absolute"` instead for background effects like gradients
- Simulated gradients: use multiple absolutely positioned Views with different background colors inside a `position: "relative"` wrapper, then place content as a normal-flow sibling after them
