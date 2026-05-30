import type { Metadata } from "next";

const configuredSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vendybites.com").replace(/\/$/, "");

export const siteConfig = {
  name: "VendyBites",
  legalName: "VendyBites",
  url: configuredSiteUrl,
  description:
    "Modern vending machines for Connecticut businesses. Brand new machines, AI-powered inventory, local people, and real support.",
  email: "hello@vendybites.com",
  phone: "+14753377461",
  displayPhone: "(475) 337-7461",
  areaServed: [
    "Connecticut",
    "Fairfield County",
    "Hartford",
    "New Haven",
    "Stamford",
    "Bridgeport",
    "Waterbury",
    "Norwalk",
    "Danbury",
  ],
};

export const siteUrl = new URL(siteConfig.url);

const defaultKeywords = [
  "Connecticut vending machines",
  "vending machine service CT",
  "modern vending machines",
  "office vending machines",
  "smart vending machines",
  "healthy vending machines",
  "custom vending machines",
  "Fairfield County vending",
  "Hartford vending",
  "New Haven vending",
];

type SeoMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: SeoMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "VendyBites modern vending machines for Connecticut businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: siteConfig.areaServed.map((name) => ({
    "@type": "Place",
    name,
  })),
  serviceType: [
    "Vending machine placement",
    "Vending machine restocking",
    "Smart vending machines",
    "Custom vending machines",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};
