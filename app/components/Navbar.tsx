"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About",    href: "/about"    },
  { label: "Request",  href: "/request"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background:    scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter:scrolled ? "blur(20px)"          : "none",
        borderBottom:  scrolled ? `1px solid ${MINT}18` : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link href="/">
        <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-black"
            style={{
              background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
              boxShadow:  `0 0 20px ${MINT}60`,
              color: "#0A0A0F",
            }}
          >
            V
          </div>
          <span className="font-black text-xl tracking-tight">
            Vendy<span style={{ color: MINT }}>Bites</span>
          </span>
        </motion.div>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.label} href={link.href}>
              <motion.span
                className="text-sm transition-colors relative group cursor-pointer"
                style={{ color: active ? MINT : "rgba(255,255,255,0.6)" }}
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    background: MINT,
                    width: active ? "100%" : "0%",
                  }}
                />
                {!active && (
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: MINT }}
                  />
                )}
              </motion.span>
            </Link>
          );
        })}
      </div>

      {/* CTA button */}
      <Link href="/request">
        <motion.button
          className="px-5 py-2 rounded-full text-sm font-bold"
          style={{
            background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
            boxShadow:  `0 0 20px ${MINT}40`,
            color: "#0A0A0F",
          }}
          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${MINT}70` }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Machine
        </motion.button>
      </Link>
    </motion.nav>
  );
}
