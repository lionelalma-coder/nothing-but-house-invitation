import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import AmbientAudio from "@/components/AmbientAudio";

/* Images live in public/attached_assets so they resolve on any host */
const heroSrc = "/attached_assets/nbh-bg.jpg";
const logoSrc = "/attached_assets/nbh-logo.png";
const wordmarkSrc = "/attached_assets/nbh-wordmark.png";

const ARTISTS = [
  {
    n: "01",
    name: "Mphoza",
    from: "Johannesburg",
    grad: "radial-gradient(circle at 45% 72%, #FB2610, #111111 62%)",
    offset: "",
  },
  {
    n: "02",
    name: "THE MOB HOUSE DJS",
    from: "NAIROBI",
    grad: "radial-gradient(circle at 35% 28%, #FC8210, #111111 62%)",
    offset: "",
  },
  {
    n: "03",
    name: "MASSH",
    from: "GLOBAL",
    grad: "radial-gradient(circle at 65% 24%, #FCAD37, #111111 62%)",
    offset: "lg:translate-y-12",
  },
  {
    n: "04",
    name: "NBH Residents",
    from: "The world",
    grad: "radial-gradient(circle at 70% 60%, #F7F3ED, #111111 55%)",
    offset: "",
  },
];

/* ============================================================
 * NBH — CONFIGURATION (edit here only)
 * ==========================================================*/
/* Event start in Nairobi time (UTC+3) — explicit offset keeps the countdown
   accurate for visitors in every timezone. */
