import React from "react";
import { Document, Page, Text, View, StyleSheet, Link, Font } from "@react-pdf/renderer";
import path from "path";
import { resumeData } from "./resume-data";

// Register Lora (serif, matches Stephanie's Georgia)
const fontsDir = path.join(__dirname, "assets", "fonts");
Font.register({ family: "Lora", src: path.join(fontsDir, "Lora-Regular.ttf") });
Font.register({ family: "Lora-Bold", src: path.join(fontsDir, "Lora-Bold.ttf") });
Font.register({ family: "Lora-Italic", src: path.join(fontsDir, "Lora-Italic.ttf") });

// Keep Inter for small UI text (pills, labels)
Font.register({ family: "Inter", src: path.join(fontsDir, "Inter-Regular.ttf") });
Font.register({ family: "Inter-Bold", src: path.join(fontsDir, "Inter-Bold.ttf") });

// Color palette — matching Stephanie's green scheme
const sidebarBg = "#1E2E1E";
const sidebarText = "#e0e0e0";
const sidebarMuted = "#b8ccb0";
const sidebarBorder = "#5e735e";
const accentGreen = "#3a4d3a";
const accentMid = "#6b8f6b";
const accentLight = "#5a8a5a";
const pillBg = "#455F45";
const pillText = "#dde8dd";
const bodyText = "#333333";
const mutedText = "#666666";
const lightText = "#888888";

const s = StyleSheet.create({
  page: {
    fontFamily: "Lora",
    fontSize: 10,
    color: bodyText,
    lineHeight: 1.45,
    letterSpacing: 0.3,
  },

  container: {
    flexDirection: "row",
    flex: 1,
  },

  // LEFT SIDEBAR
  sidebar: {
    width: 175,
    backgroundColor: sidebarBg,
    color: sidebarText,
    paddingTop: 20,
    paddingBottom: 16,
    paddingLeft: 14,
    paddingRight: 12,
  },
  sidebarSectionTitle: {
    fontSize: 8,
    fontFamily: "Inter-Bold",
    color: sidebarMuted,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 14,
    marginBottom: 2,
    paddingBottom: 3,
    borderBottom: `0.75 solid ${sidebarBorder}`,
  },
  contactItem: {
    marginBottom: 4,
  },
  contactLabel: {
    fontSize: 6.5,
    fontFamily: "Inter-Bold",
    color: sidebarMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 0,
  },
  contactValue: {
    fontSize: 8,
    color: "#ccc",
  },
  contactLink: {
    fontSize: 8,
    color: "#ccc",
    textDecoration: "none",
  },

  // Skill pills
  skillCategory: {
    marginTop: 4,
    marginBottom: 3,
  },
  skillCategoryLabel: {
    fontSize: 8,
    fontFamily: "Inter-Bold",
    color: sidebarMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 1,
    paddingBottom: 1,
    borderBottom: `0.5 solid ${sidebarBorder}`,
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
  pill: {
    backgroundColor: pillBg,
    color: pillText,
    fontSize: 7,
    fontFamily: "Inter-Bold",
    paddingHorizontal: 5,
    paddingTop: 2,
    paddingBottom: 3,
    borderRadius: 2,
    lineHeight: 1,
  },
  pillHighlight: {
    backgroundColor: accentMid,
    color: "#ffffff",
    fontSize: 7,
    fontFamily: "Inter-Bold",
    paddingHorizontal: 5,
    paddingTop: 2,
    paddingBottom: 3,
    borderRadius: 2,
    lineHeight: 1,
  },

  // Education
  eduSchool: {
    fontSize: 8.5,
    fontFamily: "Lora-Bold",
    color: "#fff",
  },
  eduDegree: {
    fontSize: 8,
    color: "#ccc",
    marginTop: 1,
  },
  eduDate: {
    fontSize: 7.5,
    color: sidebarMuted,
    marginTop: 1,
  },

  // Interests
  interestsText: {
    fontSize: 8.5,
    color: "#ccc",
    lineHeight: 1.4,
  },

  // Additional skills (page 2 sidebar)
  sidebarPage2: {
    width: 175,
    backgroundColor: sidebarBg,
    color: sidebarText,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 14,
    paddingRight: 12,
  },

  // Bar chart
  chartWrap: {
    marginTop: 24,
    alignItems: "flex-start",
    paddingLeft: 8,
  },
  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
    height: 38,
  },
  chartBar: {
    width: 12,
    borderRadius: 2,
  },
  chartLabel: {
    fontSize: 7.5,
    color: sidebarMuted,
    textAlign: "center",
    marginTop: 4,
    fontFamily: "Inter",
  },

  flairText: {
    fontSize: 7.5,
    fontFamily: "Lora-Italic",
    color: sidebarBorder,
    marginTop: 16,
    lineHeight: 1.4,
  },

  // MAIN CONTENT
  main: {
    flex: 1,
    paddingTop: 28,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 28,
  },
  mainPage2: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 28,
  },

  // Name header (in main area, like Stephanie's)
  nameHeader: {
    marginBottom: 8,
    paddingBottom: 8,
    borderBottom: `2 solid ${accentMid}`,
  },
  name: {
    fontSize: 24,
    fontFamily: "Lora",
    color: accentGreen,
    letterSpacing: 0.8,
    marginBottom: 6,
    lineHeight: 1.1,
  },
  titleLine: {
    fontSize: 10,
    fontFamily: "Lora",
    color: accentMid,
    letterSpacing: 0.3,
  },
  taglineLine: {
    fontSize: 8.5,
    fontFamily: "Lora-Italic",
    color: lightText,
    marginTop: 3,
  },

  // Section titles
  mainSectionTitle: {
    fontSize: 10,
    fontFamily: "Lora-Bold",
    color: accentGreen,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 6,
    marginBottom: 6,
    paddingBottom: 4,
    borderBottom: `1.5 solid ${accentMid}`,
  },

  // Experience entries
  expEntry: {
    marginBottom: 4,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  expTitleRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  expCompany: {
    fontSize: 10.5,
    fontFamily: "Lora-Bold",
    color: accentLight,
  },
  expSeparator: {
    fontSize: 10,
    color: mutedText,
  },
  expRole: {
    fontSize: 10,
    fontFamily: "Lora-Bold",
    color: accentGreen,
  },
  expDate: {
    fontSize: 9,
    color: mutedText,
  },
  bulletRow: {
    flexDirection: "row",
    paddingRight: 0,
    marginBottom: 1,
  },
  bulletChar: {
    width: 10,
    fontSize: 8,
    color: accentMid,
    paddingTop: 0.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: "#444",
    lineHeight: 1.4,
  },
  boldText: {
    fontFamily: "Lora-Bold",
  },
});

