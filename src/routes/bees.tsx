import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bees")({
  head: () => ({
    meta: [
      { title: "Bees — Yasmin Greenholts" },
      {
        name: "description",
        content:
          "Notes and photos from Yasmin's beekeeping — a small window into hives, honey, and the quiet obsession of tending pollinators.",
      },
      { property: "og:title", content: "Bees — Yasmin Greenholts" },
      {
        property: "og:description",
        content:
          "A small corner of the site for beekeeping notes and photos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BeesPage,
});

function BeesPage() {
  return (
    <main className="mx-auto max-w-3xl px-10 pb-24 pt-8">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        <span
          className="relative inline-block px-2"
          style={{
            background: "var(--hobby-bees)",
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
          }}
        >
          Bees
        </span>{" "}
        — coming soon
      </h1>
      <p className="mt-6 text-base leading-relaxed text-foreground/70">
        This corner of the site is still being built. Come back soon for notes
        and photos from the hive.
      </p>
    </main>
  );
}
