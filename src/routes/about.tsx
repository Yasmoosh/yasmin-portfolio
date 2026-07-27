import { createFileRoute } from "@tanstack/react-router";
import { Connect } from "../components/Connect";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yasmin Greenholts" },
      {
        name: "description",
        content:
          "About Yasmin Greenholts — Learning Technologies student at HIT, instructional designer, and programmer. Experience, military service, and education.",
      },
      { property: "og:title", content: "About — Yasmin Greenholts" },
      {
        property: "og:description",
        content:
          "Learning Technologies student at HIT with a background in instructional design, training leadership, and development.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

const skills = [
  { label: "Unity 2D", color: "hobby-design" },
  { label: "C# Programming", color: "hobby-code" },
  { label: "HTML5 & CSS3", color: "hobby-books" },
  { label: "JavaScript", color: "hobby-bees" },
  { label: "Figma (UI/UX)", color: "hobby-design" },
  { label: "Articulate Storyline", color: "hobby-code" },
  { label: "Moodle LMS", color: "hobby-books" },
  { label: "Lovable.dev", color: "hobby-bees" },
  { label: "Adobe Illustrator", color: "hobby-design" },
  { label: "GitHub Pages", color: "hobby-code" },
  { label: "Advanced Excel", color: "hobby-books" },
  { label: "Canva", color: "hobby-bees" },
  { label: "UI/UX Design", color: "hobby-design" },
  { label: "Gamification", color: "hobby-code" },
  { label: "Content Scripting", color: "hobby-books" },
  { label: "Training & Onboarding", color: "hobby-bees" },
  { label: "Public Speaking", color: "hobby-design" },
  { label: "Vibe Coding", color: "hobby-code" },
];

function SkillsMarquee() {
  const track = [...skills, ...skills];
  return (
    <div className="marquee-wrapper py-10">
      <div className="marquee">
        <div className="marquee-track">
          {track.map((s, i) => (
            <span
              key={`${s.label}-${i}`}
              className="skill-pill"
              style={{ ["--pill-bg" as string]: `var(--${s.color})` }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type Entry = {
  year: string;
  title: string;
  org: string;
  dates?: string;
  bullets: string[];
};

const experience: Entry[] = [
  {
    year: "2024",
    title: "Research Support Technician",
    org: "Hazera Ltd.",
    dates: "Mar 2024 – Nov 2024",
    bullets: [
      "Managed complex projects: led trials across multiple sites in parallel, with tight timelines and real-time problem-solving.",
      "Data analysis & information systems: ongoing documentation, tracking, and analysis of trial results in Excel.",
      "Organization & optimization: structured infrastructure and managed equipment and inventory to improve operational effectiveness.",
    ],
  },
];

const military: Entry[] = [
  {
    year: "2020–2023",
    title: "Naval Intelligence Analyst",
    org: "Israeli Navy · Sergeant",
    bullets: [
      "Instructional design & development: broke down complex content, wrote lesson plans, and built large-scale simulation exercises for a reserve force of 100+ personnel.",
      "Command & training management: directly commanded an advanced intelligence course and ran professional training programs for operators before operational activity.",
      "Mentoring & knowledge retention: managed onboarding, training, and refresher days.",
      "Learning events: planned and produced peak-days, workshops, and professional lectures to deepen unit expertise.",
    ],
  },
];

const education: Entry[] = [
  {
    year: "2024 – Present",
    title: "B.A. Learning Technologies",
    org: "Holon Institute of Technology (HIT)",
    bullets: [
      "Entering year 3. Focus on instructional methodology, development and programming, and UI/UX design.",
    ],
  },
  {
    year: "2017–2020",
    title: "High School Diploma",
    org: "ORT High School",
    bullets: [
      "Full Bagrut, 10-unit Software Engineering. Technological Bagrut diploma and Mofet excellence certificate.",
    ],
  },
];

function TimelineSection({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-8 flex flex-col gap-12">
        {entries.map((e) => (
          <div
            key={`${e.year}-${e.title}`}
            className="grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-[120px_1fr] sm:gap-10"
          >
            <div className="text-sm font-medium text-muted-foreground">{e.year}</div>
            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {e.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {e.org}
                {e.dates ? ` · ${e.dates}` : ""}
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/80">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <main>
      <SkillsMarquee />
      <section className="mx-auto max-w-3xl px-6 pt-8">
        <p className="text-lg leading-relaxed text-foreground/85 sm:text-xl">
          👋 Hi, I'm Yasmin, a Learning Technologies & Instructional Design
          student at HIT (entering year 3) with a passion for driving innovation
          through AI-integrated development. Combining a strong background in
          leadership and complex training operations with robust development
          skills, I specialize in capturing intricate concepts and transforming
          them into cutting-edge, interactive digital experiences. I thrive on
          exploring new technological horizons to build learning ecosystems that
          are adaptive, engaging, and future-ready.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <TimelineSection title="Experience" entries={experience} />
        <TimelineSection title="Military Service" entries={military} />
        <TimelineSection title="Education" entries={education} />
      </div>
      <Connect />
    </main>
  );
}
