import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { howIWork } from "@/data/site";

export default function HowIWork() {
  const { about, approach, image, imageAlt } = howIWork;

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm sm:max-w-lg lg:max-w-none">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div id="about" className="scroll-mt-24">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-dark">
                {about.kicker}
              </p>
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] font-medium leading-[1.15] text-primary-dark text-balance">
                {about.heading}
              </h2>
              <div className="mt-6 space-y-5">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-[1rem] leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-6 font-display text-[1.05rem] text-primary-dark">
                Maya Reynolds, PsyD
                <span className="block text-[0.85rem] font-sans font-normal text-ink-soft">
                  Licensed Clinical Psychologist · Santa Monica, CA
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div id="approach" className="mt-14 scroll-mt-24 border-t border-border pt-12">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-dark">
                {approach.kicker}
              </p>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-[1.2] text-primary-dark text-balance">
                {approach.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-ink-soft">
                {approach.body}
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-3">
                {approach.methods.map((method) => (
                  <li
                    key={method}
                    className="rounded-full border border-border bg-cream px-4 py-1.5 font-display text-[0.9rem] italic text-primary-dark"
                  >
                    {method}
                  </li>
                ))}
              </ul>

              <a
                href={approach.cta.href}
                className="mt-8 inline-flex items-center gap-2 font-display text-[1rem] text-accent-dark underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-dark/80"
              >
                {approach.cta.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
