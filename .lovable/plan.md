## About page plan

Build a new `/about` route styled to match the existing portfolio (Montserrat, white bg, hobby palette) but structured like calebixca.com/about — with a top skills marquee and a timeline-style resume below.

### 1. Navigation

- Update `src/routes/__root.tsx`: turn "ABOUT" into a real `<Link to="/about">` (keep uppercase style). Leave PROJECTS/PLAY as-is (hash links) for now.

### 2. New route: `src/routes/about.tsx`

Head metadata: unique title/description for the About page.

**Section A — Skills marquee (top)**

- One horizontal row of pill-shaped skill tags scrolling from left to right (infinite loop via CSS `@keyframes` translateX + duplicated content for seamless loop; pauses on hover).
- Pills use the site's hobby colors (`--hobby-design`, `--hobby-code`, `--hobby-books`, `--hobby-bees`) cycled across tags, with subtle 1px border and rounded-full styling — matching the site's palette instead of Caleb's orange.
- Skills (from `skills.docx`):
Unity 2D · C# Programming · HTML5 & CSS3 · JavaScript · Figma (UI/UX) · Articulate Storyline · Moodle LMS · Lovable.dev · Adobe Illustrator · GitHub Pages · Advanced Excel · Canva · UI/UX Design · Gamification · Content Scripting · Training & Onboarding · Public Speaking

**Section B — Intro paragraph**
Short English intro translated from resume summary:

> 👋 Hi, I'm Yasmin - an Instructinal Design student at HIT entering year 3, with a strong background in developing learning solutions and complex instructional programs, plus technical development skills. I break down complex material into interactive digital learning.

**Section C — Timeline (mirrors Caleb's about layout)**
Two-column rows: left = year (muted, small), right = role/title (bold), org, dates, bullets. Vertical rhythm with generous spacing, thin divider between entries.

**Experience**

- **2024** — Research Support Technician · Hazera Ltd. · Mar 2024 – Nov 2024
  - Managed complex projects: led trials across multiple sites in parallel, with tight timelines and real-time problem-solving.
  - Data analysis & information systems: ongoing documentation, tracking, and analysis of trial results in Excel.
  - Organization & optimization: structured infrastructure and managed equipment/inventory to improve operational effectiveness.

**Military Service**

- **2020–2023** — Naval Intelligence Analyst · Israeli Navy · Sergeant
  - Instructional design & development: broke down complex content, wrote lesson plans, and built large-scale simulation exercises for a reserve force of 100+ personnel.
  - Command & training management: directly commanded an advanced intelligence course and ran professional training programs for operators before operational activity.
  - Mentoring & knowledge retention: managed onboarding, training, and refresher days.
  - Learning events: planned and produced peak-days, workshops, and professional lectures to deepen unit expertise.

**Education**

- **2024 – Present** — B.A. Learning Technologies · Holon Institute of Technology (HIT)
  - Entering year 3. Focus on instructional methodology, development & programming, and UI/UX design.
- **2017–2020** — ORT High School
  - Full matriculation, 10-unit Software Engineering. Technological matriculation diploma and Mofet excellence certificate.

*(The "Selected Projects" list from the resume is already covered by the Home page's project grid, so I'll skip it on About to avoid duplication — flag if you want it included here too.)*

### 3. Styles (`src/styles.css`)

- Add `@keyframes marquee-left` / `marquee-right` and a `.marquee` utility class (flex, `animation` 40s linear infinite, `hover: animation-play-state: paused`).
- Add small `.skill-pill` helper class for consistent pill look using site palette.

### Technical notes

- No new dependencies; pure CSS marquee (duplicated track for seamless loop).
- All colors via existing CSS variables — no hardcoded hex in components.
- Client-safe only; no server functions needed.