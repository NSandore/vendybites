import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact VendyBites | Connecticut Vending Service",
  description:
    "Contact VendyBites for modern vending machines in Connecticut. Call, text, email, or send a message to discuss your space.",
  path: "/contact",
  keywords: ["contact vending company", "Connecticut vending service", "vending machine quote"],
});

export default function ContactLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
