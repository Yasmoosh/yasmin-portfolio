import { Mail, Linkedin } from "lucide-react";

export function Connect() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-28 pt-8 text-center"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
        Let's connect!
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
        Open to collaborations, job offers, and thoughtful projects in learning
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
