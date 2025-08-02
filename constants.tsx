import React from 'react';
import type { ArchitectureComponent } from './types';

// Icon Components - Colors updated for the new theme
const PythonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 9l-3 12m0-12l3 12M9 6l-3.5 7h7L9 6zM15 6l3.5 7h-7L15 6z" /></svg>;
const KafkaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 12.5h2l2-2.5-2-2.5h-2l2 2.5-2 2.5zm5 0h2l2-2.5-2-2.5h-2l2 2.5-2 2.5zm5 0h2l2-2.5-2-2.5h-2l2 2.5-2 2.5z"/></svg>;
const SparkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L6 8l6 6 6-6-6-6z" /><path d="M6 8l6 6 6-6" /><path d="M6 14l6 6 6-6" /></svg>;
const SnowflakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-2.12 4.88L2 9l6.88 2.12L12 18l2.12-6.88L22 9l-7.88-2.12L12 2zm0 6l.71 1.62L14.34 10l-1.63.71L12 12.34l-.71-1.63L9.66 10l1.63-.71L12 8zm-5 5l-1.41 3.24L2 17l3.24-1.41L7 12zm10 0l1.76 4.03L22 17l-3.24-1.41L17 12zM12 16l-.71 1.62L9.66 18l1.63.71L12 20.34l.71-1.63L14.34 18l-1.63-.71L12 16z"/></svg>;
const DbtIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.13 14.88l-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66 1.41 1.41-7.07 7.07z"/></svg>;
const ProphetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 4-4" /></svg>;
const TeamsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 13.25c0 .41-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75zm-4-3c0 .41-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c.41 0 .75.34.75.75zM21 7.25c0-.96-.79-1.75-1.75-1.75h-4.5c-.96 0-1.75.79-1.75 1.75v1.5c0 .96.79 1.75 1.75 1.75h4.5c.96 0 1.75-.79 1.75-1.75v-1.5zm-8.25 6c0-.96-.79-1.75-1.75-1.75H4.25c-.96 0-1.75.79-1.75 1.75v5.5c0 .96.79 1.75 1.75 1.75h6.75c.96 0 1.75-.79 1.75-1.75v-5.5zM4 3h7.25c.96 0 1.75.79 1.75 1.75v1.5c0 .96-.79 1.75-1.75 1.75H4c-.96 0-1.75-.79-1.75-1.75v-1.5C2.25 3.79 3.04 3 4 3z"/></svg>;
const PowerBIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm2 2v14h4V5H5zm6 0v4h8V5h-8zm0 6v8h8v-8h-8z"/></svg>;

