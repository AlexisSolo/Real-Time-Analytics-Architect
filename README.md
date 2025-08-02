## Real-Time Analytics Architect 🛰️📊

An interactive, front-end visualization of a modern real-time data stack—the kind shipping production insights for curb-side, e-commerce, IoT, gaming and beyond.  
Click any node to see live KPIs, lineage, and plain-English explanations of how each component works together.

---

## ✨ Why This Project Stands Out
- **Full Streaming Pipeline, End-to-End** – Shows event ingestion ➜ streaming compute ➜ speed & batch layers ➜ semantic modeling ➜ forecasting ➜ BI.
- **Hands-on With Hot Tech** – Kafka, Spark Structured Streaming, Snowflake, dbt, Prophet/ARIMA, Power BI, plus a React/Vite TypeScript front-end.
- **Cloud-Ready** – Built and tested on AWS (EKS/Fargate + MSK + Snowflake + S3/CloudFront) but provider-agnostic.
- **AI-Powered Explanations** – Uses Gemini 1.5 Pro to generate human-readable descriptions for each architecture component.
- **Recruiter-Friendly** – Clean repo, clear docs, one-command local spin-up, and a demo deploy script.

---

## 🏗️ Architecture At A Glance
```mermaid
flowchart LR
  subgraph Ingestion
    PYP["Python Event Producer"]
    PYP --> KAF[Kafka]
  end

  subgraph Stream Processing
    KAF --> SPK[Spark Structured Streaming]
    SPK --> SPEED[Snowflake (Speed Layer)]
  end

  SPK --> BATCH[Snowflake (DWH)]
  BATCH --> DBT[dbt Transformations]
  DBT --> PRP[Prophet/ARIMA Forecasts]
  PRP --> RECO[Staffing Recommender]
  RECO --> ALERT[Teams Alerts]

  BATCH --> BI[Power BI Dashboard]
🔑 Key Components & Features
Layer	Tech	What It Demonstrates
Ingestion	Python Producer + Apache Kafka	Schema registry, exactly-once semantics
Stream Compute	Spark Structured Streaming	Windowed aggregations, watermarking
Speed Layer	Snowflake	Low-latency query serving
Batch Layer	Snowflake DWH	Column-store analytics @ scale
Transform	dbt	Version-controlled SQL models & tests
ML / Forecast	Prophet / ARIMA	Predictive staffing recommendations
Alerting	Microsoft Teams Webhook	Ops feedback loop
BI	Power BI	Real-time dashboards & KPI cards

🚀 Quick Start
Prerequisites
Node >= 18

npm or pnpm

Optional: Snowflake account & Kafka cluster (code includes docker-compose for local testing)


Local Run
bash
Copy
Edit
# 1. Install dependencies
npm i          # or pnpm i

# 2. Configure env
cp .env.local.example .env.local     # add your keys

# 3. Launch dev server
npm run dev
Navigate to http://localhost:5173 and click nodes to explore metrics.

One-Click AWS Deploy
bash
Copy
Edit
./scripts/deploy_aws.sh \
  --bucket rt-analytics-$(aws sts get-caller-identity --query 'Account' --output text) \
  --region us-east-1
Creates an S3 + CloudFront static site, provisions MSK topic & Lambda consumer, and streams demo events.

📂 Repo Structure
bash
Copy
Edit
.
├── components/            # React components (ArchitectureNode, LiveDashboard…)
├── services/              #  data-fetch helpers
├── scripts/               # Local simulator + AWS CDK deploy
├── types.ts               # Shared TypeScript types
├── constants.tsx          # Architecture graph definition
├── App.tsx                # Main layout
└── README.md
🧪 Tests & Quality
Vitest unit tests for helper utilities

Playwright e2e flow (architecture clicks + explanation overlay)

ESLint + Prettier enforced via pre-commit hook

Run locally:

bash
Copy
Edit
npm run test        # unit tests
npm run test:e2e    # end-to-end
npm run lint
🤝 Contributing
Fork → Create Branch → Commit → PR

Follow the commit style feat(scope): message (Conventional Commits)

New architecture nodes? Extend ARCHITECTURE_COMPONENTS_LIST in constants.tsx.