const metricStyle = StyleSheet.create({
  metric: {
    fontFamily: "Lora-Bold",
    color: accentGreen,
    textDecoration: "underline",
  },
});

const Bullet = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*[^*]+\*\*|~~[^~]+~~)/);
  return (
    <View style={s.bulletRow}>
      <Text style={s.bulletChar}>{"\u2022"}</Text>
      <Text style={s.bulletText}>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <Text key={i} style={s.boldText}>{part.slice(2, -2)}</Text>;
          }
          if (part.startsWith("~~") && part.endsWith("~~")) {
            return <Text key={i} style={metricStyle.metric}>{part.slice(2, -2)}</Text>;
          }
          return <Text key={i}>{part}</Text>;
        })}
      </Text>
    </View>
  );
};

const Pill = ({ text, highlight }: { text: string; highlight?: boolean }) => (
  <Text style={highlight ? s.pillHighlight : s.pill}>{text}</Text>
);

interface ResumeProps {
  titleOverride?: string;
  highlightSkillsOverride?: string[];
}

export const Resume = ({ titleOverride, highlightSkillsOverride }: ResumeProps = {}) => {
  const d = { ...resumeData, title: titleOverride || resumeData.title };

  const highlightSkills = highlightSkillsOverride || ["Go", "Python", "TypeScript", "AWS", "Docker", "Kubernetes", "React", "Next.js"];

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.container}>

          {/* LEFT SIDEBAR */}
          <View style={s.sidebar}>
            <Text style={s.sidebarSectionTitle}>Contact</Text>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>Email</Text>
              <Link src={`mailto:${d.contact.email}`} style={s.contactLink}>
                <Text>{d.contact.email}</Text>
              </Link>
            </View>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>Phone</Text>
              <Text style={s.contactValue}>{d.contact.phone}</Text>
            </View>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>Location</Text>
              <Text style={s.contactValue}>{d.contact.location}</Text>
            </View>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>LinkedIn</Text>
              <Link src={`https://${d.contact.linkedin}`} style={s.contactLink}>
                <Text>{d.contact.linkedin}</Text>
              </Link>
            </View>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>Portfolio</Text>
              <Link src={`https://${d.contact.portfolio}`} style={s.contactLink}>
                <Text>{d.contact.portfolio}</Text>
              </Link>
            </View>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>GitHub</Text>
              <Link src={`https://${d.contact.github}`} style={s.contactLink}>
                <Text>{d.contact.github}</Text>
              </Link>
            </View>
            <View style={s.contactItem}>
              <Text style={s.contactLabel}>Blog</Text>
              <Link src={`https://${d.contact.blog}`} style={s.contactLink}>
                <Text>{d.contact.blog}</Text>
              </Link>
            </View>

            <Text style={s.sidebarSectionTitle}>Core Skills</Text>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>Languages</Text>
              <View style={s.pillRow}>
                {["JavaScript", "Python", "Go", "TypeScript", "SQL", "Node"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || (!highlightSkillsOverride && ["JavaScript", "Python", "Go", "Node"].includes(sk))} />
                ))}
              </View>
            </View>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>Backend</Text>
              <View style={s.pillRow}>
                {["Express", "FastAPI", "Flask", "Gin", "Django", "Nginx"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || (!highlightSkillsOverride && ["Express", "FastAPI", "Flask"].includes(sk))} />
                ))}
              </View>
            </View>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>Infra</Text>
              <View style={s.pillRow}>
                {["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "Argo", "Kafka"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk)} />
                ))}
              </View>
            </View>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>Data</Text>
              <View style={s.pillRow}>
                {["PostgreSQL", "DynamoDB", "MongoDB", "Redis", "MySQL", "GraphQL"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || (!highlightSkillsOverride && sk !== "GraphQL")} />
                ))}
              </View>
            </View>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>Frontend</Text>
              <View style={s.pillRow}>
                {["React", "Next.js", "HTML", "CSS", "JS", "Tailwind", "WebSockets", "SSE"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || (!highlightSkillsOverride && ["HTML", "CSS", "JS"].includes(sk))} />
                ))}
              </View>
            </View>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>AI & ML</Text>
              <View style={s.pillRow}>
                {["LLMs", "Claude", "ChatGPT", "Cursor", "DeepSeek", "Prompt Eng.", "Instructor", "LangChain", "RAG", "MLOps", "PyTorch", "Scikit-Learn"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || (!highlightSkillsOverride && ["LLMs", "Claude", "Prompt Eng."].includes(sk))} />
                ))}
              </View>
            </View>

            <View style={s.skillCategory} wrap={false}>
              <Text style={s.skillCategoryLabel}>Practices</Text>
              <View style={s.pillRow}>
                {["API Design", "System Design", "CI/CD", "TDD", "GitOps", "Microservices", "CQRS", "Event-Driven", "Serverless"].map((sk) => (
                  <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || (!highlightSkillsOverride && sk === "API Design")} />
                ))}
              </View>
            </View>

          </View>

          {/* MAIN CONTENT */}
          <View style={s.main}>
            {/* Name header */}
            <View style={s.nameHeader}>
              <Text style={s.name}>{d.name}</Text>
              <Text style={s.titleLine}>{d.title}</Text>
              <Text style={s.taglineLine}>{d.tagline}</Text>
            </View>

            <Text style={s.mainSectionTitle}>Experience</Text>
            {d.experience.slice(0, 4).map((exp, i) => (
              <View key={i} style={s.expEntry} wrap={false}>
                <View style={s.expHeader}>
                  <View style={s.expTitleRow}>
                    <Text style={s.expCompany}>{exp.company}</Text>
                    <Text style={s.expSeparator}>|</Text>
                    <Text style={s.expRole}>{exp.role}</Text>
                  </View>
                  {exp.date ? <Text style={s.expDate}>{exp.date}</Text> : null}
                </View>
                {exp.bullets.map((bullet, j) => (
                  <Bullet key={j} text={bullet} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="LETTER" style={s.page}>
        <View style={s.container}>

          {/* Sidebar — Page 2: Interests + Additional Skills */}
          <View style={s.sidebarPage2}>
            <Text style={s.sidebarSectionTitle}>Libraries</Text>
            <View style={s.pillRow}>
              {["SQLAlchemy", "GORM", "Prisma", "Pydantic", "Axios", "Socket.io",
                "Pandas", "NumPy", "Boto3", "Jest",
              ].map((sk) => (
                <Pill key={sk} text={sk} />
              ))}
            </View>

            <Text style={s.sidebarSectionTitle}>Services</Text>
            <View style={s.pillRow}>
              {["Stripe", "PayPal", "HyperWallet", "Twilio", "Algolia",
                "CloudSearch", "Contentful", "Sentry", "Datadog",
                "Shopify", "Squarespace", "Stytch", "Next.js",
              ].map((sk) => (
                <Pill key={sk} text={sk} />
              ))}
            </View>

            <Text style={s.sidebarSectionTitle}>Cloud</Text>
            <View style={s.pillRow}>
              {["EC2", "S3", "SQS", "Lambda", "SNS", "SES", "Secrets Mgr",
                "EKS", "ECS", "ECR", "Step Functions", "WAF", "CloudFront",
                "CodeDeploy", "Terraform Cloud", "GitHub Actions",
              ].map((sk) => (
                <Pill key={sk} text={sk} />
              ))}
            </View>

            <Text style={s.sidebarSectionTitle}>Additional Skills</Text>
            <View style={s.pillRow}>
              {["Distributed Systems", "Docker Compose", "Prometheus", "Grafana",
                "OpenAPI", "OAuth", "Git", "Playwright", "Pytest", "FFMPEG",
                "TensorFlow", "NLP",
              ].map((sk) => (
                <Pill key={sk} text={sk} />
              ))}
            </View>

            <Text style={s.sidebarSectionTitle}>Education</Text>
            <Text style={s.eduSchool}>{d.education.school}</Text>
            <Text style={s.eduDegree}>{d.education.degree}</Text>
            <Text style={s.eduDate}>{d.education.date}</Text>

            <Text style={s.sidebarSectionTitle}>Interests</Text>
            <Text style={s.interestsText}>{d.interests}</Text>

            {/* Growth chart */}
            <View style={s.chartWrap}>
              <View style={s.chartRow}>
                <View style={[s.chartBar, { height: 8, backgroundColor: sidebarBorder }]} />
                <View style={[s.chartBar, { height: 13, backgroundColor: sidebarBorder }]} />
                <View style={[s.chartBar, { height: 17, backgroundColor: `${accentMid}66` }]} />
                <View style={[s.chartBar, { height: 22, backgroundColor: `${accentMid}99` }]} />
                <View style={[s.chartBar, { height: 26, backgroundColor: `${accentMid}CC` }]} />
                <View style={[s.chartBar, { height: 32, backgroundColor: accentMid }]} />
                <View style={[s.chartBar, { height: 38, backgroundColor: accentMid }]} />
              </View>
              <Text style={s.chartLabel}>10+ years building at scale</Text>
            </View>
          </View>

          {/* Main — Page 2: Remaining experience */}
          <View style={s.mainPage2}>
            <Text style={s.mainSectionTitle}>Experience (cont.)</Text>
            {d.experience.slice(4).map((exp, i) => (
              <View key={i + 4} style={s.expEntry} wrap={false}>
                <View style={s.expHeader}>
                  <View style={s.expTitleRow}>
                    <Text style={s.expCompany}>{exp.company}</Text>
                    <Text style={s.expSeparator}>|</Text>
                    <Text style={s.expRole}>{exp.role}</Text>
                  </View>
                  {exp.date ? <Text style={s.expDate}>{exp.date}</Text> : null}
                </View>
                {exp.bullets.map((bullet, j) => (
                  <Bullet key={j} text={bullet} />
                ))}
              </View>
            ))}
            <View wrap={false}>
              <Text style={s.mainSectionTitle}>Independent Consulting</Text>
              <View style={s.expEntry}>
                <View style={s.expHeader}>
                  <Text style={s.expRole}>{d.consulting.role}</Text>
                  <Text style={s.expDate}>{d.consulting.date}</Text>
                </View>
                {d.consulting.bullets.map((bullet, i) => (
                  <Bullet key={i} text={bullet} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
