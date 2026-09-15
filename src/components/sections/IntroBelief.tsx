import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { introBelief } from "@/data/site";

export default function IntroBelief() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-display text-[1.1rem] italic text-accent-dark sm:text-[1.25rem]">
            {introBelief.kicker}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-medium leading-[1.18] text-primary-dark text-balance">
            {introBelief.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
            {introBelief.body}
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto mt-14 aspect-[16/8] w-full max-w-5xl overflow-hidden rounded-sm sm:mt-16"
        >
          <Image
            src="/assets/images/pic.png"
            alt="Calm, uncluttered therapy office with natural light and comfortable seating"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
