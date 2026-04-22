"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const MINT  = "#aaf0ee";
const AMBER = "#fed383";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern animated-bg">
      {/* Glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${MINT}0a 0%, ${AMBER}06 40%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[200, 380, 560].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size, height: size,
              top: -size / 2, left: -size / 2,
              border: `1px solid ${MINT}10`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-40 w-full">
        {/* Content */}
        <div className="space-y-8 max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
            style={{ background: `${MINT}0d`, borderColor: `${MINT}40`, color: MINT }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: MINT }} />
            Proudly serving Connecticut businesses
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Connecticut&apos;s</span>
            <span className="block text-white">Vending,</span>
            <span className="block glow-mint" style={{ color: MINT }}>Done Right.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg text-white/55 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Modern machines. Local people. Real support — right here in CT.
            We handle everything so you can focus on running your business.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/for-businesses">
              <motion.button
                className="px-8 py-4 rounded-2xl font-bold text-black text-lg relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                  boxShadow: `0 0 30px ${MINT}60`,
                }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 50px ${MINT}90` }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.button>
            </Link>

            <Link href="/our-machines">
              <motion.button
                className="px-8 py-4 rounded-2xl font-bold text-white text-lg border border-white/20"
                style={{ background: "rgba(255,255,255,0.04)" }}
                whileHover={{ scale: 1.05, borderColor: `${MINT}60`, background: `${MINT}0d` }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Machines
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0A0A0F, transparent)" }}
      />
    </section>
  );
}
