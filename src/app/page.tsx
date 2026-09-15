import Hero from "@/components/sections/Hero";
import IntroBelief from "@/components/sections/IntroBelief";
import WhoIHelp from "@/components/sections/WhoIHelp";
import FocusAreas from "@/components/sections/FocusAreas";
import HowIWork from "@/components/sections/HowIWork";
import Services from "@/components/sections/Services";
import OurOffice from "@/components/sections/OurOffice";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import { office, site } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: `${site.therapistName}, ${site.credentials}`,
    description: site.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.addressLine1,
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    areaServed: "California",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <IntroBelief />
      <WhoIHelp />
      <FocusAreas />
      <HowIWork />
      <Services />
      <OurOffice />
      <FAQ />
      <FinalCta />
    </>
  );
}
