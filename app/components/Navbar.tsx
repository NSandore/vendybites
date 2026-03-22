"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = ["Products", "Locations", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,230,0,0.1)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-black"
          style={{
            background: "linear-gradient(135deg, #FFE600, #FF6B00)",
            boxShadow: "0 0 20px rgba(255,230,0,0.4)",
          }}
        >
          V
        </div>
        <span className="font-black text-xl tracking-tight">
          Vendy<span style={{ color: "#FFE600" }}>Bites</span>
        </span>
      </motion.div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-white/60 hover:text-white transition-colors relative group"
            whileHover={{ y: -1 }}
          >
            {link}
            <span
              className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              style={{ background: "#FFE600" }}
            />
          </motion.a>
        ))}
      </div>

      {/* CTA button */}
      <motion.button
        className="px-5 py-2 rounded-full text-sm font-bold text-black"
        style={{
          background: "linear-gradient(135deg, #FFE600, #FF6B00)",
          boxShadow: "0 0 20px rgba(255,230,0,0.3)",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,230,0,0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        Find a Machine
      </motion.button>
    </motion.nav>
  );
}
