import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  label: string;
};

export function BeforeAfter({ before, after, label }: Props) {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={ref}
        className="relative aspect-square w-full select-none overflow-hidden rounded-4xl border border-border"
        style={{ boxShadow: "var(--shadow-soft)" }}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${label} — depois`}
          loading="lazy"
          width={900}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${label} — antes`}
            loading="lazy"
            width={900}
            height={900}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-sm">
          Antes
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-primary/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground backdrop-blur-sm">
          Depois
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background text-primary shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm tracking-wide text-muted-foreground">
        {label}
      </figcaption>
    </figure>
  );
}
