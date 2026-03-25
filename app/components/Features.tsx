"use client";

import { motion } from "framer-motion";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const features = [
  {
    icon: "🎛️",
    title: "Fully Customizable",
    desc: "You choose exactly what goes inside — from premium snacks to specialty beauty products, tailored precisely to your customers.",
    color: MINT,
  },
  {
    icon: "🤖",
    title: "AI Trend Technology",
    desc: "Our system monitors real-time consumer trends and automatically adjusts your machine's product mix to keep up with what people actually want.",
    color: AMBER,
  },
  {
    icon: "🤝",
    title: "24/7 Dedicated Support",
    desc: "Real humans, fast responses. Our support team is always on call to keep your machine running, stocked, and performing.",
    color: MINT,
  },
  {
    icon: "💳",
    title: "Cash, Card & Tap",
    desc: "Accept any payment — physical cash, chip & swipe cards, Apple Pay, Google Pay, and contactless tap. Nobody gets turned away.",
    color: AMBER,
  },
  {
    icon: "📦",
    title: "We Handle Everything",
    desc: "Delivery, installation, restocking, maintenance — we manage the full lifecycle so you never have to think about it.",
    color: MINT,
  },
  {
    icon: "♻️",
    title: "Eco-Friendly First",
    desc: "Energy-efficient machines, sustainable packaging, and a carbon offset program baked right into our model.",
    color: AMBER,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative" id="about">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${MINT}07 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
            style={{ background: `${MINT}15`, color: MINT }}
          >
            WHY VENDYBITES
          </div>
          <h2 className="text-5xl font-black text-white mb-4">Built Different.</h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            We don&apos;t just drop a machine and disappear. We&apos;re your long-term vending partner.
          </p>
        </motion.div>

        {/* Payment badge strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { icon: "💵", label: "Cash",        sub: "Physical bills & coins"    },
            { icon: "💳", label: "Card",         sub: "Chip, swipe & contactless" },
            { icon: "📱", label: "Tap to Pay",   sub: "Apple Pay & Google Pay"   },
          ].map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border"
              style={{ background: `${MINT}08`, borderColor: `${MINT}25` }}
            >
              <span className="text-2xl">{p.icon}</span>
              <div>
                <div className="font-bold text-white text-sm">{p.label}</div>
                <div className="text-xs text-white/40">{p.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="card-shine rounded-2xl p-7 border border-white/5 group relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: `${feature.color}40`, background: `${feature.color}06` }}
            >
              <motion.div
                className="text-5xl mb-5"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {feature.icon}
              </motion.div>
              <div className="w-2 h-2 rounded-full mb-4 opacity-70" style={{ background: feature.color }} />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