export const ARCHITECTURE_COMPONENTS_LIST: ArchitectureComponent[] = [
  {
    id: 'producer',
    name: 'Python Event Producer',
    icon: <PythonIcon />,
    category: 'Ingestion',
    description: 'Generates simulated JSON order events.',
    fullExplanation: `The process originates with a custom Python script acting as an event producer. This script is responsible for generating a high-fidelity simulation of real-world order events. Each event is a JSON object containing critical fields: \`order_id\`, a high-resolution \`timestamp\`, a list of \`items\`, an estimated preparation time (\`est_prep_min\`), and the \`picker_id\` assigned.

To ensure realism, the producer can modulate event frequency and data distributions to mimic peak and off-peak hours. It uses a robust library like \`kafka-python\` to serialize and publish these events directly into a specific Kafka topic, serving as the entry point for all downstream processing.`
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    icon: <KafkaIcon />,
    category: 'Ingestion',
    description: 'Streams order events from the producer.',
    fullExplanation: `Apache Kafka serves as the central nervous system of the ingestion layer. It's configured as a distributed, fault-tolerant event streaming platform. The 'orders' topic is partitioned across multiple brokers to handle high throughput and ensure data durability through replication.

Kafka decouples the Python producer from the Spark consumer, allowing each to scale independently. Its role is to provide a persistent, ordered log of all order events, enabling consumers like Spark to process them in near real-time while also allowing for potential replayability or consumption by other auxiliary services without impacting the primary flow.`
  },
  {
    id: 'spark',
    name: 'Spark Streaming',
    icon: <SparkIcon />,
    category: 'Processing',
    description: 'Processes data in 60-second aggregations.',
    fullExplanation: `Spark Structured Streaming is the core of our real-time processing engine. It connects to the Kafka 'orders' topic and consumes the event stream as a micro-batch DataFrame.

We apply a 60-second tumbling window aggregation to the incoming data. Within each window, we compute key metrics such as total orders, average preparation time, and item counts. This transformation enriches the raw event data into a structured, aggregated format that is optimized for analytical querying. The resulting micro-batch is then written to a Snowflake table designated as our speed layer.`
  },
  {
    id: 'snowflake_speed',
    name: 'Snowflake (Speed Layer)',
    icon: <SnowflakeIcon />,
    category: 'Storage',
    description: 'Stores mini-batches in a speed-layer table.',
    fullExplanation: `The speed layer is implemented as a dedicated, transient table within Snowflake, partitioned by timestamp. Its purpose is to land the aggregated micro-batches from Spark with minimal latency.

This design enables immediate querying of very recent data (i.e., the last few hours) without the overhead of merging it into the main data warehouse. By separating concerns, we allow Power BI dashboards to query this table for up-to-the-minute KPIs, satisfying the low-latency requirement of the system while the more intensive data integration happens asynchronously.`
  },
  {
    id: 'snowflake_dw',
    name: 'Snowflake (DWH)',
    icon: <SnowflakeIcon />,
    category: 'Storage',
    description: 'Maintains historical star schema data.',
    fullExplanation: `Snowflake also serves as our cloud-native Data Warehouse, housing the comprehensive historical dataset. The architecture follows a traditional star schema with a central \`fact_orders\` table linked to dimension tables like \`dim_date\`, \`dim_store\`, and \`dim_item\`.

This historical repository is the 'source of truth' and is optimized for complex analytical queries, business intelligence reporting, and, critically, for retraining our machine learning models. Data from the speed layer is periodically merged into this DWH using dbt.`
  },
  {
    id: 'dbt',
    name: 'dbt',
    icon: <DbtIcon />,
    category: 'Transformation',
    description: 'Merges speed layer with historical data.',
    fullExplanation: `dbt (data build tool) orchestrates the transformation logic within our Snowflake environment. We've defined dbt models that handle the critical task of merging data from the real-time speed layer into the historical fact tables.

This process, typically run on a more frequent batch schedule (e.g., every 15-30 minutes), de-duplicates records and elegantly combines the near-real-time data with the long-term historical data. dbt ensures this transformation is version-controlled, documented, and testable, bringing software engineering best practices to our analytics code.`
  },
  {
    id: 'prophet',
    name: 'Prophet/ARIMA',
    icon: <ProphetIcon />,
    category: 'Forecasting',
    description: 'Nightly retraining of demand forecasts.',
    fullExplanation: `The forecasting component leverages a time-series model like Facebook's Prophet or a classical ARIMA model. A nightly scheduled job retrains this model using the full historical dataset available in the Snowflake DWH.

The model learns daily, weekly, and seasonal patterns from past order volumes. Once trained, the model is serialized and used to generate a rolling 15-minute demand forecast for the upcoming day. This forecast provides a crucial baseline for our staffing recommendations, predicting the expected workload before it materializes.`
  },
  {
    id: 'staffing_logic',
    name: 'Staffing Recommender',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    category: 'Forecasting',
    description: 'Computes recommended staffing.',
    fullExplanation: `This is a business logic component, typically a Python service or a Snowflake User-Defined Function (UDF). It synthesizes multiple data points in real-time to generate a concrete headcount recommendation.

Its primary inputs are:
1) The live backlog of orders, calculated directly from the speed layer.
2) The 15-minute demand forecast from the Prophet model.
3) Pre-configured business rules, such as target order completion time (SLA) and average picker efficiency.

The output is a simple integer: the number of pickers required for the next 15-minute interval to meet demand without violating SLAs.`
  },
  {
    id: 'teams',
    name: 'Microsoft Teams Alerts',
    icon: <TeamsIcon />,
    category: 'Visualization & Alerting',
    description: 'Sends green/yellow/red staffing alerts.',
    fullExplanation: `To ensure operational agility, we translate staffing discrepancies into actionable alerts. A monitoring service continuously compares the 'recommended headcount' from our logic with the 'scheduled headcount' (sourced from a separate HR system or input manually).

Based on predefined thresholds, it triggers alerts of varying severity (e.g., Green: staffed correctly, Yellow: understaffed by 1, Red: understaffed by 2+). These alerts are formatted as rich adaptive cards and sent to a specific Microsoft Teams channel via a webhook, immediately notifying store managers of potential service risks.`
  },
  {
    id: 'powerbi',
    name: 'Power BI Dashboard',
    icon: <PowerBIIcon />,
    category: 'Visualization & Alerting',
    description: 'Displays live KPIs using DirectQuery.',
    fullExplanation: `The Power BI dashboard is the primary visualization layer for business stakeholders. It connects to Snowflake using DirectQuery mode to ensure the data is always fresh, querying both the speed-layer and the main DWH tables.

The dashboard presents critical, real-time KPIs in an intuitive layout: a tile showing the current open order backlog, a line chart comparing the forecasted demand against actual order volume, a gauge indicating the currently recommended staffing level, and a prominent status indicator reflecting the latest Teams alert. This provides a single pane of glass for monitoring operational health.`
  },
];