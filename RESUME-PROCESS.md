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
├── la-tech-jobs.csv           # Master job tracker (roles, links, artifacts, rationale)
├── content/
│   ├── versions/              # Dated markdown snapshots of resume content
│   │   ├── 2026-02-09-original.md
│   │   ├── 2026-02-27-current.md
│   │   └── YYYY-MM-DD-*.md   # Future versions
│   └── feedback/              # Review notes, recruiter feedback
│       └── 2026-03-13-disney-reviewer.md
├── outputs/
│   ├── resumes/               # 1 customized PDF per role
│   │   ├── {company}_{role-slug}.pdf
│   │   └── index.json         # Maps company+role to filename
│   ├── YYYY-MM-DD_all-cover-letters.md  # All cover letters
│   └── YYYY-MM-DD-resume.pdf  # Base/default resume
├── work-history/              # Git commit summaries, accomplishments
│   └── 2026-Q1-work-accomplished.md
└── src/                       # PDF generation source code
    ├── package.json
    ├── resume-data.ts         # Structured resume content and skills
    ├── resume.tsx             # React PDF layout/styling and displayed skill lists
    ├── generate.tsx           # Generates the default/base resume
    └── generate-batch.tsx     # Generates all customized resumes from role configs
```

## PDF Generation
- **Library:** `@react-pdf/renderer` (React PDF)
- **How it works:** Structured content and skills live in `resume-data.ts`; `resume.tsx` contains styling/layout and separate hardcoded lists of displayed skills.
- **Base resume:** `cd src && npx tsx generate.tsx`
- **All customized resumes:** `cd src && npx tsx generate-batch.tsx`

### Resume Customization System

Each role gets a tailored resume via two props passed to the `<Resume />` component:

1. **`titleOverride`** — Replaces the subtitle under your name to match the role's domain
   - Whatnot Payments → `"Senior Full Stack Engineer | Payments & Fintech | Backend"`
   - Anduril → `"Senior Software Engineer | Backend & Platform | ML & Security Systems"`
   - Dropbox Dash → `"Senior Full Stack Engineer | Search & AI | Product Engineering"`

2. **`highlightSkillsOverride`** — Controls which skill pills get the purple highlight badge in the sidebar. Skills not in the list still appear, just without the highlight.

Format for title: `Level | Domain/Specialty | Tech Focus`. Match the job description's language.

## Update Process

### When updating resume content:
1. Edit `src/resume-data.ts` with new content. For bullet rewrites and skill changes, follow the checks below.
2. Regenerate PDF from `src/`: `rtk npx tsx generate.tsx`. The generator writes the dated PDF directly to `outputs/`.
3. Check the generated PDF for the intended content, clipping, and unexpected page breaks or page count changes.
4. Save a markdown snapshot to `content/versions/` with date prefix
5. Commit changes

### When rewriting an experience bullet

Compare the revised bullet with neighboring bullets and the rest of the same role before exporting. Check whether they describe the same project, personal action, outcome, or capability. Merge overlapping accomplishments into one clear bullet while preserving useful technical details and supported outcomes. Shared tools alone do not make separate accomplishments redundant. Use the existing [complementary-bullet guidance](skills/tech-resume-writing/references/select-complementary-bullets.md) for broader selection decisions.

### When adding or changing a skill

Update both `src/resume-data.ts` and the appropriate hardcoded display list in `src/resume.tsx`; changing the structured data alone does not update the visible skill pills. Check for an existing entry before adding one and choose the category by the tool's purpose—for example, Prisma under Libraries and Kafka under Infra. Regenerate the PDF, confirm the skill appears in the intended section, and inspect wrapping and page count.

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

---

## Job Application Tracking

### CSV Columns (`la-tech-jobs.csv`)

| Column | Description |
|--------|-------------|
| Company | Company name |
| Role | Job title |
| Pay Range | Salary range (if known) |
| Type | Remote / Hybrid / In-Office / On-site |
| Location | City or "Remote (LA eligible)" |
| Stack/Notes | Tech stack or brief description |
| Source | Where the listing was found |
| Apply URL | Direct link to careers page |
| Custom Resume PDF | Relative path to tailored PDF |
| Customization Rationale | Why this resume was customized this way |

### Adding a New Role

#### 1. Add the row to `la-tech-jobs.csv`
Fill in company, role, pay, type, location, stack, source, and apply URL.

#### 2. Add a role config to `src/generate-batch.tsx`
Add an entry to the `roleConfigs` array:
```typescript
{
  company: "NewCo",
  role: "Senior Backend Engineer",
  titleOverride: "Senior Backend Engineer | Distributed Systems | Go & Python",
  highlightSkills: ["Go", "Python", "AWS", "Kubernetes", "Docker", "PostgreSQL", "Redis", "Microservices", "API Design"]
}
```

#### 3. Generate the PDF
```bash
cd src && npx tsx generate-batch.tsx
```
The new PDF appears in `outputs/resumes/` with a slugified filename.

#### 4. Write the cover letter
Add a section to the cover letters markdown file. 3-paragraph structure:
1. **Interest** — Show you know what the company does and why this role matters
2. **Evidence** — 2-3 most relevant experience bullets mapped to the role's needs
3. **Close** — Why this company specifically excites you, confident ask

#### 5. Write the rationale
Add to the CSV's `Customization Rationale` column: 1-2 sentences on why you chose that title, which skills were highlighted, and which experience entries are strongest.

#### 6. Update the CSV
Fill in the `Custom Resume PDF` column with the path (e.g., `outputs/resumes/newco_senior-backend-engineer.pdf`).

### Experience-to-Role Mapping Guide

| If the role needs... | Lead with... |
|---------------------|-------------|
| High-throughput APIs / scale | Whip Media (30B req/month Go API) |
| Payment / fintech infrastructure | Bitmob (Stripe/PayPal) + Nivelo ($20M/month) |
| AI / LLM / ML systems | Syntrologie AI (prompt optimization) + One Finance (TensorFlow) + Codesmith (ML) |
| Security / compliance | Syntrologie AI (SOC2, 33 vulns) + One Finance (Go WAF) |
| CI/CD / infrastructure / platform | One Finance (Kubernetes/Terraform/GitOps/Argo) |
| Frontend / design systems | Syntrologie AI (Next.js) + Bitmob (React marketplace) |
| Marketplace / e-commerce | Bitmob (zero to $4M) + Gravity Brands ($45M/year Django) |
| Content platforms | Coinbase (content platform, $100k savings) |
| Monolith → microservices | Nivelo + Whip Media (both did decompositions) |
| Startup / zero-to-one | Bitmob (zero code to $4M valuation) |
| Team leadership / mentorship | Nivelo (mentorship program) + One Finance (onboarding program) |

### Job Board Sources

Check these regularly for new listings:
- [Built In LA](https://www.builtinla.com/jobs/dev-engineering) — LA-specific roles with salary data
- [Glassdoor](https://www.glassdoor.com/Job/los-angeles-software-engineer-jobs-SRCH_IL.0,11_IC1146821_KO12,29.htm) — Broadest LA coverage
- [Wellfound](https://wellfound.com/role/l/software-engineer/los-angeles) — Startup-focused
- [HN Who Is Hiring](https://hnhiring.com/locations/la) — Monthly, filtered for LA
- [YC Companies Hiring in LA](https://www.ycombinator.com/companies/location/los-angeles/hiring) — YC-backed
- [TopStartups.io](https://topstartups.io/jobs/?job_location=Los+Angeles) — VC-funded startups
- Company careers pages directly (Riot, Anduril, SpaceX, Disney, etc.)
