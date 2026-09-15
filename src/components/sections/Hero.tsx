import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-secondary/50 blur-3xl sm:h-[560px] sm:w-[560px]"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <Reveal>
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-dark">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-xl font-display text-[clamp(2.3rem,5.4vw,3.6rem)] font-medium leading-[1.08] text-primary-dark text-balance">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href="#about" variant="ghost">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(38,51,47,0.35)]">
            <Image
              src="/assets/images/soothing.png"
              alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 70vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-6%] right-0 aspect-[4/3] w-[54%] overflow-hidden rounded-sm border-4 border-background shadow-[0_20px_45px_-20px_rgba(38,51,47,0.4)] sm:border-8">
            <Image
              src="/assets/images/image.avif"
              alt="Sunlit therapy office seating area in Santa Monica"
              fill
              sizes="(min-width: 1024px) 260px, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
