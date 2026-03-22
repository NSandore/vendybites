"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "💳",
    title: "Tap & Go Payments",
    desc: "Apple Pay, Google Pay, credit cards — no cash needed. Just tap and snack.",
    color: "#FFE600",
  },
  {
    icon: "📍",
    title: "50+ Locations",
    desc: "Offices, gyms, schools, and public spaces across the city. Always nearby.",
    color: "#FF6B00",
  },
  {
    icon: "🔄",
    title: "Real-Time Stock",
    desc: "Our app shows live inventory. Never reach an empty slot again.",
    color: "#FF0080",
  },
  {
    icon: "🌡️",
    title: "Temperature Controlled",
    desc: "Cold drinks stay cold, fresh snacks stay fresh. Perfect every time.",
    color: "#4ECDC4",
  },
  {
    icon: "♻️",
    title: "Eco-Friendly",
    desc: "Energy-efficient machines, sustainable packaging, carbon offset program.",
    color: "#7CB518",
  },
  {
    icon: "⚡",
    title: "Instant Vend",
    desc: "3-second drop guarantee. Order placed, snack delivered. No waiting.",
    color: "#8B00FF",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)",
        }}
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
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            WHY VENDYBITES
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Built Different.
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Not your grandma&apos;s vending machine. We&apos;re bringing the future of snacking.
          </p>
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
              whileHover={{
                borderColor: `${feature.color}40`,
                background: `${feature.color}06`,
              }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-5"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {feature.icon}
              </motion.div>

              {/* Dot indicator */}
              <div
                className="w-2 h-2 rounded-full mb-4 opacity-60"
                style={{ background: feature.color }}
              />

              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>

              {/* Corner accent */}
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
