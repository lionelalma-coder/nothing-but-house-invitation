import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/nbh-hero.jpg";

/* ============================================================
 * NBH — CONFIGURATION (edit here only)
 * ==========================================================*/
const EVENT_DATE = "2026-11-28T20:00:00";
const TICKET_URL = "YOUR_TICKET_LINK";
const EVENT_LOCATION = "NAIROBI • KENYA";
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
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return <div className="h-[72px] sm:h-[92px]" aria-hidden />;

  if (!time) {
    return (
      <p className="font-display text-lg tracking-[0.35em] text-orange sm:text-2xl">
        THE EXPERIENCE HAS BEGUN
      </p>
    );
  }

  const units = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HOURS" },
    { value: time.minutes, label: "MINUTES" },
    { value: time.seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex items-stretch justify-center" aria-live="off">
      {units.map((u, i) => (
        <div
          key={u.label}
          className={`flex min-w-[68px] flex-col items-center px-3 sm:min-w-[104px] sm:px-6 ${
            i > 0 ? "border-l border-ivory/20" : ""
          }`}
        >
          <span className="font-display text-3xl leading-none font-bold tabular-nums text-ivory sm:text-5xl lg:text-6xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[9px] tracking-[0.28em] text-orange sm:text-[11px] sm:tracking-[0.35em]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dancers moving together at an Afrohouse night in Nairobi"
          width={1920}
          height={1280}
          className="nbh-fade nbh-drift h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/10 to-ink/80" />
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 180px 30px color-mix(in oklab, var(--ink) 85%, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='0.55'/></svg>\")",
          }}
        />
      </div>

      {/* Top bar */}
      <header
        className="nbh-rise absolute top-0 right-0 left-0 z-10 flex items-center justify-between px-5 py-5 sm:px-10 sm:py-7"
        style={{ animationDelay: "0.4s" }}
      >
        <a href="/" className="font-display text-xl font-extrabold tracking-[0.3em] text-ivory">
          NBH
        </a>
        <a
          href={TICKET_URL}
          className="rounded-full border border-ivory/40 px-4 py-2 text-[10px] tracking-[0.25em] text-ivory transition-all duration-300 hover:border-orange hover:text-orange sm:px-6 sm:text-xs"
        >
          GET TICKETS
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-10 text-center sm:justify-center sm:pb-0">
        <h1
          className="nbh-rise font-display leading-[0.86] font-extrabold tracking-[-0.02em] text-ivory"
          style={{ animationDelay: "0.8s", fontSize: "clamp(3rem, 11.5vw, 9.5rem)" }}
        >
          <span className="block">NOTHING</span>
          <span className="block text-orange/90">BUT</span>
          <span className="block">HOUSE</span>
        </h1>

        <p
          className="nbh-rise mt-6 text-[10px] tracking-[0.42em] text-ivory/85 sm:mt-8 sm:text-sm"
          style={{ animationDelay: "1.15s" }}
        >
          RHYTHM, CULTURE AND CONNECTION
        </p>

        <div
          className="nbh-rise mt-4 flex items-center gap-3 text-[10px] tracking-[0.3em] text-ivory/70 sm:mt-5 sm:text-xs"
          style={{ animationDelay: "1.3s" }}
        >
          <span>{EVENT_LOCATION}</span>
          <span className="h-px w-6 bg-orange/70" />
          <span className="text-orange-soft">{EVENT_DATE_LABEL}</span>
        </div>

        <div className="nbh-rise mt-8 sm:mt-12" style={{ animationDelay: "1.5s" }}>
          <Countdown />
        </div>

        <div className="nbh-rise mt-9 sm:mt-12" style={{ animationDelay: "1.75s" }}>
          <a
            href={TICKET_URL}
            className="inline-block rounded-full border border-ivory bg-ivory px-10 py-4 font-display text-xs font-bold tracking-[0.3em] text-ink transition-all duration-300 hover:scale-[1.04] hover:border-orange hover:bg-orange-soft sm:px-14 sm:text-sm"
          >
            GET TICKETS
          </a>
          <p className="mt-4 text-[9px] tracking-[0.3em] text-ivory/50 sm:text-[10px]">
            LIMITED TICKETS AVAILABLE
          </p>
        </div>

        <div
          className="nbh-rise mt-8 space-y-1 text-[8px] tracking-[0.34em] text-ivory/55 sm:absolute sm:bottom-6 sm:mt-0 sm:text-[10px]"
          style={{ animationDelay: "2s" }}
        >
          <p>CURATED AFROHOUSE EXPERIENCES</p>
          <p>MUSIC • CULTURE • CONNECTION</p>
        </div>
      </section>
    </main>
  );
}
