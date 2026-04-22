"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const categories = [
  {
    icon: "🧴",
    label: "Health & Beauty",
    desc: "Built for salons, nightlife, apartments, campuses, and convenience-first spaces where people want essentials immediately.",
    items: ["Tampons / pads", "Condoms", "Lash kits / press-on nails", "Lip balm / lotion / sunscreen", "Deodorant / wipes / toothbrush kits", "Hair ties / clips"],
    color: MINT,
  },
  {
    icon: "🍫",
    label: "Snacks (Premium + Healthy)",
    desc: "A stronger snack mix for offices, gyms, transit hubs, schools, and premium spaces that want better options than the usual vending lineup.",
    items: ["Protein bars / cookies", "Jerky / meat sticks", "Nuts / trail mix / dried fruit", "Gourmet popcorn / candy", "Keto / vegan snacks"],
    color: AMBER,
  },
  {
    icon: "🍜",
    label: "Shelf-Stable Meals / Late Night",
    desc: "Reliable, quick-grab meals for campuses, transit, late-night buildings, and places where people need more than a candy bar.",
    items: ["Cup noodles / ramen", "Mac & cheese cups", "Instant oatmeal", "Microwave popcorn", "Crackers + dip packs"],
    color: MINT,
  },
  {
    icon: "🥤",
    label: "Drinks",
    desc: "Keep the drink side sharp with a lineup tailored to commuters, students, gym members, employees, and guests.",
    items: ["Energy drinks", "Bottled coffee / cold brew", "Sports drinks / electrolytes", "Coconut water / sparkling water"],
    color: AMBER,
  },
  {
    icon: "🔌",
    label: "Tech & Accessories",
    desc: "A high-utility machine for airports, lobbies, campuses, apartments, and waiting areas where people forget the basics.",
    items: ["Phone chargers (USB-C / Lightning)", "Earbuds", "Power banks", "Screen wipes"],
    color: MINT,
  },
  {
    icon: "🛍️",
    label: "Convenience / Emergency",
    desc: "Perfect for apartment complexes, hospitality, medical spaces, and public venues where quick fixes matter.",
    items: ["Travel hygiene kits", "Compact umbrellas", "Baby wipes / small diaper packs", "Band-aids / basic meds"],
    color: AMBER,
  },
  {
    icon: "🎮",
    label: "Fun / Impulse",
    desc: "Higher-margin impulse items that work well in entertainment spaces, retail-adjacent locations, and family-heavy traffic.",
    items: ["Trading cards", "Mystery boxes / blind bags", "Mini toys", "Small books / journals"],
    color: MINT,
  },
  {
    icon: "💊",
    label: "Wellness / Fitness",
    desc: "A clean fit for gyms, wellness clubs, recovery studios, and health-focused workplaces.",
    items: ["Protein / supplement packets", "Electrolyte sticks", "Vitamin packs", "Sleep aids (melatonin)"],
    color: AMBER,
  },
  {
    icon: "🔥",
    label: "High-Performing Combos",
    desc: "Proven mixes for specific audiences, based on what tends to move fastest in those environments.",
    items: ["College: ramen + energy drinks + candy", "Gym: protein + electrolytes + healthy snacks", "Nightlife: hygiene + beauty + chargers", "Transit: chargers + drinks + snacks"],
    color: MINT,
  },
  {
    icon: "🎛️",
    label: "Build Your Own",
    desc: "Start with one of these assortments or build a completely custom machine around your audience. If people buy it, we can usually stock it.",
    items: ["Mix categories for one location", "Tailor to your budget and traffic", "Build around your audience", "Custom assortments and more!"],
    color: AMBER,
  },
];

const tiers = [
  {
    name: "Standard",
    icon: "⬜",
    tagline: "Reliable. Modern. Ready.",
    desc: "Brand new machines, every time. Card and cash accepted on every unit. Reliable hardware with full maintenance and restocking included.",
    features: ["Card + cash + tap on every machine", "Brand new — never refurbished", "Full maintenance included", "Remote monitoring"],
    color: MINT,
  },
  {
    name: "AI-Enabled",
    icon: "◈",
    tagline: "Inventory that thinks.",
    desc: "Our AI layer tracks what&apos;s selling in your specific location, monitors consumer trends, and automatically adapts your product mix — before you even notice a shift.",
    features: ["Real-time sales analytics", "Trend-based product recommendations", "Auto-restock alerts", "Seasonal adaptation"],
    color: AMBER,
    highlight: true,
  },
  {
    name: "Self-Vend",
    icon: "◉",
    tagline: "Hands-free. Seamless.",
    desc: "User taps to pay, the door unlocks, and an AI camera tracks their selection. No buttons, no slots — just walk up and take what you want. Perfect for high-trust, high-traffic environments.",
    features: ["Tap to pay + door unlock", "AI camera tracks selections", "No physical dispensing mechanism", "Full audit trail"],
    color: MINT,
  },
];

export default function OurMachinesPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden grid-pattern">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${MINT}0d 0%, transparent 55%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${MINT}15`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            OUR MACHINES
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">The right machine</span>
            <span className="block glow-mint" style={{ color: MINT }}>for your space.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/45 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            From health and beauty to premium snacks, drinks, late-night meals,
            tech accessories, wellness, emergency essentials, and build-your-own setups,
            we match the machine to your space and the people who use it.
          </motion.p>
        </div>
      </section>

      {/* ── Category Overview ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              WHAT WE OFFER
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Start with a proven mix. Then customize.</h2>
            <p className="text-white/40 text-lg max-w-3xl mx-auto">
              These are some of the most requested machine setups right now. Need something different? We can build around that too.
            </p>
          </motion.div>

          <div className="space-y-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                className="card-shine rounded-2xl p-8 border border-white/5 group relative overflow-hidden flex flex-col md:flex-row items-start gap-7"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ borderColor: `${cat.color}35`, background: `${cat.color}05` }}
              >
                <div className="text-6xl flex-shrink-0">{cat.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                    <h3 className="text-2xl font-black text-white">{cat.label}</h3>
                  </div>
                  <p className="text-white/45 text-base leading-relaxed mb-5">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{ background: `${cat.color}12`, border: `1px solid ${cat.color}28`, color: "rgba(255,255,255,0.72)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: cat.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Tiers ── */}
      <section className="py-24 px-6 relative border-t" style={{ borderColor: `${MINT}10` }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${MINT}06 0%, transparent 65%)` }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${MINT}15`, color: MINT }}
            >
              TECHNOLOGY TIERS
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Three types of machines.</h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">
              Every machine we place is brand new. What changes is how smart it is.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                className="card-shine rounded-2xl p-8 border relative overflow-hidden"
                style={{
                  background: tier.highlight ? `${tier.color}08` : "rgba(255,255,255,0.02)",
                  borderColor: tier.highlight ? `${tier.color}35` : "rgba(255,255,255,0.06)",
                  boxShadow: tier.highlight ? `0 0 40px ${tier.color}12` : "none",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                {tier.highlight && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${tier.color}20`, color: tier.color, border: `1px solid ${tier.color}40` }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div className="text-3xl font-black mb-4 select-none" style={{ color: tier.color }}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{tier.name}</h3>
                <div className="text-sm font-medium mb-4" style={{ color: tier.color }}>{tier.tagline}</div>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{tier.desc}</p>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tier.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Machine Matching CTA ── */}
      <section className="py-24 px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-white mb-4">Not sure which machine fits your space?</h2>
          <p className="text-white/40 text-lg mb-10">
            Reach out and we&apos;ll figure it out together. No commitment required — just a conversation.
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
