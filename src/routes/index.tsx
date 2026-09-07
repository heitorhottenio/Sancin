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

const WHATSAPP = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20na%20Sancin%20Beauty";

const trust = [
  { value: "12+", label: "anos de experiência" },
  { value: "4,9", label: "avaliação média" },
  { value: "8 mil+", label: "clientes atendidas" },
];

const pillars = [
  {
    title: "Protocolos personalizados",
    text: "Cada atendimento começa por uma avaliação atenta do seu rosto, da sua pele e do seu momento.",
  },
  {
    title: "Profissionais especializadas",
    text: "Equipe em formação contínua, com técnicas atualizadas e mãos treinadas para resultados naturais.",
  },
  {
    title: "Ambiente que acolhe",
    text: "Aromas suaves, luz quente e silêncio: um intervalo de calma no meio do seu dia.",
  },
  {
    title: "Segurança em primeiro lugar",
    text: "Materiais descartáveis, biossegurança rigorosa e produtos de alta performance.",
  },
];

const hotspots = [
  { label: "Design de sobrancelhas", top: "27%", side: "left" as const, y2: "31%" },
  { label: "Lash lifting", top: "42%", side: "left" as const, y2: "40%" },
  { label: "Limpeza de pele premium", top: "34%", side: "right" as const, y2: "48%" },
  { label: "Glow Lips", top: "56%", side: "right" as const, y2: "56%" },
];

export function Index() {
  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="mt-6 text-5xl leading-[1.05] text-primary sm:text-6xl">
              Cuidados desenhados
              <br />
              com precisão
              <em className="font-normal italic text-accent"> e carinho</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Na Sancin Beauty cada detalhe é pensado para realçar a sua beleza natural — com
              técnica apurada, produtos de excelência e um ambiente que convida ao descanso.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                className="rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-gold-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-gold)", boxShadow: "var(--shadow-soft)" }}
              >
                Agendar meu horário
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-primary/30 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/5"
              >
                Ver procedimentos
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8">
              {trust.map((t) => (
                <div key={t.label}>
                  <dt className="font-display text-3xl text-primary">{t.value}</dt>
                  <dd className="mt-1 text-xs leading-snug tracking-wide text-muted-foreground">
                    {t.label}
                  </dd>
                </div>
              ))}
            </dl>
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
                  className="absolute hidden -translate-y-1/2 rounded-full bg-background/85 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-primary backdrop-blur-sm sm:block"
                  style={
                    h.side === "left"
                      ? { top: h.top, left: "3%" }
                      : { top: h.top, right: "3%" }
                  }
                >
                  {h.label}
                </span>
              ))}
              {hotspots.map((h) => (
                <span
                  key={`${h.label}-dot`}
                  className="absolute hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent sm:block"
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
        className="text-cream"
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

      {/* PILARES */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title}>
              <span className="block h-px w-10 bg-accent" />
              <h3 className="mt-5 text-xl text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="border-y border-border bg-card/60">
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
      <section id="experiencia" className="border-y border-border bg-secondary/40">
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
            <h2 className="mt-4 text-4xl text-primary sm:text-5xl">Um intervalo de calma</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Você é recebida com uma bebida quente, conversa sem pressa e um plano de cuidado feito
              para o seu tempo. Nada de sala fria: aqui o cuidado começa na chegada e continua nas
              orientações de casa.
            </p>
            <a
              href={WHATSAPP}
              className="mt-9 inline-block rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Quero viver essa experiência
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="rounded-[3rem] px-8 py-16 text-center"
          style={{ background: "var(--gradient-veil)", boxShadow: "var(--shadow-soft)" }}
        >
          <h2 className="mx-auto max-w-2xl text-4xl text-primary sm:text-5xl">
            Sua agenda de cuidado começa hoje
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Fale com a nossa recepção e receba a indicação do protocolo ideal para você.
          </p>
          <a
            href={WHATSAPP}
            className="mt-9 inline-block rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold-foreground"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex items-center">
            <SancinLogo heightClass="h-16 sm:h-20" />
          </a>
          <p className="text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Sancin Beauty · Estética, bem-estar e beleza
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
