import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { absoluteUrl, buildMetadata, jsonLd } from "@/lib/seo";
import { industryPages } from "@/lib/seo-content";

export const metadata: Metadata = buildMetadata({
  title: "Vending Machines by Business Type | VendyBites",
  description:
    "Explore VendyBites vending solutions for Connecticut offices, gyms, salons, apartments, hotels, medical offices, universities, retail locations, and warehouses.",
  path: "/industries",
  keywords: ["vending machines by industry", "business vending solutions", "Connecticut vending solutions"],
});

export default function IndustriesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VendyBites vending solutions by business type",
    itemListElement: industryPages.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: industry.name,
      url: absoluteUrl(`/industries/${industry.slug}`),
    })),
  };

  return (
    <main className="min-h-screen px-6 pt-36" style={{ background: "#0A0A0F" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }} />
      <section className="mx-auto max-w-5xl pb-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#aaf0ee" }}>
          Vending by Business Type
        </p>
        <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
          Vending machines matched to the people in your space.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-white/55">
          Offices, gyms, apartments, hotels, salons, medical spaces, campuses, retail locations,
          and warehouses all have different buying patterns. VendyBites builds around that.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {industryPages.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="rounded-3xl border border-white/10 p-7 transition-colors hover:border-[#fed383]/50"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <h2 className="mb-3 text-2xl font-black text-white">{industry.name}</h2>
            <p className="mb-5 text-sm leading-relaxed text-white/45">{industry.description}</p>
            <span className="text-sm font-bold" style={{ color: "#fed383" }}>
              View vending solution
            </span>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
