"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const commitments = [
  {
    icon: "✦",
    title: "New machines, always",
    desc: "We never place refurbished or secondhand equipment. Every machine that goes into your space is brand new, warrantied, and built to impress.",
    color: MINT,
  },
  {
    icon: "◈",
    title: "Direct support",
    desc: "You will always reach a real person. Not a ticket system, not a call center. When something needs attention, we handle it — personally.",
    color: AMBER,
  },
  {
    icon: "◉",
    title: "The right fit",
    desc: "We don&apos;t place machines just to place them. If your space isn&apos;t a good fit for what we offer, we&apos;ll tell you. We only work with businesses we can genuinely serve well.",
    color: MINT,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden grid-pattern">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${MINT}0d 0%, ${AMBER}07 50%, transparent 70%)` }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          {[300, 500, 700].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size, height: size,
                top: -size / 2, right: -size / 2,
                border: `1px solid ${MINT}${i === 0 ? "18" : i === 1 ? "0e" : "07"}`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8"
            style={{ background: `${MINT}0d`, borderColor: `${MINT}40`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: MINT }} />
            About VendyBites
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Modern vending.</span>
            <span className="block glow-mint" style={{ color: MINT }}>Local people.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            VendyBites is Connecticut&apos;s modern vending company — built on the idea that
            businesses deserve better machines, better products, and better service than
            the industry standard.
          </motion.p>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-24 px-6 border-t" style={{ borderColor: `${MINT}10` }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              WHO WE ARE
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Meet the founders.</h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              We&apos;re not a national corporation. We&apos;re two people from Connecticut
              who built something better.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                initials: "F1",
                name: "Founder Name",
                role: "Co-Founder",
                bio: "Connecticut native with a background in operations and business development. Brings years of experience building client relationships and running things efficiently — the kind of experience that makes a vending partnership actually work.",
                color: MINT,
              },
              {
                initials: "F2",
                name: "Founder Name",
                role: "Co-Founder",
                bio: "Born and raised in CT, with deep roots in tech and product development. Handles the systems side of VendyBites — the AI inventory tools, machine monitoring, and everything that keeps operations running smoothly.",
                color: AMBER,
              },
            ].map((founder, i) => (
              <motion.div
                key={i}
                className="card-shine rounded-2xl p-8 border border-white/5 group"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ borderColor: `${founder.color}35`, background: `${founder.color}05` }}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${founder.color}25, ${founder.color}10)`,
                      border: `2px solid ${founder.color}35`,
                      color: founder.color,
                    }}
                  >
                    {founder.initials}
                  </div>
                  <div>
                    <div className="font-black text-white text-lg">{founder.name}</div>
                    <div className="text-sm font-medium" style={{ color: founder.color }}>{founder.role} · VendyBites</div>
                  </div>
                </div>
                <p className="text-white/45 text-sm leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-white/30 text-sm mt-8 italic"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Photos and full bios coming soon.
          </motion.p>
        </div>
      </section>

      {/* ── Why Connecticut ── */}
      <section className="py-24 px-6 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${MINT}06 0%, transparent 65%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${MINT}15`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            WHY CONNECTICUT
          </motion.div>
          <motion.h2
            className="text-5xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We&apos;re not a national company
            that{" "}
            <span style={{ color: MINT }}>parachutes into a market.</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/50 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We&apos;re from here. We operate here. Every business we work with gets our direct
            attention because we live in the same communities, shop at the same stores, and
            understand what Connecticut businesses actually need. That local perspective informs
            every machine placement, every product selection, and every conversation we have.
          </motion.p>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section className="py-20 px-6 border-t" style={{ borderColor: `${MINT}10` }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              OUR COMMITMENT
            </div>
            <h2 className="text-5xl font-black text-white mb-4">What we stand for.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, i) => (
              <motion.div
                key={item.title}
                className="card-shine rounded-2xl p-8 border border-white/5 group relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ borderColor: `${item.color}40`, background: `${item.color}06` }}
              >
                <div
                  className="text-3xl font-black mb-5 select-none"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="w-2 h-2 rounded-full mb-4 opacity-70" style={{ background: item.color }} />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-white mb-4">Ready to work together?</h2>
          <p className="text-white/40 text-lg mb-10">
            Tell us about your space and we&apos;ll take it from there.
          </p>
          <Link href="/for-businesses">
            <motion.button
              className="px-10 py-4 rounded-2xl font-bold text-lg"
              style={{
                background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                color: "#0A0A0F",
                boxShadow: `0 0 40px ${MINT}50`,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 60px ${MINT}80` }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
