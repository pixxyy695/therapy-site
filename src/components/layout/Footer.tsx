import Container from "@/components/ui/Container";
import { nav, office, site, footer as footerContent } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary-dark text-secondary">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-xl font-medium text-cream">{site.therapistName}, {site.credentials}</p>
          <p className="mt-1 text-sm text-secondary/70">{site.title}</p>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-secondary/80">
            {footerContent.blurb}
          </p>
        </div>

        <div>
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary/60">
            Navigate
          </p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.95rem] text-secondary/85 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary/60">
            Office
          </p>
          <address className="not-italic text-[0.95rem] leading-relaxed text-secondary/85">
            {office.addressLine1}
            <br />
            {office.addressLine2}
          </address>
          <p className="mt-4 text-[0.85rem] leading-relaxed text-secondary/70">
            In-person sessions in Santa Monica &amp; secure telehealth throughout California.
          </p>
        </div>
      </Container>

      <div className="border-t border-secondary/10">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-[0.8rem] text-secondary/55 sm:flex-row sm:items-center">
          <p>© {year} {site.therapistName}, {site.credentials}. All rights reserved.</p>
          <p>Designed as a front-end development case study.</p>
        </Container>
      </div>
    </footer>
  );
}
