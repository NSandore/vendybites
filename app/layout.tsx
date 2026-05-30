import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import {
  buildMetadata,
  jsonLd,
  organizationJsonLd,
  siteConfig,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  ...buildMetadata({
    title: "Connecticut Vending Machines | VendyBites",
    description:
      "Modern vending machines for Connecticut businesses. Brand new machines, AI-powered inventory, local people, real support. Serving Fairfield County, Hartford, New Haven, and beyond.",
  }),
  title: {
    default: "Connecticut Vending Machines | VendyBites",
    template: "%s",
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
