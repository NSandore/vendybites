import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "VendyBites — Connecticut's Vending, Done Right.",
  description: "Modern vending machines for Connecticut businesses. Brand new machines, AI-powered inventory, local people, real support. Serving Fairfield County, Hartford, New Haven, and beyond.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
