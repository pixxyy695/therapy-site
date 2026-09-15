import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { office, ourOffice } from "@/data/site";

export default function OurOffice() {
  return (
    <section id="office" className="scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-dark">
            {ourOffice.kicker}
          </p>
          <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-medium leading-[1.15] text-primary-dark text-balance">
            {ourOffice.heading}
          </h2>
          <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ink-soft">
            {ourOffice.body}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {ourOffice.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[0.95rem] text-ink">
                <span aria-hidden="true" className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 inline-flex items-start gap-4 rounded-sm border border-border bg-cream px-6 py-5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"
              />
              <circle cx="12" cy="9.5" r="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="font-display text-[1.05rem] text-primary-dark">Office Location</p>
              <address className="not-italic text-[0.95rem] leading-relaxed text-ink-soft">
                {office.addressLine1}
                <br />
                {office.addressLine2}
              </address>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[3/4] w-[72%] overflow-hidden rounded-sm shadow-[0_24px_55px_-25px_rgba(38,51,47,0.4)]">
            <Image
              src={ourOffice.images[0].src}
              alt={ourOffice.images[0].alt}
              fill
              sizes="(min-width: 1024px) 420px, 70vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 top-[14%] aspect-[4/3] w-[52%] overflow-hidden rounded-sm border-4 border-background shadow-[0_24px_55px_-25px_rgba(38,51,47,0.45)] sm:border-8">
            <Image
              src={ourOffice.images[1].src}
              alt={ourOffice.images[1].alt}
              fill
              sizes="(min-width: 1024px) 260px, 42vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-4 -z-10 h-40 w-40 rounded-full bg-secondary/60 sm:h-56 sm:w-56"
          />
        </Reveal>
      </Container>
    </section>
  );
}
