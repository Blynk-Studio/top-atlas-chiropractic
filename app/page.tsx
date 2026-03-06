import { HeroSection } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ConditionsGrid } from "@/components/sections/ConditionsGrid";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { HowNuccaWorks } from "@/components/sections/HowNuccaWorks";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Atlas Chiropractic | NUCCA Upper Cervical Chiropractor Austin TX",
  description:
    "Dr. Shelley Lorenzen is Austin's NUCCA specialist. 19 years of precision upper cervical care for headaches, vertigo, migraines, and sports injuries. Cash-only. Gentle. Life-changing.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ConditionsGrid />
      <AboutPreview />
      <HowNuccaWorks />
      <StatsSection />
      <TestimonialsSection />
      <AIAssistantSection />
      <HomeSchema />
    </>
  );
}

function HomeSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Shelley Lorenzen",
    jobTitle: "NUCCA Chiropractor",
    worksFor: {
      "@type": "LocalBusiness",
      name: "Top Atlas Chiropractic",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Wisconsin-La Crosse" },
      { "@type": "CollegeOrUniversity", name: "Palmer College of Chiropractic" },
    ],
    knowsAbout: ["NUCCA", "Upper Cervical Chiropractic", "Atlas Vertebra Adjustment"],
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    name: "Top Atlas Chiropractic",
    description:
      "NUCCA upper cervical chiropractic care in Austin, TX. Specializing in gentle, precision atlas adjustments for headaches, migraines, vertigo, and sports injuries.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    email: "drshelley@topatlaschiropractic.com",
    priceRange: "$$$",
    paymentAccepted: "Cash",
    currenciesAccepted: "USD",
    medicalSpecialty: "Chiropractic",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: [
        {
          "@type": "Offer",
          name: "New Patient Visit",
          price: "575",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Follow-up Visit",
          price: "85",
          priceCurrency: "USD",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
