import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Modern Vending Machines | Snacks, Drinks, Beauty, Tech",
  description:
    "Explore VendyBites machines for snacks, drinks, health and beauty, late-night meals, tech accessories, wellness products, emergency essentials, and custom vending setups.",
  path: "/our-machines",
  keywords: [
    "modern vending machines",
    "custom vending machines",
    "beauty vending machines",
    "smart vending technology",
  ],
});

export default function OurMachinesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
