"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const navCols = [
  {
    title: "Pages",
    links: [
      { label: "Home",           href: "/"               },
      { label: "Our Machines",   href: "/our-machines"   },
      { label: "For Businesses", href: "/for-businesses" },
      { label: "About",          href: "/about"          },
      { label: "Contact",        href: "/contact"        },
    ],
  },
  {
    title: "Machines",
    links: [
      { label: "Food & Snacks",       href: "/our-machines" },
      { label: "Beverages",           href: "/our-machines" },
      { label: "Beauty & Wellness",   href: "/our-machines" },
      { label: "Specialty & Niche",   href: "/our-machines" },
      { label: "Self-Vend Technology", href: "/our-machines" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",       href: "/about"          },
      { label: "For Businesses", href: "/for-businesses" },
      { label: "Contact",        href: "/contact"        },
      { label: "Partner With Us", href: "/for-businesses#partner-form" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-16"
      style={{ borderColor: `${MINT}15`, background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black"
                  style={{
                    background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                    boxShadow:  `0 0 20px ${MINT}50`,
                    color: "#0A0A0F",
                  }}
                >
                  V
                </div>
                <span className="font-black text-2xl">
                  Vendy<span style={{ color: MINT }}>Bites</span>
                </span>
              </div>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed">
              Connecticut&apos;s modern vending company. Brand new machines, local people,
              real support.
            </p>
            <p className="text-xs font-medium" style={{ color: `${MINT}80` }}>
              Based in Connecticut. Built for Connecticut businesses.
            </p>
            <div className="space-y-2 pt-2 text-sm">
              <a href="mailto:hello@vendybites.com" className="block text-white/50 transition-colors hover:text-white">
                hello@vendybites.com
              </a>
              <a href="tel:+14753377461" className="block transition-colors hover:opacity-100" style={{ color: `${AMBER}cc` }}>
                (475) 337-7461
              </a>
            </div>
          </div>

          {/* Links */}
          {navCols.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-sm text-white/30 hover:text-white transition-colors cursor-pointer"
                        whileHover={{ x: 4 }}
                        style={{ display: "inline-block" }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/20 text-sm">© 2026 VendyBites. All rights reserved.</p>
          <p className="text-white/20 text-sm">
            Connecticut&apos;s vending, <span style={{ color: MINT }}>done right.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
