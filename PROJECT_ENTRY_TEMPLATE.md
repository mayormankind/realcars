## Prompt for AI Agent

You have just finished helping build a project. I need you to generate a JSON object
that describes this project for my developer portfolio CMS. I will copy the values
from your JSON and paste them into the corresponding form fields in my admin dashboard.

Read the field guide below carefully before filling anything in. Then output a single,
complete, valid JSON object using the template at the bottom. Do not skip any field —
use an empty string `""` or empty array `[]` for anything that genuinely does not apply.

---

### FIELD GUIDE

#### SECTION: Basic Information

| Field | What to write |
|---|---|
| `title` | Full project name as it should appear publicly. E.g. `"SaaS Command Center"` |
| `slug` | URL-safe version: lowercase, hyphens, no spaces. E.g. `"saas-command-center"` |
| `subtitle` | 2–4 word badge label shown on the project page. E.g. `"Product Deep Dive"`, `"Enterprise Solution"`, `"Fintech Analytics"` |
| `category` | **Exact value from this list only:** `Full Stack`, `Frontend`, `Backend`, `SaaS Platform`, `Analytics`, `E-Commerce`, `Mobile`, `API`, `DevOps`, `AI/ML` |
| `period` | Quarter and year the project was built. E.g. `"Q4 2024"` |

---

#### SECTION: Tags

| Field | What to write |
|---|---|
| `tags` | Array of 2–4 short label strings. E.g. `["SaaS Solution", "Full Stack"]` or `["Fintech", "Analytics"]` |

---

#### SECTION: Narrative & Hook

| Field | What to write |
|---|---|
| `shortDescription` | 1–2 sentences. Shown on project listing cards. Highlight the core technology and what was built. Keep it under 160 characters. |
| `longDescription` | 2–3 sentences. Shown as the hero intro on the project detail page. More narrative — explain what the product does, who it's for, and its core technical focus. |

---

#### SECTION: Case Study Deep Dive

Three sub-sections: **Challenge**, **Strategy**, **Impact**. Each has the same three fields.

| Field | What to write |
|---|---|
| `subtitle` | Short section label. Follow this format: `"01 — The [Word]"` for challenge, `"02 — The [Word]"` for strategy, `"03 — The [Word]"` for impact. E.g. `"01 — The Friction"`, `"02 — The Strategy"`, `"03 — The Impact"` |
| `title` | 3–6 word bold headline summarising that section. E.g. `"Data Silos & User Attrition"`, `"Unified Data & Real-time Feedback"`, `"35% Increase in Conversion"` |
| `description` | 2–4 sentences expanding on the headline. Be specific. For challenge: describe the real problem faced. For strategy: explain the technical approach taken. For impact: provide measurable or qualitative outcomes. |

---

#### SECTION: Media Assets

| Field | What to write |
|---|---|
| `heroImage` | Full URL to the project's main cover/hero image. If the project is deployed, use a screenshot URL. If none is available, use `""` — the owner will upload it manually via the media picker. |
| `demoVideoUrl` | Full URL to a demo video (optional). Use `""` if there is no demo video. |

---

#### SECTION: Product Metrics

Array of **2–4 key stats** from the project. Each metric object has:

| Field | What to write |
|---|---|
| `label` | Short metric name. E.g. `"Time to Market"`, `"Uptime"`, `"Lighthouse Score"`, `"Active Users"` |
| `value` | The stat itself. E.g. `"42"`, `"+35%"`, `"99.9%"`, `"<0.2s"`, `"12k+"` |
| `subtext` | Optional unit or clarifier shown in smaller text beside the value. E.g. `"Days"`, `"Avg. monthly"`. Use `""` if not needed. |

---

#### SECTION: Architecture

| Field | What to write |
|---|---|
| `title` | Title of the architecture section. E.g. `"Relational Mapping & API Flow"`, `"Event-Driven Microservices"` |
| `subtitle` | Short label shown above the title. E.g. `"Product Architecture"`, `"System Architecture"`, `"Backend Architecture"` |
| `diagramType` | **Exact value from this list only:** `schema`, `flow`, `pipeline`, `stack`, `network` |
| `description` | One-line summary of the tech flow. E.g. `"Supabase Auth → Edge Functions → Firebase Realtime Sync"` |
| `points` | Array of **2–4 architecture highlight cards** (see sub-fields below) |

Each item in `architecture.points`:

