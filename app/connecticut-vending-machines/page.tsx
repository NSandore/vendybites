import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { absoluteUrl, buildMetadata, jsonLd, siteConfig } from "@/lib/seo";
import { aiSearchFaqs, industryPages, locationPages } from "@/lib/seo-content";

export const metadata: Metadata = buildMetadata({
  title: "Connecticut Vending Machines | VendyBites",
  description:
    "Connecticut vending machines for offices, gyms, apartments, hotels, salons, medical offices, schools, retail spaces, and warehouses. VendyBites installs, stocks, and supports brand-new smart vending machines across CT.",
  path: "/connecticut-vending-machines",
  keywords: [
    "Connecticut vending machines",
    "vending machines in CT",
    "CT vending machine company",
    "Connecticut vending machine service",
    "free vending machines Connecticut",
    "smart vending machines Connecticut",
  ],
});

const serviceHighlights = [
  "Brand-new vending machines, never refurbished",
  "Card, cash, Apple Pay, and Google Pay options",
  "Snacks, drinks, wellness, beauty, tech, meals, and custom product mixes",
  "Remote inventory monitoring and data-informed restocking",
  "Installation, maintenance, stocking, and support handled by VendyBites",
  "Connecticut-based operators with direct communication",
];

const comparisonPoints = [
  {
    title: "Built for the exact location",
    text: "A gym machine should not look like an office machine, and an apartment lobby does not need the same mix as a warehouse break room. VendyBites builds around the audience in the space.",
  },
  {
    title: "More than chips and soda",
    text: "We can stock premium snacks, drinks, cold brew, ramen, health and beauty products, chargers, earbuds, hygiene items, school supplies, office supplies, and specialty products.",
  },
  {
    title: "Hands-off for the business",
    text: "Your team should not be managing inventory, repairs, or payment issues. We handle the machine, product mix, maintenance, restocking, and ongoing support.",
  },
];

export default function ConnecticutVendingMachinesPage() {
  const pageUrl = absoluteUrl("/connecticut-vending-machines");
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Connecticut vending machines",
      serviceType: "Vending machine placement, stocking, maintenance, and support",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: {
        "@type": "State",
        name: "Connecticut",
      },
      description:
        "VendyBites installs, stocks, maintains, and supports brand-new smart vending machines for Connecticut businesses and properties.",
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Connecticut vending machine services",
        itemListElement: industryPages.slice(0, 8).map((industry) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${industry.name} vending machines`,
            url: absoluteUrl(`/industries/${industry.slug}`),
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: aiSearchFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Connecticut Vending Machines", item: pageUrl },
      ],
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-36" style={{ background: "#0A0A0F" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(jsonLdData) }} />

      <article className="mx-auto max-w-6xl pb-24">
        <section className="max-w-4xl pb-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#fed383" }}>
            Connecticut Vending Machines
          </p>
          <h1 className="mb-7 text-5xl font-black leading-tight text-white md:text-7xl">
            Connecticut vending machines for modern businesses.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/55">
            VendyBites provides brand-new smart vending machines across Connecticut for offices,
            gyms, apartment communities, hotels, salons, medical offices, schools, retail spaces,
            warehouses, and custom venues. We install the machine, stock it, maintain it, and keep
            improving the product mix based on what people actually buy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/for-businesses#partner-form"
              className="rounded-full px-7 py-4 text-sm font-black"
              style={{ background: "linear-gradient(135deg, #aaf0ee, #fed383)", color: "#0A0A0F" }}
            >
              Request a Connecticut vending machine
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white/80 hover:text-white"
            >
              View CT service areas
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceHighlights.map((highlight) => (
            <div key={highlight} className="rounded-3xl border border-white/10 p-6 text-white/60" style={{ background: "rgba(255,255,255,0.025)" }}>
              {highlight}
            </div>
          ))}
        </section>

        <section className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {comparisonPoints.map((point) => (
            <div key={point.title} className="rounded-3xl border border-[#aaf0ee]/20 p-7" style={{ background: "rgba(170,240,238,0.035)" }}>
              <h2 className="mb-4 text-2xl font-black text-white">{point.title}</h2>
              <p className="text-sm leading-relaxed text-white/52">{point.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-4xl font-black text-white">Connecticut service areas</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {locationPages.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="rounded-2xl border border-white/10 p-5 transition-colors hover:border-[#fed383]/50"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <h3 className="mb-2 font-black text-white">{location.name}</h3>
                <p className="text-xs leading-relaxed text-white/42">{location.headline}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-4xl font-black text-white">Vending machines by business type</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industryPages.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="rounded-2xl border border-white/10 p-5 transition-colors hover:border-[#aaf0ee]/50"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <h3 className="mb-2 font-black text-white">{industry.name}</h3>
                <p className="text-xs leading-relaxed text-white/42">{industry.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-4xl font-black text-white">Common questions</h2>
          <div className="space-y-4">
            {aiSearchFaqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-white/10 p-5" style={{ background: "rgba(255,255,255,0.025)" }}>
                <summary className="cursor-pointer text-base font-bold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
