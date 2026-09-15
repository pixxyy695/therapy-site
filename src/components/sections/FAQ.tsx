import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading kicker="Common Questions" heading="Frequently asked questions." />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
            A few things clients often ask before their first session.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}