const EVENT_DATE = "2026-11-01T20:00:00+03:00";
const TICKET_URL = "https://mookh.com";
const EVENT_LOCATION = "NAIROBI • KENYA";
const EVENT_LOCATION_PARTS = EVENT_LOCATION.split(" • ");
const EVENT_DATE_LABEL = "NOVEMBER 2026";
/* ==========================================================*/

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nothing But House — Afrohouse in Nairobi, November 2026" },
      {
        name: "description",
        content:
          "NBH presents Nothing But House: a curated Afrohouse experience in Nairobi, Kenya. November 2026. Limited tickets available.",
      },
      { property: "og:title", content: "Nothing But House — Nairobi, November 2026" },
      {
        property: "og:description",
        content: "Rhythm, culture and connection. A curated Afrohouse experience in Nairobi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Remaining = { days: number; hours: number; minutes: number; seconds: number } | null;

function getRemaining(): Remaining {
  const diff = new Date(EVENT_DATE).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<Remaining>(null);

  useEffect(() => {
    setMounted(true);
    setTime(getRemaining());
    let frame = 0;
    let last = 0;
    const tick = (now: number) => {
      if (now - last >= 1000) {
        last = now;
        setTime(getRemaining());
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return <div className="h-8" aria-hidden />;

  if (!time) {
    return (
      <p className="font-grotesk text-sm tracking-[0.28em] text-orange">THE EXPERIENCE HAS BEGUN</p>
    );
  }

  const units = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HOURS" },
    { value: time.minutes, label: "MINUTES" },
    { value: time.seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-5" aria-label="Countdown to the event">
      {units.map((u, i) => (
        <div key={u.label} className="group flex items-baseline gap-1.5">
          <span className="font-grotesk text-xl font-semibold tracking-[-0.08em] text-ivory tabular-nums transition-colors duration-300 group-hover:text-orange-soft sm:text-2xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[8px] tracking-[0.16em] text-orange-soft">{u.label}</span>
          {i < units.length - 1 && <span className="ml-1 text-orange">:</span>}
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink font-sans text-ivory selection:bg-orange selection:text-ink">
      {/* HERO */}
      <section
        id="event"
        className="nbh-grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden"
      >
        <img
          src={heroSrc}
          alt="A surreal stone face rising from an orange desert beneath a blue sky"
          width={1920}
          height={1280}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="nbh-drift absolute inset-0 h-full w-full object-cover object-center opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(8,8,8,.7) 0%,rgba(8,8,8,.12) 42%,rgba(8,8,8,.76) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-56 sm:h-72"
          style={{
            background:
              "linear-gradient(to bottom,transparent 0%,rgba(8,8,8,.36) 34%,#080808 100%)",
          }}
        />

        {/* Top bar */}
        <div className="relative z-10 px-5 pt-6 sm:px-9 sm:pt-8 lg:px-14">
          <div className="flex items-center justify-between border-b border-ivory/15 pb-5">
            <a href="#event" aria-label="Nothing But House home" className="inline-flex">
              <img src={logoSrc} alt="NBH monogram logo" className="h-[45px] w-auto sm:h-14" />
            </a>
            <nav className="flex items-center gap-8 font-grotesk text-[10px] tracking-[0.28em] text-ivory/85">
              <a
                href="#event"
                className="transition-colors duration-300 ease-out hover:text-orange-soft"
              >
                EVENT
              </a>
              <a
                href="#artists"
                className="transition-colors duration-300 ease-out hover:text-orange-soft"
              >
                ARTISTS
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom composition */}
        <div className="relative z-10 px-5 pb-10 sm:px-9 sm:pb-14 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,auto)] lg:items-end lg:gap-14">
            <div className="min-w-0">
              <p className="nbh-rise mb-5 font-grotesk text-[10px] font-semibold tracking-[.32em] text-orange-soft">
                RHYTHM, CULTURE AND CONNECTION
              </p>
              <div className="nbh-rise nbh-delay-1 max-w-[408px] overflow-hidden">
                <h1>
                  <span className="sr-only">Nothing But House</span>
                  <img
                    src={wordmarkSrc}
                    alt="Nothing But House"
                    width={1067}
                    height={529}
                    className="block h-auto w-full object-contain object-left"
                  />
                </h1>
              </div>
              <div className="nbh-rise nbh-delay-2 mt-8 flex items-center gap-3 text-[10px] tracking-[.2em] text-ivory uppercase">
                <span className="h-px w-10 bg-orange" />
                {EVENT_LOCATION_PARTS[0]} <span className="text-orange">•</span>{" "}
                {EVENT_LOCATION_PARTS[1]}
              </div>
            </div>

            <div className="nbh-rise nbh-delay-3 flex flex-col items-start gap-5 lg:items-end">
              <div className="border-y border-ivory/25 py-4">
                <Countdown />
              </div>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-orange px-5 py-4 font-grotesk text-[10px] font-semibold tracking-[.18em] text-ink transition-[transform,background-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:bg-orange-soft hover:shadow-[0_16px_34px_rgba(252,130,16,0.22)] active:translate-y-0"
              >
                GET TICKETS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <a
            href="#artists"
            className="group mt-14 flex items-center gap-3 text-[9px] tracking-[.25em] text-ivory/75 uppercase transition-colors duration-300 ease-out hover:text-orange-soft"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
            >
              <path d="m7 7 10 10" />
              <path d="M17 7v10H7" />
            </svg>
            Scroll to enter
          </a>
        </div>
      </section>

      {/* ARTISTS */}
      <section id="artists" className="bg-ink px-5 py-24 sm:px-9 sm:py-32 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4 text-[10px] tracking-[0.28em] text-orange-soft uppercase">
            <span className="text-orange">01</span>
            <span className="h-px w-8 bg-orange" />
            The Artists
          </div>
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-grotesk text-6xl leading-[.86] font-bold tracking-[-.09em] uppercase sm:text-8xl">
              The sound
              <br />
              <span className="text-orange">travels.</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-ivory/65">
              A carefully assembled line-up from the continent and beyond. No fillers. Only
              selectors with something to say.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {ARTISTS.map((a) => (
              <article
                key={a.n}
                className={`group relative h-[240px] overflow-hidden border border-ivory/10 bg-[#111111] p-4 transition-[transform,box-shadow,border-color] duration-700 ease-out hover:scale-[1.01] hover:border-orange/70 hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)] sm:aspect-[.78] sm:h-auto sm:p-5 ${a.offset}`}
              >
                <div
                  className="absolute inset-0 opacity-75 transition-[transform,opacity] duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                  style={{ background: a.grad }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent sm:h-1/2"
                />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="font-grotesk text-xs font-semibold text-ink drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    {a.n}
                  </span>
                  <div>
                    <h3 className="font-grotesk text-2xl leading-none font-semibold tracking-[-.06em] text-ivory uppercase transition-colors duration-500 group-hover:text-orange-soft sm:text-3xl">
                      {a.name}
                    </h3>
                    <p className="mt-1 text-[9px] tracking-[.18em] text-ivory/75 uppercase sm:mt-2">
                      {a.from}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ivory/10 bg-ink/80 px-5 py-14 backdrop-blur-sm sm:px-9 sm:py-16 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="font-sans text-[10px] tracking-[0.22em] text-ivory/55 uppercase">
              © NOTHING BUT HOUSE — EST. 2026
            </p>
            <a
              href="mailto:info@nothingbuthouse.events"
              className="font-sans text-[10px] tracking-[0.18em] text-ivory/55 transition-colors duration-300 hover:text-orange-soft"
            >
              info@nothingbuthouse.events
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/nothingbuthse?igsh=NzllMGk0NjFzb2Nz&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[10px] tracking-[0.18em] text-ivory/55 uppercase transition-colors duration-300 hover:text-orange-soft"
            >
              Instagram
            </a>
            <span className="hidden h-3 w-px bg-ivory/15 sm:block" />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-sans text-[10px] tracking-[0.18em] text-ivory/55 uppercase transition-colors duration-300 hover:text-orange-soft"
            >
              Privacy
            </a>
            <span className="hidden h-3 w-px bg-ivory/15 sm:block" />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-sans text-[10px] tracking-[0.18em] text-ivory/55 uppercase transition-colors duration-300 hover:text-orange-soft"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
      <AmbientAudio />
    </main>
  );
}
