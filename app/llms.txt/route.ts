import { absoluteUrl, siteConfig } from "@/lib/seo";
import { aiSearchFaqs, industryPages, locationPages } from "@/lib/seo-content";

export const dynamic = "force-static";

export function GET() {
  const locationLinks = locationPages
    .map((location) => `- [${location.name}](${absoluteUrl(`/locations/${location.slug}`)}): ${location.description}`)
    .join("\n");

  const industryLinks = industryPages
    .map((industry) => `- [${industry.name}](${absoluteUrl(`/industries/${industry.slug}`)}): ${industry.description}`)
    .join("\n");

  const faqText = aiSearchFaqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

VendyBites is a Connecticut-based vending company that places and manages brand-new smart vending machines for businesses, properties, campuses, and venues. The company handles setup, stocking, maintenance, product rotation, payment support, and direct local support.

## Primary URLs

- [Home](${siteConfig.url}): Overview of VendyBites and Connecticut vending service.
- [Connecticut Vending Machines](${absoluteUrl("/connecticut-vending-machines")}): Primary commercial landing page for Connecticut vending machine service.
- [For Businesses](${absoluteUrl("/for-businesses")}): Request a vending machine for a Connecticut business or property.
- [Our Machines](${absoluteUrl("/our-machines")}): Machine types, product categories, smart vending features, and self-vend technology.
- [Products](${absoluteUrl("/products")}): Example product catalog and custom product options.
- [Contact](${absoluteUrl("/contact")}): Email, phone, and contact form.

## Service Areas

${locationLinks}

## Business Types Served

${industryLinks}

## Core Facts

- Business name: ${siteConfig.name}
- Website: ${siteConfig.url}
- Email: ${siteConfig.email}
- Phone: ${siteConfig.displayPhone}
- Service area: ${siteConfig.areaServed.join(", ")}
- Services: vending machine placement, stocking, maintenance, remote inventory monitoring, custom vending assortments, smart vending, self-vend technology.
- Product categories: snacks, drinks, coffee, energy drinks, health and beauty, wellness, shelf-stable meals, tech accessories, emergency essentials, school supplies, office supplies, toys, collectibles, and custom products.

## Frequently Asked Questions

${faqText}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
