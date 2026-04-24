"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const navLinks = [
  { label: "Home",           href: "/"               },
  { label: "Our Machines",   href: "/our-machines"   },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "About",          href: "/about"          },
  { label: "Contact",        href: "/contact"        },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        background:     scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)"          : "none",
        borderBottom:   scrolled ? `1px solid ${MINT}18` : "none",
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

      {/* Nav links — desktop */}
      <div className="hidden md:flex items-center gap-7">
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
      <div className="flex items-center gap-3">
        <Link href="/for-businesses#partner-form">
          <motion.button
            className="hidden md:block px-5 py-2 rounded-full text-sm font-bold"
            style={{
              background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
              boxShadow:  `0 0 20px ${MINT}40`,
              color: "#0A0A0F",
            }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${MINT}70` }}
            whileTap={{ scale: 0.95 }}
          >
            Start Request
          </motion.button>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-0.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.7)" }}
              animate={
                menuOpen
                  ? i === 0 ? { rotate: 45, y: 8 }
                  : i === 1 ? { opacity: 0 }
                  : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 px-6 py-6 flex flex-col gap-5 md:hidden"
          style={{ background: "rgba(10,10,15,0.97)", borderBottom: `1px solid ${MINT}18` }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              <span
                className="text-base font-semibold"
                style={{ color: pathname === link.href ? MINT : "rgba(255,255,255,0.7)" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/for-businesses#partner-form" onClick={() => setMenuOpen(false)}>
            <button
              className="w-full py-3 rounded-full text-sm font-bold mt-2"
              style={{
                background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                color: "#0A0A0F",
              }}
            >
              Start Request
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
