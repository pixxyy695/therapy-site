import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-primary-dark py-20 text-secondary sm:py-15">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="How I Can Help"
            heading="Three focused areas of practice."
            align="center"
            headingClassName="text-cream"
            className="mx-auto max-w-20xl"
          />
        </Reveal>

        <div className="mt-1 grid gap-px overflow-hidden rounded-sm bg-secondary/15 sm:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 120}
              className="flex flex-col bg-primary-dark px-8 py-12 sm:px-9"
            >
              <span className="mb-6 font-display text-[0.85rem] text-accent">
                0{index + 1}
              </span>
              <h3 className="font-display text-[1.4rem] font-medium text-cream">
                {service.title}
              </h3>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-secondary/80">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
