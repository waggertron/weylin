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
      "WebSockets", "SQLAlchemy", "GORM", "Prisma", "Stripe", "Twilio", "Docker Compose",
      "Nginx", "Prometheus", "OpenAPI", "Playwright", "Pytest", "Kafka",
    ],
  },
  experience: [
    {
      company: "Syntrologie AI",
      role: "Senior Software Engineer",
      date: "2025 \u2013 Present",
      bullets: [
        "Implemented typed LLM extraction for website DOM analysis using ~~Instructor and Pydantic~~, validating model responses against structured pipeline contracts",
        "Moved workflow analysis and segment generation into ~~Redis/RQ background workers~~, connecting FastAPI endpoints and frontend result retrieval for asynchronous processing",
        "Added integration and component tests for embedding-provider boundaries and Redis wiki caching, covering AI data dependencies and recovery behavior",
        "Corrected PPO token-probability calculations and variable-length minibatch handling in a ~~PyTorch RLHF research implementation~~, adding local transformer regression tests",
        "Built ~~Kubernetes GitOps delivery~~ with GitHub Actions, Helm, and Argo CD, separating application builds from infrastructure updates and verifying image rollout and application health",
        "Extended ~~Terraform~~ infrastructure for application workloads, configuring private Azure Blob storage and environment-specific access; reconfigured EKS capacity with On-Demand and Spot node groups",
        "Built live analysis progress updates with FastAPI Server-Sent Events and React, giving users visibility into long-running processing workflows",
        "Established shared contracts and access controls across Next.js and FastAPI, automating TypeScript generation from OpenAPI in CI and enforcing role-based API permissions with regression coverage",
      ],
    },
    {
      company: "Coinbase (Contract)",
      role: "Senior Software Engineer, Content (FinTech)",
      date: "2024",
      bullets: [
        "Reduced annual operating costs by over ~~$100k~~ by simplifying content models shared across business units, editorial teams, localization workflows, and partner integrations",
        "Automated hundreds of manual content workflows with a content model management system supporting scripted migrations, schema validation, rollback, and scheduled deployments",
        "Coordinated cache and firewall replacement across active teams with phased rollout and real-time monitoring, maintaining zero downtime during peak traffic",
      ],
    },
    {
      company: "Nivelo",
      role: "Senior Software Engineer, Backend (FinTech)",
      date: "2023",
      bullets: [
        "Supported ~~$1B+/month~~ in payroll processing by upgrading core APIs for transaction validation, disbursement, and compliance reporting",
        "Designed an application framework to modernize a legacy monolith incrementally, separating services behind shared contracts and versioned interfaces for independent deployment",
        "Established a senior-junior mentorship program with regular code reviews and quarterly goals to support engineers' technical growth",
      ],
    },
    {
      company: "One Finance",
      role: "Senior Software Engineer, Platform (FinTech)",
      date: "2021 \u2013 2022",
      bullets: [
        "Prevented over ~~$40k/week~~ in fraud losses by implementing a real-time machine learning scoring API with TensorFlow, Python, and Flask to flag suspicious transactions",
        "Built and maintained ~~Kubernetes infrastructure with Terraform and Argo GitOps~~ for CI/CD, supporting automated rollbacks and canary deployments",
        "Mitigated credential stuffing with a Go service integrating AWS WAF, Lambda, and Redis for rate limiting, IP reputation scoring, and automated threat blocking",
      ],
    },
    {
      company: "Whip Media",
      role: "Backend Engineer (Media Tech)",
      date: "2019 \u2013 2021",
      bullets: [
        "Led development of the public TVDB v4 API serving ~~30B+ requests/month~~, preserving compatibility with v2 and v3 integrations and partner applications",
        "Built distributed search and indexing workflows with SQS, SNS, CloudSearch, and Algolia, supporting real-time updates, ranking, and synonym expansion",
        "Automated media keyframe extraction with FFMPEG and DynamoDB, integrating acquisition pipelines across upstream providers and content formats",
        "Decomposed two core monoliths into independently deployable microservices with shared contracts and horizontal scaling",
      ],
    },
    {
      company: "Bitmob",
      role: "Lead Engineer, Fullstack (Marketplace Tech)",
      date: "2018 \u2013 2019",
      bullets: [
        "Led full-stack development of a software contracting marketplace from inception to a ~~$4M valuation~~ at exit, using React, Node.js, Express, PostgreSQL, and AWS Lambda",
        "Built a unified contractor payment system integrating HyperWallet, Stripe, and PayPal, with automated reconciliation and transaction reporting",
        "Orchestrated long-running cross-service workflows with AWS Step Functions and Lambda, adding retry handling and persistent state",
        "Built bidirectional repository synchronization across GitHub, GitLab, and Bitbucket, including webhook notifications and automated conflict resolution",
      ],
    },
    {
      company: "Gravity Brands",
      role: "Backend Software Engineer (eCommerce)",
      date: "2017 \u2013 2018",
      bullets: [
        "Supported ~~$45M/year~~ in e-commerce revenue by optimizing Django and Node.js services and leading a migration to AWS Lambda microservices with API Gateway",
      ],
    },
    {
      company: "Codesmith",
      role: "Director of Machine Learning (Education)",
      date: "2016 \u2013 2017",
      bullets: [
        "Created an advanced machine learning course for mid-to-senior engineers covering statistical learning and neural network models",
      ],
    },
    {
      company: "FACT",
      role: "Manager (Behavioral Health Services)",
      date: "2010 \u2013 2016",
      bullets: [
        "Migrated health records to a HIPAA-compliant database and integrated Google Apps to automate billing, data collection, and patient reporting",
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
