
<div align="center">

# NEXORA
### Autonomous Campus Intelligence & Digital Twin

**An Interactive 3D Digital Twin for Intelligent Campus Monitoring, Infrastructure Visualization and Future AI-Driven Operations.**

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-3D%20Engine-black?logo=threedotjs)
![Status](https://img.shields.io/badge/Status-Prototype-8A2BE2)

</div>

---

## Overview

NEXORA is an interactive campus intelligence platform designed to explore the future of smart infrastructure management through a unified digital environment.

It combines a 3D digital twin, simulated IoT telemetry, real-time-style monitoring interfaces and intelligent operational visualization into a centralized campus command center.

The platform provides a spatial representation of campus infrastructure, allowing users to explore buildings, inspect operational parameters, monitor simulated anomalies and understand the relationship between physical infrastructure and digital intelligence.

NEXORA is envisioned as a foundation for integrating IoT systems, data analytics and autonomous AI agents into future smart campus environments.

## Key Features

- **Interactive 3D Digital Twin:** Explore a three-dimensional representation of campus infrastructure.
- **Campus Intelligence Dashboard:** Monitor campus-wide operational indicators.
- **Building-Level Monitoring:** Inspect individual buildings and their simulated operational parameters.
- **IoT Simulation:** Visualize simulated energy consumption, temperature and occupancy data.
- **Anomaly Simulation:** Trigger and investigate simulated infrastructure anomalies.
- **Activity Monitoring:** Track operational events through an integrated activity feed.
- **Asset Discovery:** Search and filter campus infrastructure.
- **Data Export:** Export campus asset readings in CSV format.
- **Modern Command Center:** Navigate an interactive, responsive dashboard.
- **Future AI Integration:** Architecture designed to accommodate agent-assisted monitoring and investigation.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Application framework |
| React 19 | Component-based UI |
| TypeScript | Type-safe development |
| Three.js | 3D rendering |
| React Three Fiber | React-based 3D integration |
| Drei | 3D utilities and controls |
| Recharts | Data visualization |
| Lucide React | Interface icons |
| CSS / Tailwind CSS | Styling |

## Architecture

```text
             NEXORA CAMPUS INTELLIGENCE
                         |
             CAMPUS COMMAND CENTER
                         |
          +--------------+--------------+
          |              |              |
      Dashboard      Digital Twin    Activity Feed
          |              |              |
          +--------------+--------------+
                         |
                CAMPUS ASSET LAYER
                         |
          +--------------+--------------+
          |              |              |
        Energy       Temperature     Occupancy
       Simulation     Simulation     Simulation
          |              |              |
          +--------------+--------------+
                         |
                ANOMALY SIMULATION
                         |
                OPERATIONAL INSIGHTS
```

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/NEXORA.git
```

### Navigate to the Project

```bash
cd NEXORA
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the application:

http://localhost:3000

### Production Build

```bash
npm run build
```

## Project Structure

```text
NEXORA/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   └── CampusScene.tsx
│   │
│   └── lib/
│       └── campus.ts
│
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

## How It Works

1. **Campus Visualization:** The 3D environment represents campus infrastructure through interactive building models.
2. **Asset Selection:** Users can select individual buildings to inspect their operational information.
3. **Data Monitoring:** The dashboard displays simulated energy, temperature and occupancy readings.
4. **Anomaly Detection Simulation:** Users can trigger a sample anomaly and observe the corresponding dashboard updates.
5. **Operational Monitoring:** The activity feed displays simulated infrastructure events.
6. **Data Reporting:** Users can export current asset readings for further analysis.

## Development Roadmap

NEXORA is envisioned as a continuously evolving intelligent infrastructure platform.

| Phase | Development Focus |
|---|---|
| Phase 1 | Interactive 3D Digital Twin and Campus Dashboard |
| Phase 2 | Live IoT Telemetry Integration |
| Phase 3 | Historical Data Analytics and Predictive Monitoring |
| Phase 4 | Agentic AI for Autonomous Investigation |
| Phase 5 | Intelligent Decision Support and Verified Operations |

### Proposed Future Architecture

```text
       IoT DEVICES / SENSOR NETWORK
                    |
                    v
             DATA INGESTION
                    |
                    v
           TELEMETRY PROCESSING
                    |
                    v
          ANOMALY DETECTION
                    |
                    v
            AI AGENT SYSTEM
                    |
          +---------+---------+
          |         |         |
       Analysis  Planning  Verification
          |         |         |
          +---------+---------+
                    |
                    v
           OPERATIONAL INSIGHTS
                    |
                    v
             HUMAN APPROVAL
                    |
                    v
          VERIFIED OPERATIONS
```

*Note: The current version is a front-end prototype using simulated data. Live IoT connectivity, backend services and AI-agent workflows are planned future extensions.*

## Project Vision

The long-term vision of NEXORA is to bridge physical infrastructure and digital intelligence.

By combining digital twins, IoT telemetry, data-driven monitoring and agentic AI, the platform aims to explore how complex campus environments can become more observable, responsive and intelligent.

## Contributing

Contributions, suggestions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Submit a pull request.

## License

No license has been specified yet. All rights remain with the project owner unless a license is added.

---

<div align="center">

### NEXORA
**Visualizing Infrastructure. Connecting Intelligence. Enabling Tomorrow.**

</div>
