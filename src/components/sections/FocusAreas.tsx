import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { focusAreas } from "@/data/site";

export default function FocusAreas() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.3] text-primary-dark text-balance">
            Whatever you&apos;re carrying, it&apos;s real, and it&apos;s worth taking seriously.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-12 mb-5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-dark">
            Areas of Focus
          </p>
          <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {focusAreas.map((area, index) => (
              <li key={area} className="flex items-center">
                <span className="font-display text-[1.05rem] italic text-primary-dark sm:text-[1.2rem]">
                  {area}
                </span>
                {index < focusAreas.length - 1 && (
                  <span aria-hidden="true" className="ml-3 h-1 w-1 rounded-full bg-accent/60" />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
