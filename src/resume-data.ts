export const resumeData = {
  name: "Weylin Wagnon",
  title: "Fullstack | Backend | Platform | AI & Web",
  tagline: "Let's build big, bold things, but let's never forget who we build them for",
  contact: {
    linkedin: "linkedin.com/in/weylin-wagnon",
    email: "weylinwagnon@gmail.com",
    github: "github.com/waggertron",
    portfolio: "waggertron.github.io/weylin",
    blog: "tinyurl.com/here-be-dragons",
    location: "Los Angeles, CA",
    phone: "(310) 855 4382",
  },
  skills: {
    strong: [
      "Go", "Python", "TypeScript", "JavaScript", "Node.js", "React", "Next.js",
      "AWS (Lambda, API Gateway, S3, SQS, SNS)", "Docker", "Kubernetes", "Terraform",
      "PostgreSQL", "DynamoDB", "MongoDB", "Redis", "REST APIs", "Microservices",
      "FastAPI", "Express", "Gin", "CI/CD", "TDD", "Git", "Linux",
    ],
    experienced: [
      "AI/ML (PyTorch, TensorFlow, Scikit-Learn)", "LLMs (Claude API, Ollama)", "NLP",
      "Distributed Systems", "Serverless", "Event-Driven Architecture", "CQRS", "GraphQL",
      "WebSockets", "SQLAlchemy", "GORM", "Stripe", "Twilio", "Docker Compose",
      "Nginx", "Prometheus", "OpenAPI", "Playwright", "Pytest",
    ],
  },
  experience: [
    {
      company: "Syntrologie AI",
      role: "AI Solutions Engineer",
      date: "2026 \u2013 Present",
      bullets: [
        "Promoted from Senior Full Stack Engineer into ~~AI Solutions Engineer~~ to lead applied AI solution design across LLM-powered shopping assistants, adaptive product experiences, and internal agent workflows",
        "Enabled LLMs to mount dynamic product comparison widgets by adding authorable row schemas and runtime merge support, replacing brittle text-table answers with structured recommendations that answer visitor-specific questions",
        "Replaced seeded product-catalog prompt dumps with ~~Azure AI Search~~ hybrid retrieval over Shopify-native product data, indexing 17 demo products with workspace isolation, wiki-enriched context, and top-k product retrieval",
        "Cut personalized PDP latency by eliminating runaway model reasoning in sub-agent calls, reusing bounded scoring settings across runtime paths, and backing the fix with adaptive, canvas, and backend regression suites",
      ],
    },
    {
      company: "Syntrologie AI",
      role: "Senior Full Stack Engineer",
      date: "2025 \u2013 2026",
      bullets: [
        "Accelerated team velocity by architecting platform infrastructure from scratch \u2014 design system, B2B auth, CI/CD pipelines, and automated type generation across a Next.js / FastAPI microservices codebase with feature flags and experimentation, cutting deployment time by ~~50%~~",
        "Reduced cloud infrastructure costs by ~~40%~~ through Karpenter-driven node right-sizing and KEDA-based workload autoscaling, eliminating over-provisioned capacity across the platform",
        "Instituted security processes and runbooks across the full stack to ensure ~~SOC 2 compliance~~ for enterprise-level security, including automated regression testing, auditable workflows, and continuous vulnerability remediation",
        "Reduced production defects by building testing infrastructure from zero to ~~95% test coverage~~ across unit, component, and integration tests plus a Playwright E2E suite for post-deploy smoke validation in staging and production",
      ],
    },
    {
      company: "Coinbase (Contract)",
      role: "Senior Software Engineer, Content (FinTech)",
      date: "2024",
      bullets: [
        "Reduced annual operating costs by over ~~$100k~~ by streamlining the content modeling framework used across multiple contributing business units, editorial teams, localization workflows, and partner integration channels",
        "Eliminated hundreds of manual content workflows by building an automated content model management system with scripted migration tooling, schema validation, rollback support, and scheduled deployment pipelines",
        "Maintained zero downtime while coordinating high-throughput cache and firewall system replacement across several active contributing teams during peak traffic windows with phased rollout and real-time monitoring",
      ],
    },
    {
      company: "Nivelo",
      role: "Senior Software Engineer, Backend (FinTech)",
      date: "2023",
      bullets: [
        "Enabled reliable processing of ~~$1B+/month~~ in payroll transactions by managing critical API upgrades across the core backend transaction, validation, disbursement, and compliance reporting system",
        "Reduced deployment risk by architecting an internal application framework to incrementally modernize a legacy monolith into isolated, independently deployable service modules with shared contracts and versioned interfaces",
        "Improved junior developer growth and retention by establishing a structured senior-junior mentorship pairing program with regular code review sessions and quarterly goal tracking",
      ],
    },
    {
      company: "One Finance",
      role: "Senior Software Engineer, Platform (FinTech)",
      date: "2021 \u2013 2022",
      bullets: [
        "Prevented over ~~$40k/week~~ in fraud losses by implementing a machine learning detection API with TensorFlow, Python, and Flask that scored and flagged suspicious transactions against trained behavioral models in real time",
        "Mitigated large-scale credential stuffing attacks by developing a low-latency Go WAF service integrated with AWS WAF, Lambda, and Redis for automated rate limiting, IP reputation scoring, and threat blocking",
        "Increased deployment reliability across engineering by building and maintaining Kubernetes infrastructure for CI/CD pipelines using Terraform, GitOps, and Argo with automated rollback capabilities and canary deployments",
      ],
    },
    {
      company: "Whip Media",
      role: "Backend Engineer (Media Tech)",
      date: "2019 \u2013 2021",
      bullets: [
        "Scaled API reliability to handle ~~30B+ requests/month~~ as lead developer for the public TVDB v4 API while maintaining full backward compatibility across v2 and v3 consumer integrations and partner applications",
        "Improved search performance and relevance across the platform by implementing large-scale distributed search systems with SQS, SNS, CloudSearch, and Algolia featuring real-time indexing, ranking, and synonym expansion",
        "Enabled advanced media data collection pipelines by building an automated keyframe generator service with FFMPEG and DynamoDB, processing content acquisition workflows spanning multiple upstream providers and formats",
        "Increased team agility and deployment speed by decomposing 2 cornerstone monolith applications into independently deployable, horizontally scalable microservice architectures with shared service contracts",
      ],
    },
    {
      company: "Bitmob",
      role: "Lead Engineer, Fullstack (Marketplace Tech)",
      date: "2018 \u2013 2019",
      bullets: [
        "Grew product from zero code to ~~$4M valuation~~ at exit by leading full-stack development of a software contracting marketplace built on React, Node, Express, Postgres, and AWS Lambda serverless functions",
        "Enabled contractor payments across multiple rails by building a unified remittance and disbursement system integrating HyperWallet, Stripe, and PayPal with automated reconciliation and transaction reporting",
        "Reduced cross-system event failures by implementing an AWS Step Function lambda flow architecture for long-lived cross-service workflow orchestration with retry logic and persistent state management",
        "Improved developer experience across the platform by engineering a performant bidirectional repository syncing system across GitHub, GitLab, and Bitbucket with automated conflict resolution and webhook notifications",
      ],
    },
    {
      company: "Gravity Brands",
      role: "Backend Software Engineer (eCommerce)",
      date: "2017 \u2013 2018",
      bullets: [
        "Supported ~~$45M/year~~ in e-commerce revenue by optimizing a high-volume Django and Node backend and leading the transition to a serverless AWS Lambda microservices architecture with API Gateway",
      ],
    },
    {
      company: "Codesmith",
      role: "Director of Machine Learning (Education)",
      date: "2016 \u2013 2017",
      bullets: [
        "Created advanced ML course covering statistical and neural network models for mid-to-senior engineers",
      ],
    },
    {
      company: "FACT",
      role: "Manager (Behavioral Health Services)",
      date: "2010 \u2013 2016",
      bullets: [
        "Migrated health record system to a HIPAA-compliant database and automated billing, data collection, and patient reporting by integrating the Google Apps platform across the organization",
      ],
    },
  ],
  education: {
    school: "UC San Diego",
    degree: "BS Human Biology",
    note: "it was fascinating though!",
    date: "2008 \u2013 2012",
  },
  interests: "Writing, trust engineering, HCI, distributed systems, poetry, typography, standup comedy, evolutionary psychology, behavioral economics, lockpicking, generative art, high fives after shipping",
};
