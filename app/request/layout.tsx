import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Custom Vending Machine | VendyBites",
  description:
    "Request a custom VendyBites machine for your Connecticut business, venue, campus, apartment complex, gym, salon, hotel, or retail space.",
  path: "/request",
  keywords: ["request vending machine", "custom vending request", "Connecticut vending quote"],
});

export default function RequestLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
