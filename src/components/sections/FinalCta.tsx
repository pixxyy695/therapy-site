import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { finalCta, office } from "@/data/site";

export default function FinalCta() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.mapsQuery
  )}`;

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-sm bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary/80">
            {finalCta.kicker}
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.9rem,4vw,2.9rem)] font-medium leading-[1.15] text-cream text-balance">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-secondary/85">
            {finalCta.body}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={mapsHref} target="_blank" rel="noopener noreferrer" variant="primary" className="bg-accent border-accent hover:bg-accent-dark hover:border-accent-dark">
              Get Directions to the Office
            </Button>
          </div>

          <p className="mt-8 text-[0.85rem] text-secondary/70">
            {office.addressLine1}, {office.addressLine2}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
