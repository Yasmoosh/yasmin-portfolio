import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

import img1 from "../assets/project-1.png.asset.json";
import img2 from "../assets/project-2.png.asset.json";
import img3 from "../assets/project-3.png.asset.json";
import img4 from "../assets/project-4.png.asset.json";
import img5 from "../assets/project-5.png.asset.json";
import img6 from "../assets/project-6.png.asset.json";
import img7 from "../assets/project-7.png.asset.json";
import img8 from "../assets/project-8.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yasmin Greenholts — Learning Technologies Portfolio" },
      {
        name: "description",
        content:
          "I design learning experiences, write code, read books, and keep bees. Portfolio of Yasmin Greenholts, HIT Learning Technologies.",
      },
      { property: "og:title", content: "Yasmin Greenholts — Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work in gamified learning, instructional design, and UI/UX.",
      },
    ],
  }),
  component: Home,
});

type Project = {
  title: string;
  subtitle: string;
  href?: string;
  image?: string;
  tile: string; // tailwind bg class
};

const projects: Project[] = [
  {
    title: "Attack on Kraken",
    subtitle: "A 2D interactive sorting-game generator built on a custom CMS (Unity & C#).",
    href: "https://triangle.telem-hit.net/2026/AttackOnKraken_YasminOriOmer/",
    image: img7.url,
    tile: "bg-tile-1",
  },
  {
    title: "Flipped Classroom — Digital Course",
    subtitle: "Landing page and asynchronous Moodle course for high-school humanities teachers.",
    href: "https://telemview.telem-hit.net/product/4458",
    image: img3.url,
    tile: "bg-tile-2",
  },
  {
    title: "Flipped Classroom Lab",
    subtitle: "An interactive digital environment for teacher training (Lovable & HTML/CSS).",
    href: "https://classroom-flip-lab.lovable.app/",
    image: img2.url,
    tile: "bg-tile-3",
  },
  {
    title: "ShipEat",
    subtitle: "Arcade learning game built during a Game Jam (Web & JS).",
    href: "https://yasmoosh.github.io/ShipEat/",
    image: img6.url,
    tile: "bg-tile-4",
  },
  {
    title: "Community Garden Safety",
    subtitle: "A gamified learning module for children ages 6–12, built in Storyline.",
    tile: "bg-tile-5",
  },
  {
    title: "Blip",
    subtitle: "User research, UI/UX spec and prototype for a body-language training site (Figma).",
    href: "https://www.figma.com/proto/GrDRhGlJ96MXBc2eOAj53v/Blip?page-id=1915%3A15269&node-id=1915-19663&viewport=1595%2C-634%2C0.03&t=b6oryNdMyQIYYKzW-1&scaling=scale-down&content-scaling=fixed",
    image: img5.url,
    tile: "bg-tile-6",
  },
  {
    title: "Docu-Ecology: Following Wild Bees",
    subtitle: "Script, production and editing of a short documentary on wild bees' ecological role.",
    href: "https://drive.google.com/file/d/1x5ubdMJARr1YeZygw4oZOpMf6lYUS7c_/view",
    image: img8.url,
    tile: "bg-tile-7",
  },
  {
    title: "Needs Analysis & Design Document",
    subtitle: "Comprehensive organizational analysis and spec, from discovery to implementation (ADDIE).",
    tile: "bg-tile-8",
  },
  {
    title: "Cats & Dogs Adoption Site",
    subtitle: "Interactive front-end and dynamic UI for a social-impact initiative (HTML, CSS & JS).",
    href: "https://yasmoosh.github.io/Adoption-Site/",
    image: img1.url,
    tile: "bg-tile-9",
  },
  {
    title: "5 Ways to Integrate AI in the Classroom",
    subtitle: "A visual, methodology-focused guide for educators (Canva).",
    href: "https://canva.link/rtzpruqz8jtp9ys",
    image: img4.url,
    tile: "bg-tile-10",
  },
];

function HobbySpan({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span
      className="relative inline-block cursor-default rounded-md px-1 transition-colors duration-300"
      style={{
        // use CSS var directly for hover; hover handled via inline style-less class:
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: `var(--${color})` }}
      />
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-10 pt-16 pb-16 sm:pt-24 sm:pb-24">
      <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-6xl md:text-[5.25rem]">
        <span className="block">
          Hi, I'm{" "}
          <span
            className="relative inline-block px-2"
            style={{
              background: "var(--marker-yellow)",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
            }}
          >
            Yasmin
          </span>
        </span>
        <span className="mt-2 block">
          I{" "}
          <Hoverable color="hobby-design">design learning experiences</Hoverable>
          {", "}
          <Hoverable color="hobby-code">write code</Hoverable>
          {", "}
          <Hoverable color="hobby-books">read books</Hoverable>
          {", and "}
          <Hoverable color="hobby-bees">keep bees</Hoverable>
          .
        </span>
      </h1>
    </section>
  );
}

function Hoverable({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span
      className="hobby"
      style={{ ["--hobby-bg" as string]: `var(--${color})` }}
    >
      {children}
    </span>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 pb-20">
      <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
        An Instructional Design student based in Israel.
        <br />
        Also a programmer specializing in gamified learning, digital training
        modules, and seamless UI/UX.
      </p>
    </section>
  );
}


function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl ${project.tile} p-5 transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-center text-sm font-medium text-foreground/60">
            {project.title}
          </div>
        )}
        {!project.href && (
          <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/75">
        {project.subtitle}
      </p>
    </div>
  );

  if (!project.href) {
    return <div>{inner}</div>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
    >
      {inner}
    </a>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
          MY RECENT PROJECTS
        </h2>
        <span className="text-sm text-muted-foreground">2024 – 2026</span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-28 pt-8 text-center"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
        Let's connect!
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
        Open to collaborations, internships, and thoughtful projects in learning
        design and technology.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <a
          href="mailto:yasmin295g@gmail.com"
          aria-label="Email Yasmin"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card p-3 text-foreground transition-all hover:-translate-y-0.5 hover:bg-hobby-design/40"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/yasmin-greenholts-60b0b0274"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yasmin on LinkedIn"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card p-3 text-foreground transition-all hover:-translate-y-0.5 hover:bg-hobby-code/40"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
      <p className="mt-16 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Yasmin Greenholts
      </p>

    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Connect />
    </main>
  );
}
