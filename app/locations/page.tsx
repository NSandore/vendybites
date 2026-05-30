import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { absoluteUrl, buildMetadata, jsonLd } from "@/lib/seo";
import { locationPages } from "@/lib/seo-content";

export const metadata: Metadata = buildMetadata({
  title: "Connecticut Vending Service Areas | VendyBites",
  description:
    "Explore VendyBites vending machine service areas across Connecticut, including Fairfield County, Hartford, New Haven, Stamford, Bridgeport, Waterbury, Norwalk, and Danbury.",
  path: "/locations",
  keywords: ["Connecticut vending service areas", "vending machines near me CT", "local vending machine company"],
});

export default function LocationsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VendyBites Connecticut vending service areas",
    itemListElement: locationPages.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location.name,
      url: absoluteUrl(`/locations/${location.slug}`),
    })),
  };

  return (
    <main className="min-h-screen px-6 pt-36" style={{ background: "#0A0A0F" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemListJsonLd) }} />
      <section className="mx-auto max-w-5xl pb-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#fed383" }}>
          Connecticut Service Areas
        </p>
        <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
          Modern vending machines across Connecticut.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-white/55">
          VendyBites serves Connecticut businesses with brand-new smart vending machines,
          hands-off restocking, local support, and product mixes built around each location.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 pb-24 md:grid-cols-2">
        {locationPages.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="rounded-3xl border border-white/10 p-7 transition-colors hover:border-[#aaf0ee]/50"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <h2 className="mb-3 text-2xl font-black text-white">{location.name}</h2>
            <p className="mb-5 text-sm leading-relaxed text-white/45">{location.description}</p>
            <span className="text-sm font-bold" style={{ color: "#aaf0ee" }}>
              View {location.name} vending service
            </span>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
