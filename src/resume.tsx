import React from "react";
import { Document, Page, Text, View, StyleSheet, Link, Image, Font } from "@react-pdf/renderer";
import path from "path";
import { resumeData } from "./resume-data";

// Register Inter variants
const fontsDir = path.join(__dirname, "assets", "fonts");
Font.register({ family: "Inter", src: path.join(fontsDir, "Inter-Regular.ttf") });
Font.register({ family: "Inter-Bold", src: path.join(fontsDir, "Inter-Bold.ttf") });
Font.register({ family: "Inter-Italic", src: path.join(fontsDir, "Inter-Italic.ttf") });

// Register Montserrat (display/header font)
Font.register({ family: "Montserrat", src: path.join(fontsDir, "Montserrat-Bold.ttf") });
Font.register({ family: "Montserrat-ExtraBold", src: path.join(fontsDir, "Montserrat-ExtraBold.ttf") });

const accent = "#5B4FC4";
const headerBg = "#1E1B2E";
const headerText = "#FFFFFF";
const sidebarBg = "#F5F4F8";
const bodyText = "#2D2D2D";
const mutedText = "#666666";
const lightBorder = "#E0DDE8";

const s = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 8.5,
    color: bodyText,
    lineHeight: 1.3,
    paddingTop: 0,
  },

  // Header bar
  headerWrap: {
    position: "relative",
  },
  headerBgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  header: {
    paddingTop: 22,
    paddingBottom: 18,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    flex: 1,
    paddingRight: 16,
    zIndex: 1,
  },
  name: {
    fontSize: 26,
    fontFamily: "Montserrat-ExtraBold",
    color: headerText,
    letterSpacing: 0.5,
    marginBottom: 14,
    lineHeight: 1.2,
  },
  titleLine: {
    fontSize: 11,
    color: "#D4D0E8",
    letterSpacing: 0.3,
    marginTop: 2,
    fontFamily: "Inter",
  },
  taglineLine: {
    fontSize: 9,
    color: "#B0ABCF",
    fontFamily: "Inter-Italic",
    marginTop: 3,
  },
  headerRight: {
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 3,
    zIndex: 1,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  contactLabel: {
    fontSize: 7,
    color: accent,
    fontFamily: "Inter-Bold",
    width: 16,
    textAlign: "right",
  },
  contactIcon: {
    fontSize: 12,
    color: "#9B8FE8",
    fontFamily: "Inter-Bold",
    width: 20,
    textAlign: "right",
  },
  contactText: {
    fontSize: 10,
    color: "#D0CDE0",
  },
  contactLink: {
    fontSize: 10,
    color: "#D0CDE0",
    textDecoration: "none",
  },

  // Body two-column
  body: {
    flexDirection: "row",
    flex: 1,
  },

  // Sidebar
  sidebar: {
    width: 165,
    backgroundColor: sidebarBg,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 12,
  },
  sidebarSection: {
    marginBottom: 12,
    marginTop: 4,
  },
  sidebarTitle: {
    fontSize: 8,
    fontFamily: "Montserrat",
    color: accent,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 8,
    paddingBottom: 3,
    borderBottom: `1 solid ${accent}`,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryLabel: {
    fontSize: 7.5,
    fontFamily: "Inter-Bold",
    color: bodyText,
    marginBottom: 3,
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  pill: {
    backgroundColor: "#FFFFFF",
    border: `0.5 solid ${lightBorder}`,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 7.5,
    lineHeight: 1,
    color: bodyText,
  },
  pillHighlight: {
    backgroundColor: accent,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 7.5,
    lineHeight: 1,
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
  },
  eduSchool: {
    fontSize: 9,
    fontFamily: "Inter-Bold",
    color: bodyText,
  },
  eduDegree: {
    fontSize: 8,
    color: mutedText,
  },
  eduDate: {
    fontSize: 7.5,
    color: mutedText,
    marginTop: 1,
  },
  interestsText: {
    fontSize: 9,
    color: mutedText,
    lineHeight: 1.4,
  },

  // Page 2 variants with more top padding
  sidebarPage2: {
    width: 165,
    backgroundColor: sidebarBg,
    paddingTop: 36,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 12,
  },
  mainPage2: {
    flex: 1,
    paddingTop: 36,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 28,
  },

  // Main content
  main: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 28,
  },
  mainSectionTitle: {
    fontSize: 8,
    fontFamily: "Montserrat",
    color: accent,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 10,
    paddingBottom: 4,
    borderBottom: `1.5 solid ${accent}`,
  },
  sectionRule: {
    borderBottom: `0.5 solid ${lightBorder}`,
    marginBottom: 8,
  },

  headerAccent: {
    height: 2.5,
    backgroundColor: accent,
  },

  // Experience entry
  expEntry: {
    marginBottom: 8,
    borderLeft: `2 solid ${lightBorder}`,
    paddingLeft: 8,
  },
  expEntryHighlight: {
    marginBottom: 8,
    borderLeft: `2.5 solid ${accent}`,
    paddingLeft: 8,
    backgroundColor: "#F0EEF8",
    paddingTop: 6,
    paddingBottom: 4,
    paddingRight: 6,
    borderRadius: 2,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  },
  expCompany: {
    fontSize: 11,
    fontFamily: "Montserrat",
    color: bodyText,
  },
  expDate: {
    fontSize: 9,
    color: accent,
    fontFamily: "Inter-Bold",
  },
  expRole: {
    fontSize: 9,
    fontFamily: "Inter-Italic",
    color: mutedText,
    marginBottom: 1,
  },
  bulletRow: {
    flexDirection: "row",
    paddingRight: 0,
    marginBottom: 1,
  },
  bulletChar: {
    width: 10,
    fontSize: 8,
    color: accent,
    paddingTop: 0.5,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: bodyText,
    lineHeight: 1.35,
  },
  boldText: {
    fontFamily: "Inter-Bold",
  },
  // Ascending bar chart
  chartWrap: {
    marginTop: 8,
    alignItems: "center",
  },
  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 3,
    height: 32,
  },
  chartBar: {
    width: 10,
    borderRadius: 2,
  },
  chartLabel: {
    fontSize: 6.5,
    color: mutedText,
    textAlign: "center",
    marginTop: 4,
    fontFamily: "Inter",
  },

  additionalSkills: {
    marginTop: 8,
    paddingTop: 4,
  },
});

