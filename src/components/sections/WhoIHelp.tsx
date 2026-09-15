import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whoIHelp } from "@/data/site";

export default function WhoIHelp() {
  return (
    <section className="bg-surface py-20 sm:py-28" id="who-i-help">
      <Container>
        <Reveal>
          <SectionHeading kicker="Who I Work With" heading="Support for adults who are ready to feel more like themselves." />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-3">
          {whoIHelp.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-display text-[1.3rem] font-medium text-primary-dark">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
