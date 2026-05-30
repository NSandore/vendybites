import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About VendyBites | Connecticut Vending Company",
  description:
    "Meet VendyBites, a Connecticut-based modern vending company built around new machines, direct founder support, and smarter product mixes.",
  path: "/about",
  keywords: ["about VendyBites", "Connecticut vending company", "local vending company"],
});

export default function AboutLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
