import { createFileRoute } from "@tanstack/react-router";

import { SancinLogo } from "@/components/site/SancinLogo";
import heroModel from "@/assets/hero-model.jpg";
import spaInterior from "@/assets/spa-interior.jpg";
import beforeImg from "@/assets/before-brows.jpg";
import afterImg from "@/assets/after-brows.jpg";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { serviceCategories } from "@/components/site/services";
import cardEye from "@/assets/cards/eye.jpg";
import cardPen from "@/assets/cards/pen.jpg";
import cardLeaf from "@/assets/cards/leaf.jpg";
import cardDrop from "@/assets/cards/drop.jpg";
import cardLotus from "@/assets/cards/lotus.jpg";
import cardLaser from "@/assets/cards/laser.jpg";
import cardHair from "@/assets/cards/hair.jpg";
import cardHand from "@/assets/cards/hand.jpg";

const cardImages: Record<string, string> = {
  eye: cardEye,
  pen: cardPen,
  leaf: cardLeaf,
  drop: cardDrop,
  lotus: cardLotus,
  laser: cardLaser,
  hair: cardHair,
  hand: cardHand,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sancin Beauty | Clínica de estética e bem-estar" },
      {
        name: "description",
        content:
          "Cuidados desenhados com precisão e carinho: sobrancelhas, micropigmentação, estética facial, SPA, laser, hair care e podologia na Sancin Beauty.",
      },
      { property: "og:title", content: "Sancin Beauty | Clínica de estética e bem-estar" },
      {
        property: "og:description",
        content:
          "Uma experiência de spa premium: estética facial, olhar, SPA, laser e hair care com acolhimento e precisão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5511995597238?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Sancin%20Beauty";



const hotspots = [
  { label: "Design de sobrancelhas", top: "27%", side: "left" as const, y2: "31%" },
  { label: "Lash lifting", top: "42%", side: "left" as const, y2: "40%" },
  { label: "Limpeza de pele premium", top: "34%", side: "right" as const, y2: "48%" },
  { label: "Glow Lips", top: "56%", side: "right" as const, y2: "56%" },
];

export function Index() {
  return (
    <div className="min-h-screen bg-background bg-pattern-logo">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <a href="#" className="flex items-center">
          <SancinLogo heightClass="h-20 sm:h-24" />
        </a>
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-muted-foreground lg:flex">
          <a href="#procedimentos" className="transition-colors hover:text-primary">Procedimentos</a>
          <a href="#resultados" className="transition-colors hover:text-primary">Resultados</a>
          <a href="#experiencia" className="transition-colors hover:text-primary">Experiência</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar via WhatsApp (11) 99559-7238"
          className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Agendar
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6 sm:pt-10">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Estética · Bem-estar · Beleza</p>

            <h1 className="sr-only">Sancin Beauty</h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar meu horário via WhatsApp (11) 99559-7238"
                className="rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-gold-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-soft)" }}
              >
                Agendar meu horário
              </a>
              <a
                href="#procedimentos"
                className="rounded-full border border-primary/30 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/5"
              >
                Ver procedimentos
              </a>
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Na Sancin Beauty cada detalhe é pensado para realçar a sua beleza natural — com
              técnica apurada, produtos de excelência e um ambiente que convida ao descanso.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              className="absolute -right-6 -top-8 hidden h-64 w-64 petal opacity-40 sm:block"
              style={{ background: "var(--gradient-veil)" }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[3rem] border border-border">
              <img
                src={heroModel}
                alt="Modelo com cuidados estéticos na Sancin Beauty"
                width={800}
                height={1003}
                className="h-full w-full object-cover"
                loading="eager"
              />

              {/* setas delicadas indicando procedimentos */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full text-primary/50"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {hotspots.map((h, i) => {
                  const y1 = parseFloat(h.top);
                  const y2 = parseFloat(h.y2);
                  const x1 = h.side === "left" ? 12 : 88;
                  const x2 = h.side === "left" ? 40 : 58;
                  return (
                    <path
                      key={i}
                      d={`M${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.35"
                      strokeDasharray="1.6 1.6"
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
              </svg>

              {hotspots.map((h) => (
                <span
                  key={h.label}
                  className="absolute z-10 -translate-y-1/2 rounded-full border border-border/40 bg-background/90 px-2 py-0.5 text-[0.54rem] font-medium uppercase tracking-[0.08em] text-primary shadow-xs backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[0.62rem] sm:tracking-[0.16em]"
                  style={
                    h.side === "left"
                      ? { top: h.top, left: "2.5%" }
                      : { top: h.top, right: "2.5%" }
                  }
                >
                  {h.label}
                </span>
              ))}
              {hotspots.map((h) => (
                <span
                  key={`${h.label}-dot`}
                  className="absolute z-10 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-2 ring-background/60"
                  style={{
                    top: h.y2,
                    left: h.side === "left" ? "40%" : "58%",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDIMENTOS */}
      <section
        id="procedimentos"
        className="text-cream bg-pattern-logo"
        style={{ backgroundColor: "var(--olive)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl text-cream sm:text-5xl">
            Nossos cuidados
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75">
            Do olhar às mãos, cada categoria reúne protocolos completos para você escolher com
            tranquilidade — e sempre com orientação da nossa equipe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((cat) => (
            <article key={cat.title} className="surface-card relative isolate overflow-hidden p-8">
              <img
                src={cardImages[cat.icon]}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={800}
                height={600}
                className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[40%]"
              />
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-card/50"
                aria-hidden="true"
              />
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <ServiceIcon name={cat.icon} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl text-primary">{cat.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="border-y border-border bg-background bg-none">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Resultados reais</p>
            <h2 className="mt-4 text-4xl text-primary sm:text-5xl">Antes e depois, sem exageros</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Acreditamos em transformações que respeitam os seus traços. Arraste o comparador para
              ver a diferença de um design de sobrancelhas com finalização de pele.
            </p>
            <p className="mt-8 text-sm text-muted-foreground">
              Imagens ilustrativas. Resultados variam conforme cada pele e protocolo indicado.
            </p>
          </div>
          <BeforeAfter before={beforeImg} after={afterImg} label="Design do olhar + glow facial" />
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="bg-background bg-none">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-[3rem] border border-border">
            <img
              src={spaInterior}
              alt="Ambiente acolhedor da Sancin Beauty"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">A experiência Sancin</p>
            <h2 className="mt-4 text-4xl text-primary sm:text-5xl">Sua agenda de cuidado começa hoje</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Fale com a nossa recepção e receba a indicação do protocolo ideal para você.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar via WhatsApp (11) 99559-7238"
              className="mt-9 inline-block rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Quero viver essa experiência
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-pattern-logo">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex items-center">
            <SancinLogo heightClass="h-16 sm:h-20" />
          </a>
          <div className="flex flex-col sm:items-end gap-1">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-wider text-primary hover:underline"
            >
              WhatsApp: (11) 99559-7238
            </a>
            <p className="text-xs tracking-wide text-muted-foreground">
              © {new Date().getFullYear()} Sancin Beauty · Estética, bem-estar e beleza
            </p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp (11) 99559-7238"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus:outline-hidden focus:ring-2 focus:ring-[#25D366]/50"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.46 0-2.88-.39-4.13-1.13l-.3-.18-3.07.81.82-2.99-.2-.31a8.19 8.19 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.31 3.8 2.53 1.09 2.53.73 2.99.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
        <span className="hidden sm:inline font-sans text-xs font-semibold tracking-wider uppercase">
          Agendar horário
        </span>
      </a>
    </div>
  );
}

export default Index;
