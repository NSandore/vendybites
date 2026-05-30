import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import { absoluteUrl, buildMetadata, jsonLd, siteConfig } from "@/lib/seo";
import { aiSearchFaqs, industryPages } from "@/lib/seo-content";

type Props = {
  params: Promise<{ industry: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((industry) => ({ industry: industry.slug }));
}

function getIndustry(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const page = getIndustry(industry);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: `${page.name} Vending Machines | VendyBites`,
    description: page.description,
    path: `/industries/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const page = getIndustry(industry);

  if (!page) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/industries/${page.slug}`);
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `${page.name} vending machines`,
      serviceType: "Managed smart vending machines",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: {
        "@type": "State",
        name: "Connecticut",
      },
      audience: {
        "@type": "Audience",
        audienceType: page.audience,
      },
      description: page.description,
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Industries", item: absoluteUrl("/industries") },
        { "@type": "ListItem", position: 3, name: page.name, item: pageUrl },
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
        <Link href="/industries" className="mb-8 inline-block text-sm font-bold text-white/45 hover:text-white">
          Back to vending by business type
        </Link>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#aaf0ee" }}>
          {page.name} Vending
        </p>
        <h1 className="mb-7 text-5xl font-black leading-tight text-white md:text-7xl">
          {page.headline}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-white/55">{page.intro}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <section className="rounded-3xl border border-white/10 p-7" style={{ background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-xl font-black text-white">Who it serves</h2>
            <p className="text-sm leading-relaxed text-white/50">{page.audience}</p>
          </section>
          <section className="rounded-3xl border border-white/10 p-7" style={{ background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-xl font-black text-white">Machine mix</h2>
            <ul className="space-y-3 text-sm text-white/50">
              {page.machineMix.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 p-7" style={{ background: "rgba(255,255,255,0.025)" }}>
            <h2 className="mb-4 text-xl font-black text-white">Why it works</h2>
            <ul className="space-y-3 text-sm text-white/50">
              {page.valueProps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-[#fed383]/20 p-8" style={{ background: "rgba(254,211,131,0.04)" }}>
          <h2 className="mb-4 text-3xl font-black text-white">Build a {page.name.toLowerCase()} vending plan</h2>
          <p className="mb-6 max-w-2xl text-white/55">
            Share the basics about your space and we will recommend a machine and product mix that fits your traffic.
          </p>
          <Link
            href="/for-businesses#partner-form"
            className="inline-block rounded-full px-6 py-3 text-sm font-black"
            style={{ background: "linear-gradient(135deg, #aaf0ee, #fed383)", color: "#0A0A0F" }}
          >
            Request a recommendation
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
