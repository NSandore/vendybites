import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Vending Products Catalog | Snacks, Drinks, Wellness, Custom",
  description:
    "Browse vending product options from VendyBites, including premium snacks, beverages, beauty and wellness items, hot foods, phone accessories, and custom machine assortments.",
  path: "/products",
  keywords: ["vending products", "vending snacks", "vending beverages", "custom product vending"],
});

export default function ProductsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
