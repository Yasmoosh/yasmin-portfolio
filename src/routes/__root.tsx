import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Yasmin Greenholts - Learning Technologies Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Yasmin Greenholts, a Learning Technologies student at HIT specializing in gamified learning, digital training modules, and UI/UX.",
      },
      { name: "author", content: "Yasmin Greenholts" },
      { property: "og:title", content: "Yasmin Greenholts - Learning Technologies Portfolio" },
      {
        property: "og:description",
        content:
          "Learning experiences, code, and instructional design projects by Yasmin Greenholts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteNav() {
  const linkCls =
    "text-sm tracking-[0.18em] uppercase font-medium text-foreground/80 hover:text-foreground transition-colors";
  return (
    <header className="w-full bg-background">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8"
      >
        <Link
          to="/"
          className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] text-foreground sm:text-sm sm:tracking-[0.18em]"
        >
          Yasmin Greenholts
        </Link>
        <ul className="hidden items-center gap-5 lg:flex xl:gap-10">
          <li>
            <Link to="/" activeOptions={{ exact: true }} className={linkCls}>
              Home
            </Link>
          </li>
          <li><a href="/#work" className={linkCls}>PROJECTS</a></li>
          <li className="group relative">
            <button type="button" className={`${linkCls} inline-flex items-center gap-1`}>
              PLAY
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="transition-transform group-hover:rotate-180"
                aria-hidden="true"
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[140px] rounded-xl border border-border bg-background py-2 shadow-lg">
                <Link to="/books" className="block px-4 py-2 text-sm tracking-[0.18em] uppercase font-medium text-foreground/80 hover:bg-hobby-books/40 hover:text-foreground">
                  Books
                </Link>
                <Link to="/bees" className="block px-4 py-2 text-sm tracking-[0.18em] uppercase font-medium text-foreground/80 hover:bg-hobby-bees/40 hover:text-foreground">
                  Bees
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/about" className={linkCls}>ABOUT</Link>
          </li>
        </ul>
        <details className="group relative lg:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <ul className="absolute right-0 top-full z-30 mt-3 flex min-w-52 flex-col gap-1 rounded-2xl border border-border bg-background p-2 shadow-xl">
            <li>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#work"
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                to="/books"
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="/bees"
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Bees
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                About
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

