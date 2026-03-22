"use client";

import { motion } from "framer-motion";
import VendingMachine from "./VendingMachine";

const floatingEmojis = [
  { emoji: "🍫", x: "10%", delay: 0, duration: 4 },
  { emoji: "🥤", x: "85%", delay: 0.5, duration: 3.5 },
  { emoji: "🍬", x: "20%", delay: 1, duration: 5 },
  { emoji: "🍪", x: "75%", delay: 1.5, duration: 4.5 },
  { emoji: "🍭", x: "5%", delay: 2, duration: 3 },
  { emoji: "🥨", x: "90%", delay: 2.5, duration: 4.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern animated-bg">
      {/* Floating emoji particles */}
      {floatingEmojis.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl select-none pointer-events-none"
          style={{ left: item.x, top: "20%" }}
          animate={{
            y: [-20, -80, -20],
            opacity: [0.3, 0.8, 0.3],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Big glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,230,0,0.08) 0%, rgba(255,107,0,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Concentric animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[200, 350, 500].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-yellow-400/10"
            style={{
              width: size,
              height: size,
              top: -size / 2,
              left: -size / 2,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.02, 1] }}
            transition={{
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Left content */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 text-sm text-yellow-400 font-medium"
            style={{ background: "rgba(255,230,0,0.05)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now serving 50+ locations
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Snacks</span>
            <span
              className="block glow-yellow"
              style={{ color: "#FFE600" }}
            >
              On Demand.
            </span>
            <span className="block text-white/80 text-5xl lg:text-6xl mt-2">
              Always Fresh.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-white/50 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Premium vending machines stocked with your favorite snacks and
            beverages. Cashless payments, real-time inventory, zero wait time.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              className="px-8 py-4 rounded-2xl font-bold text-black text-lg relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FFE600, #FF6B00)",
                boxShadow: "0 0 30px rgba(255,230,0,0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(255,230,0,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-2xl font-bold text-white text-lg border border-white/20"
              style={{ background: "rgba(255,255,255,0.05)" }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255,230,0,0.5)",
                background: "rgba(255,230,0,0.05)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Find Locations →
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: "50+", label: "Machines" },
              { value: "200+", label: "Products" },
              { value: "24/7", label: "Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black" style={{ color: "#FFE600" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Vending machine */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VendingMachine />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0A0A0F, transparent)" }}
      />
    </section>
  );
}
