import { useEffect, useRef, useState } from "react";

const SRC = "/attached_assets/nbh-theme-30s.mp3";
const TARGET_VOLUME = 0.35;
const STORAGE_KEY = "nbh-sound";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);

  const fadeTo = (target: number, ms = 1000) => {
    const el = audioRef.current;
    if (!el) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const from = el.volume;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      el.volume = Math.max(0, Math.min(1, from + (target - from) * t));
      if (t < 1) fadeRef.current = requestAnimationFrame(step);
      else if (target === 0) el.pause();
    };
    fadeRef.current = requestAnimationFrame(step);
  };

  const play = async () => {
    const el = audioRef.current;
    if (!el) return false;
    try {
      el.volume = 0;
      await el.play();
      fadeTo(TARGET_VOLUME, 1000);
      setOn(true);
      sessionStorage.setItem(STORAGE_KEY, "on");
      return true;
    } catch {
      setOn(false);
      return false;
    }
  };

  useEffect(() => {
    setReady(true);
    const el = new Audio();
    el.src = SRC;
    el.loop = true;
    el.preload = "none";
    el.volume = 0;
    (el as HTMLAudioElement & { playsInline?: boolean }).playsInline = true;
    audioRef.current = el;

    const pref = sessionStorage.getItem(STORAGE_KEY);
    let cleanupGesture = () => {};

    if (pref !== "off") {
      const start = () => {
        el.preload = "auto";
        void play().then((ok) => {
          if (!ok) {
            // Autoplay blocked — resume on the first user gesture.
            const onGesture = () => {
              void play();
              cleanupGesture();
            };
            const opts = { once: true, passive: true } as AddEventListenerOptions;
            window.addEventListener("pointerdown", onGesture, opts);
            window.addEventListener("keydown", onGesture, opts);
            window.addEventListener("touchstart", onGesture, opts);
            cleanupGesture = () => {
              window.removeEventListener("pointerdown", onGesture);
              window.removeEventListener("keydown", onGesture);
              window.removeEventListener("touchstart", onGesture);
            };
          }
        });
      };
      // Don't compete with hero/LCP rendering.
      const id = window.setTimeout(start, 600);
      return () => {
        window.clearTimeout(id);
        cleanupGesture();
        if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
        el.pause();
      };
    }

    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      el.pause();
    };
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (on) {
      fadeTo(0, 400);
      setOn(false);
      sessionStorage.setItem(STORAGE_KEY, "off");
    } else {
      el.preload = "auto";
      void play();
    }
  };

  if (!ready) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn sound off" : "Turn sound on"}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border border-ivory/20 bg-ink/60 px-3 py-1.5 font-grotesk text-[9px] tracking-[0.22em] text-ivory/70 backdrop-blur-sm transition-colors duration-300 hover:border-orange/60 hover:text-orange-soft sm:bottom-6 sm:left-6"
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${on ? "bg-orange" : "bg-ivory/30"}`}
      />
      {on ? "SOUND ON" : "SOUND OFF"}
    </button>
  );
}