const metricStyle = StyleSheet.create({
  metric: {
    fontFamily: "Inter-Bold",
    color: accent,
    textDecoration: "underline",
  },
});

const Bullet = ({ text }: { text: string }) => {
  // Parse **bold** and ~~metric~~ markers
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

export const Resume = () => {
  const d = resumeData;

  const highlightSkills = ["Go", "Python", "TypeScript", "AWS", "Docker", "Kubernetes", "React", "Next.js"];

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        {/* Header */}
        <View style={s.headerWrap}>
          <Image style={s.headerBgImage} src={path.join(__dirname, "assets", "header-gradient.png")} />
          <View style={s.header}>
            <View style={s.headerLeft}>
              <Text style={s.name}>{d.name}</Text>
              <Text style={s.titleLine}>{d.title}</Text>
              <Text style={s.taglineLine}>{d.tagline}</Text>
            </View>
            <View style={s.headerRight}>
              <View style={s.contactRow}>
                <Text style={s.contactIcon}>in</Text>
                <Link src={`https://${d.contact.linkedin}`} style={s.contactLink}>
                  <Text>{d.contact.linkedin}</Text>
                </Link>
              </View>
              <View style={s.contactRow}>
                <Text style={s.contactIcon}>{"W"}</Text>
                <Link src={`https://${d.contact.portfolio}`} style={s.contactLink}>
                  <Text>{d.contact.portfolio}</Text>
                </Link>
              </View>
              <View style={s.contactRow}>
                <Text style={s.contactIcon}>@</Text>
                <Link src={`mailto:${d.contact.email}`} style={s.contactLink}>
                  <Text>{d.contact.email}</Text>
                </Link>
              </View>
              <View style={s.contactRow}>
                <Text style={s.contactIcon}>{"</>"}</Text>
                <Link src={`https://${d.contact.github}`} style={s.contactLink}>
                  <Text>{d.contact.github}</Text>
                </Link>
              </View>
              <View style={s.contactRow}>
                <Text style={s.contactIcon}>{"~"}</Text>
                <Text style={s.contactText}>{d.contact.location}</Text>
              </View>
              <View style={s.contactRow}>
                <Text style={s.contactIcon}>{"#"}</Text>
                <Text style={s.contactText}>{d.contact.phone}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Accent bar */}
        <View style={s.headerAccent} />

        {/* Body */}
        <View style={s.body}>
          {/* Sidebar — Page 1: Skills + Education */}
          <View style={s.sidebar}>
            <View style={s.sidebarSection}>
              <Text style={s.sidebarTitle}>Core Skills</Text>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>Languages</Text>
                <View style={s.pillRow}>
                  {["JavaScript", "Python", "Go", "TypeScript", "SQL"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={["JavaScript", "Python", "Go"].includes(sk)} />
                  ))}
                </View>
              </View>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>Backend</Text>
                <View style={s.pillRow}>
                  {["Node", "Express", "FastAPI", "Flask", "Gin", "Django", "Nginx"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={["Node", "Express", "FastAPI", "Flask"].includes(sk)} />
                  ))}
                </View>
              </View>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>Infra</Text>
                <View style={s.pillRow}>
                  {["AWS", "Docker", "Kubernetes", "Terraform"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk)} />
                  ))}
                </View>
              </View>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>Data</Text>
                <View style={s.pillRow}>
                  {["PostgreSQL", "DynamoDB", "MongoDB", "Redis", "MySQL", "GraphQL"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={sk !== "GraphQL"} />
                  ))}
                </View>
              </View>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>Web & Frontend</Text>
                <View style={s.pillRow}>
                  {["React", "Next.js", "HTML", "CSS", "JS", "Tailwind", "WebSockets", "SSE", "HTTP/2", "Caching"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={highlightSkills.includes(sk) || ["HTML", "CSS", "JS"].includes(sk)} />
                  ))}
                </View>
              </View>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>AI & ML</Text>
                <View style={s.pillRow}>
                  {["LLMs", "Claude", "Prompt Eng.", "TensorFlow", "PyTorch", "Scikit-Learn", "NLP"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={["LLMs", "Claude", "Prompt Eng."].includes(sk)} />
                  ))}
                </View>
              </View>

              <View style={s.skillCategory} wrap={false}>
                <Text style={s.skillCategoryLabel}>Practices</Text>
                <View style={s.pillRow}>
                  {["API Design", "CI/CD", "TDD", "Microservices", "CQRS", "Event-Driven", "Serverless", "REST APIs"].map((sk) => (
                    <Pill key={sk} text={sk} highlight={sk === "API Design"} />
                  ))}
                </View>
              </View>
            </View>

            <View style={s.sidebarSection} wrap={false}>
              <Text style={s.sidebarTitle}>Education</Text>
              <Text style={s.eduSchool}>{d.education.school}</Text>
              <Text style={s.eduDegree}>{d.education.degree}</Text>
              <Text style={s.eduDate}>{d.education.date}</Text>
            </View>

          </View>

          {/* Main — Page 1: First 4 experience entries */}
          <View style={s.main}>
            <Text style={s.mainSectionTitle}>Experience</Text>
            {d.experience.slice(0, 4).map((exp, i) => (
              <View key={i} style={i === 0 ? s.expEntryHighlight : s.expEntry} wrap={false}>
                <View style={s.expHeader}>
                  <Text style={s.expCompany}>{exp.company}</Text>
                  {exp.date ? <Text style={s.expDate}>{exp.date}</Text> : null}
                </View>
                <Text style={s.expRole}>{exp.role}</Text>
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
        <View style={s.body}>
          {/* Sidebar — Page 2: Interests + Additional Skills */}
          <View style={s.sidebarPage2}>
            <View style={s.sidebarSection} wrap={false}>
              <Text style={s.sidebarTitle}>Interests</Text>
              <Text style={s.interestsText}>{d.interests}</Text>
            </View>

            <View style={s.sidebarSection} wrap={false}>
              <Text style={s.sidebarTitle}>Additional Skills</Text>
              <View style={s.pillRow}>
                {["Distributed Systems", "Stripe", "Twilio", "Docker Compose",
                  "Prometheus", "OpenAPI", "Playwright", "Pytest",
                ].map((sk) => (
                  <Pill key={sk} text={sk} />
                ))}
              </View>
            </View>

            {/* Growth chart */}
            <View style={s.chartWrap}>
              <View style={s.chartRow}>
                <View style={[s.chartBar, { height: 7, backgroundColor: lightBorder }]} />
                <View style={[s.chartBar, { height: 11, backgroundColor: lightBorder }]} />
                <View style={[s.chartBar, { height: 14, backgroundColor: `${accent}66` }]} />
                <View style={[s.chartBar, { height: 18, backgroundColor: `${accent}99` }]} />
                <View style={[s.chartBar, { height: 22, backgroundColor: `${accent}CC` }]} />
                <View style={[s.chartBar, { height: 27, backgroundColor: accent }]} />
                <View style={[s.chartBar, { height: 32, backgroundColor: accent }]} />
              </View>
              <Text style={s.chartLabel}>9 years building at scale</Text>
            </View>
          </View>

          {/* Main — Page 2: Remaining experience entries */}
          <View style={s.mainPage2}>
            <Text style={s.mainSectionTitle}>Experience (cont.)</Text>
            {d.experience.slice(4).map((exp, i) => (
              <View key={i + 4} style={s.expEntry} wrap={false}>
                <View style={s.expHeader}>
                  <Text style={s.expCompany}>{exp.company}</Text>
                  {exp.date ? <Text style={s.expDate}>{exp.date}</Text> : null}
                </View>
                <Text style={s.expRole}>{exp.role}</Text>
                {exp.bullets.map((bullet, j) => (
                  <Bullet key={j} text={bullet} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