| Field | What to write |
|---|---|
| `iconName` | **Must be one of the Available Icons listed below** |
| `title` | Short component/system name. E.g. `"API & State Management"`, `"Database Schema"`, `"Backend Services"` |
| `description` | 2–3 sentences explaining this component's role and any key technical decisions made. |

---

#### SECTION: Lessons & Trade-offs

Array of **1–3 genuine lessons or trade-offs** encountered during the project. Each item:

| Field | What to write |
|---|---|
| `iconName` | **Must be one of the Available Icons listed below** |
| `title` | Short lesson title. E.g. `"Speed vs. Perfect Abstraction"`, `"Framework Choice: Next.js vs. SPA"` |
| `description` | 2–4 sentences. Be honest and reflective. Explain the decision, the trade-off made, and what you'd do differently or the same again. |
| `highlight` | Optional: one key phrase from the description to visually emphasise. E.g. `"Server-Side Rendering (SSR)"`. Use `""` if none. |

---

#### SECTION: Documentation Links

Array of **0–3 links** to project documentation (PRDs, ER diagrams, API docs, user flows, etc.). Each item:

| Field | What to write |
|---|---|
| `iconName` | **Must be one of the Available Icons listed below** |
| `title` | Document name. E.g. `"Product Requirements (PRD)"`, `"API Documentation"`, `"Database ER Diagram"`, `"Onboarding User Flow"` |
| `href` | Full URL to the document. Use `"#"` as a placeholder if the URL is not yet available. |

---

#### SECTION: Stack & Deployment

| Field | What to write |
|---|---|
| `techStack` | Array of all core technologies used. E.g. `["Next.js", "TypeScript", "Supabase", "Tailwind", "Node.js"]` |
| `links.live` | Full URL to the live deployed project. E.g. `"https://myapp.vercel.app"`. Use `"#"` if not deployed yet. |
| `links.repo` | Full URL to the source code repository. E.g. `"https://github.com/username/repo"`. Use `""` if the repo is private or not applicable. |

---

### AVAILABLE ICON NAMES
For any field named `iconName`, you **must** pick from this exact list. Do not invent values.

```
Database      FileText     GaugeCircle   PenTool      Route
Settings2     SquareStack  Layout        Server       Code
Globe         Zap          Cpu           Cloud        Shield
Lock          Key          Workflow      GitBranch    Terminal
```

**Picking guide:**
- `Database` / `Server` → database schemas, backend services, data layers
- `Settings2` / `Workflow` → API design, state management, configuration
- `Code` / `Terminal` / `GitBranch` → code quality, CI/CD, version control
- `GaugeCircle` / `Zap` → performance, speed, optimisation
- `Globe` / `Cloud` → deployment, CDN, cloud infrastructure
- `Shield` / `Lock` / `Key` → security, authentication, authorisation
- `SquareStack` / `Layout` → UI architecture, component systems, design systems
- `FileText` / `PenTool` / `Route` → documentation, design, user flows
- `Cpu` → algorithms, processing, AI/ML tasks

---

### JSON TEMPLATE — Fill every field and return the completed object

```json
{
  "title": "",
  "slug": "",
  "subtitle": "",
  "category": "",
  "period": "",
  "tags": [],
  "shortDescription": "",
  "longDescription": "",
  "heroImage": "",
  "demoVideoUrl": "",
  "details": {
    "challenge": {
      "subtitle": "01 — The Challenge",
      "title": "",
      "description": ""
    },
    "strategy": {
      "subtitle": "02 — The Strategy",
      "title": "",
      "description": ""
    },
    "impact": {
      "subtitle": "03 — The Impact",
      "title": "",
      "description": ""
    }
  },
  "metrics": [
    { "label": "", "value": "", "subtext": "" },
    { "label": "", "value": "", "subtext": "" }
  ],
  "architecture": {
    "title": "",
    "subtitle": "",
    "diagramType": "schema",
    "description": "",
    "points": [
      {
        "iconName": "Settings2",
        "title": "",
        "description": ""
      },
      {
        "iconName": "Database",
        "title": "",
        "description": ""
      }
    ]
  },
  "lessons": [
    {
      "iconName": "GaugeCircle",
      "title": "",
      "description": "",
      "highlight": ""
    }
  ],
  "docs": [
    {
      "iconName": "FileText",
      "title": "",
      "href": ""
    }
  ],
  "techStack": [],
  "links": {
    "live": "",
    "repo": ""
  }
}
```
