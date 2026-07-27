import { createFileRoute } from "@tanstack/react-router";


import img1 from "../assets/bees/image1.png.asset.json";
import img2 from "../assets/bees/image2.png.asset.json";
import img3 from "../assets/bees/image3.png.asset.json";
import img4 from "../assets/bees/image4.png.asset.json";
import vid1 from "../assets/bees/video1.mov.asset.json";
import vid2 from "../assets/bees/video2.mov.asset.json";

export const Route = createFileRoute("/bees")({
  head: () => ({
    meta: [
      { title: "Bees — Yasmin Greenholts" },
      {
        name: "description",
        content:
          "Why I grow bees — Yasmin's personal commitment to wild pollinators, backyard hives, and ecological balance.",
      },
      { property: "og:title", content: "Bees — Yasmin Greenholts" },
      {
        property: "og:description",
        content:
          "A scrapbook from the hive: photos, clips, and notes on beekeeping and wild pollinators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: img1.url },
      { name: "twitter:image", content: img1.url },
    ],
  }),
  component: BeesPage,
});

type MediaItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string };

const gallery: MediaItem[] = [
  { kind: "image", src: img1.url, alt: "Bee close-up" },
  { kind: "video", src: vid1.url },
  { kind: "image", src: img2.url, alt: "Hive frame" },
  { kind: "image", src: img3.url, alt: "Beekeeping moment" },
  { kind: "video", src: vid2.url },
  { kind: "image", src: img4.url, alt: "In the apiary" },
];

const offsets = [0, 28, 8, 36, 12, 20];

function GalleryItem({ item, i }: { item: MediaItem; i: number }) {
  const top = offsets[i % offsets.length];
  return (
    <div
      className="mb-8 w-full px-2"
      style={{ marginTop: `${top}px` }}
    >
      <div className="group mx-auto w-full transition-transform duration-300 hover:-translate-y-1">
        <div className="overflow-hidden rounded-md bg-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]">
          {item.kind === "image" ? (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          ) : (
            <video
              src={item.src}
              className="block h-auto w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              controls
            />
          )}
        </div>
      </div>
    </div>
  );
}

function BeesPage() {
  return (
    <>
      <main className="mx-auto max-w-[1400px] px-10 pb-24 pt-8">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Why I grow{" "}
            <span
              className="relative inline-block px-2"
              style={{
                background: "var(--hobby-bees)",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              bees
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/75">
            My fascination with wild bees began during my agricultural work,
            where I first witnessed the vital role of bumblebees in crop
            pollination. Driven by curiosity, I took a beekeeping course, got
            my own educational hive, and dove deep into bee biology and their
            critical ecological impact.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Learning about the global threat of wild bee extinction — often
            worsened by the over-crowding of honeybee hives, which spreads
            diseases — changed everything for me. Today, my backyard hive
            isn't just a hobby; it's my personal commitment to protecting
            these incredible pollinators and raising awareness about
            ecological balance.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {gallery.map((item, i) => (
            <GalleryItem key={i} item={item} i={i} />
          ))}
        </div>
      </main>
      <footer className="mx-auto max-w-[1400px] px-10 pb-10 pt-4 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yasmin Greenholts
        </p>
      </footer>
    </>
  );
}
