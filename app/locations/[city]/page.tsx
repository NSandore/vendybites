import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import { absoluteUrl, buildMetadata, jsonLd, siteConfig } from "@/lib/seo";
import { aiSearchFaqs, locationPages } from "@/lib/seo-content";

type Props = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((location) => ({ city: location.slug }));
}

function getLocation(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: `${location.name} Vending Machines | VendyBites`,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
  });
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/locations/${location.slug}`);
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `Vending machine service in ${location.name}`,
      serviceType: "Vending machine placement, stocking, and support",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: {
        "@type": "Place",
        name: `${location.name}, Connecticut`,
      },
      description: location.description,
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Locations", item: absoluteUrl("/locations") },
        { "@type": "ListItem", position: 3, name: location.name, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: aiSearchFaqs.slice(0, 4).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-36" style={{ background: "#0A0A0F" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(jsonLdData) }} />

      <article className="mx-auto max-w-5xl pb-20">
        <Link href="/locations" className="mb-8 inline-block text-sm font-bold text-white/45 hover:text-white">
          Back to Connecticut service areas
        </Link>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#fed383" }}>
          {location.name} Vending Service
        </p>
        <h1 className="mb-7 text-5xl font-black leading-tight text-white md:text-7xl">
          {location.headline}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-white/55">{location.intro}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <section className="rounded-3xl border border-white/10 p-7" style={{ background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-xl font-black text-white">Best-fit locations</h2>
            <ul className="space-y-3 text-sm text-white/50">
              {location.bestFits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 p-7" style={{ background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-xl font-black text-white">Product strategy</h2>
            <ul className="space-y-3 text-sm text-white/50">
              {location.productAngles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 p-7" style={{ background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-xl font-black text-white">Local support</h2>
            <p className="text-sm leading-relaxed text-white/50">{location.localProof}</p>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-[#aaf0ee]/20 p-8" style={{ background: "rgba(170,240,238,0.04)" }}>
          <h2 className="mb-4 text-3xl font-black text-white">Request a machine in {location.name}</h2>
          <p className="mb-6 max-w-2xl text-white/55">
            Tell us about your space and we will recommend the right machine, product mix, and service model.
          </p>
          <Link
            href="/for-businesses#partner-form"
            className="inline-block rounded-full px-6 py-3 text-sm font-black"
            style={{ background: "linear-gradient(135deg, #aaf0ee, #fed383)", color: "#0A0A0F" }}
          >
            Start a vending request
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-3xl font-black text-white">Common questions</h2>
          <div className="space-y-4">
            {aiSearchFaqs.slice(0, 4).map((faq) => (
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
