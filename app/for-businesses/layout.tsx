import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Vending Machines for Connecticut Businesses | VendyBites",
  description:
    "Partner with VendyBites for brand-new vending machines in Connecticut offices, gyms, salons, apartments, hotels, healthcare spaces, schools, and retail locations.",
  path: "/for-businesses",
  keywords: [
    "vending machines for businesses",
    "office vending machines Connecticut",
    "gym vending machines",
    "apartment vending machines",
  ],
});

export default function ForBusinessesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
