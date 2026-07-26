import { createFileRoute } from "@tanstack/react-router";

import b1 from "../assets/books/image1.png.asset.json";
import b2 from "../assets/books/image2.png.asset.json";
import b3 from "../assets/books/image3.png.asset.json";
import b4 from "../assets/books/image4.png.asset.json";
import b5 from "../assets/books/image5.png.asset.json";
import b6 from "../assets/books/image6.png.asset.json";
import b7 from "../assets/books/image7.png.asset.json";
import b8 from "../assets/books/image8.png.asset.json";
import b9 from "../assets/books/image9.png.asset.json";
import b10 from "../assets/books/image10.png.asset.json";
import b11 from "../assets/books/image11.png.asset.json";
import b12 from "../assets/books/image12.png.asset.json";
import b13 from "../assets/books/image13.png.asset.json";
import b14 from "../assets/books/image14.png.asset.json";
import b15 from "../assets/books/image15.png.asset.json";
import b16 from "../assets/books/image16.png.asset.json";
import b17 from "../assets/books/image17.png.asset.json";
import b18 from "../assets/books/image18.png.asset.json";
import b19 from "../assets/books/image19.png.asset.json";
import b20 from "../assets/books/image20.png.asset.json";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — Yasmin Greenholts" },
      {
        name: "description",
        content:
          "Book recommendations from Yasmin Greenholts — a personal reading gallery with ratings across fantasy, literary fiction, and non-fiction.",
      },
      { property: "og:title", content: "Books — Yasmin's Recommendations" },
      {
        property: "og:description",
        content:
          "A curated gallery of books I've read and loved, with personal star ratings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BooksPage,
});

type Book = {
  title: string;
  author: string;
  rating: number;
  image: string;
};

const books: Book[] = [
  { title: "Heap Earth Upon It", author: "Chloe Michelle Howarth", rating: 4.75, image: b5.url },
  { title: "The Alloy of Law", author: "Brandon Sanderson", rating: 4, image: b10.url },
  { title: "The Gate of the Feral Gods", author: "Matt Dinniman", rating: 4, image: b12.url },
  { title: "Project Hail Mary", author: "Andy Weir", rating: 4.75, image: b8.url },
  { title: "Dungeon Crawler Carl", author: "Matt Dinniman", rating: 5, image: b4.url },
  { title: "The Well of Ascension", author: "Brandon Sanderson", rating: 5, image: b13.url },
  { title: "The Final Empire", author: "Brandon Sanderson", rating: 5, image: b15.url },
  { title: "Emily Wilde's Encyclopaedia of Faeries", author: "Heather Fawcett", rating: 3.75, image: b1.url },
  { title: "Atlas: The Story of Pa Salt", author: "Harry Whittaker, Lucinda Riley", rating: 4.75, image: b2.url },
  { title: "The Secret Garden", author: "Frances Hodgson Burnett", rating: 3.5, image: b20.url },
  { title: "The Seven Sisters", author: "Lucinda Riley", rating: 4.5, image: b14.url },
  { title: "The Gardener's Year", author: "Karel Čapek", rating: 4, image: b3.url },
  { title: "Shark Heart: A Love Story", author: "Emily Habeck", rating: 5, image: b17.url },
  { title: "How to Build a Car", author: "Adrian Newey", rating: 4, image: b18.url },
  { title: "The Wedding People", author: "Alison Espach", rating: 4.5, image: b19.url },
  { title: "Sunburn", author: "Chloe Michelle Howarth", rating: 5, image: b9.url },
  { title: "Everything is Tuberculosis", author: "John Green", rating: 4.5, image: b7.url },
  { title: "A Beautifully Foolish Endeavor", author: "Hank Green", rating: 4.5, image: b11.url },
  { title: "World Cup Wishes", author: "Eshkol Nevo", rating: 4.75, image: b6.url },
  { title: "The Anthropocene Reviewed", author: "John Green", rating: 4.5, image: b16.url },
];

// Deterministic per-index vertical offset for a staggered, non-grid feel.
const offsets = [0, 24, 8, 32, 0, 20, 12, 28, 4, 16, 0, 24, 8, 32, 4, 20, 12, 28, 0, 16];
const widths = [180, 210, 170, 200, 190, 220, 180, 200, 175, 205, 195, 185, 210, 180, 200, 190, 215, 175, 205, 195];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.25 && rating - full < 0.75;
  const extraFull = rating - full >= 0.75 ? 1 : 0;
  const totalFull = full + extraFull;
  const empty = 5 - totalFull - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5 text-[0.9rem] leading-none" aria-label={`${rating} out of 5`}>
      {Array.from({ length: totalFull }).map((_, i) => (
        <span key={`f${i}`} className="text-[hsl(45_90%_50%)]">★</span>
      ))}
      {half && <span className="text-[hsl(45_90%_50%)]">⯨</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-foreground/20">★</span>
      ))}
      <span className="ml-1.5 text-xs text-foreground/60">{rating}</span>
    </div>
  );
}

function BookCard({ book, i }: { book: Book; i: number }) {
  const top = offsets[i % offsets.length];
  const w = widths[i % widths.length];
  return (
    <div
      className="mb-8 inline-block w-full break-inside-avoid px-2"
      style={{ marginTop: `${top}px` }}
    >
      <div
        className="group mx-auto transition-transform duration-300 hover:-translate-y-1"
        style={{ maxWidth: `${w}px` }}
      >
        <div className="overflow-hidden rounded-md bg-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]">
          <img
            src={book.image}
            alt={`Cover of ${book.title}`}
            loading="lazy"
            className="block h-auto w-full object-cover"
          />
        </div>
        <div className="mt-3 px-1">
          <h3 className="text-sm font-semibold leading-snug text-foreground">
            {book.title}
          </h3>
          <p className="mt-0.5 text-xs text-foreground/60">{book.author}</p>
          <div className="mt-1.5">
            <Stars rating={book.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BooksPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-10 pb-24 pt-8">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          <span
            className="relative inline-block px-2"
            style={{
              background: "var(--hobby-books)",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
            }}
          >
            Books
          </span>{" "}
          I've loved
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          A scattered shelf of recent reads — mostly fantasy, some literary
          fiction, and the occasional non-fiction detour. Ratings are entirely
          my own and change with my mood.
        </p>
      </header>

      <div className="[column-fill:_balance] columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5">
        {books.map((book, i) => (
          <BookCard key={book.title} book={book} i={i} />
        ))}
      </div>
    </main>
  );
}
