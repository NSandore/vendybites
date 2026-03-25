"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const steps = [
  { n: "01", icon: "🤝", title: "You Tell Us the Vision",    desc: "Share your space, your audience, and what you want to sell. We handle everything from there." },
  { n: "02", icon: "🤖", title: "AI Curates the Product Mix", desc: "Our trend engine analyzes real-time consumer data to recommend the ideal product lineup for your location." },
  { n: "03", icon: "🔧", title: "We Install & Stock",         desc: "Delivery, setup, and initial stocking — done within days. Zero hassle on your end." },
  { n: "04", icon: "📈", title: "We Adapt Continuously",      desc: "The machine learns what sells. Slow-movers get swapped, trending products get added. Automatically." },
];

const values = [
  { icon: "🎯", title: "Customer First",    desc: "Every decision we make starts with your customers. Their satisfaction drives everything we do.",    color: MINT  },
  { icon: "🤖", title: "AI-Driven",         desc: "We don't guess what people want. We use real data to know — and we act on it faster than anyone.",  color: AMBER },
  { icon: "♻️", title: "Sustainable",       desc: "Energy-efficient hardware, responsible packaging, and a commitment to reducing our footprint.",     color: MINT  },
  { icon: "🔓", title: "No Limits",         desc: "Beauty. Ramen. Snacks. Healthcare. Whatever the need, we build the machine.",                      color: AMBER },
  { icon: "⚡", title: "Speed & Precision", desc: "Fast deployment, reliable uptime, and proactive restocking — so your machine is always ready.",     color: MINT  },
  { icon: "💬", title: "Real Support",      desc: "Real humans behind every ticket. 24/7 dedicated support that actually responds.",                  color: AMBER },
];

const stats = [
  { value: "200+", label: "Products in catalog"        },
  { value: "24/7", label: "Support availability"       },
  { value: "100%", label: "Customizable stock"         },
  { value: "<48h", label: "Avg. deployment time"       },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden grid-pattern">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${MINT}0d 0%, ${AMBER}08 50%, transparent 70%)` }}
        />
        {/* Animated rings */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          {[300, 500, 700].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size, height: size,
                top: -size / 2, right: -size / 2,
                border: `1px solid ${MINT}${i === 0 ? "20" : i === 1 ? "12" : "07"}`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8"
            style={{ background: `${MINT}0d`, borderColor: `${MINT}40`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: MINT }} />
            Our story
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Vending,</span>
            <span className="block glow-mint" style={{ color: MINT }}>Reimagined.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            VendyBites was built on one idea: vending machines should be as flexible
            as the people using them. We combine AI-driven inventory intelligence with
            hands-on human support to deliver machines that actually perform.
          </motion.p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-6 border-y" style={{ borderColor: `${MINT}12`, background: `${MINT}05` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-5xl font-black mb-2 glow-mint" style={{ color: MINT }}>{s.value}</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: `${AMBER}15`, color: AMBER }}>
              HOW IT WORKS
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Simple from Day One.</h2>
            <p className="text-white/40 text-lg max-w-md mx-auto">From your first message to a fully stocked machine — here&apos;s the process.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                className="card-shine rounded-2xl p-8 border border-white/5 relative overflow-hidden group"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ borderColor: `${i % 2 === 0 ? MINT : AMBER}40`, background: `${i % 2 === 0 ? MINT : AMBER}06` }}
              >
                <div className="text-7xl font-black absolute top-4 right-6 opacity-[0.04] select-none">{step.n}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? MINT : AMBER}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Tech deep dive ── */}
      <section className="py-24 px-6 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${AMBER}08 0%, transparent 65%)` }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left text */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6" style={{ background: `${AMBER}15`, color: AMBER }}>
                  AI TREND TECHNOLOGY
                </div>
                <h2 className="text-5xl font-black text-white mb-6">
                  Your Machine Learns<br />
                  <span style={{ color: AMBER }}>What People Want.</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  Our proprietary AI engine continuously monitors consumer trends —
                  social media signals, purchase velocity, seasonal patterns — and
                  translates that into real product changes in your machine.
                </p>
                <p className="text-white/40 leading-relaxed">
                  No more guessing. No more stale inventory. Just the right products
                  at the right time, automatically adjusted before you even notice a shift.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              >
                {["Trend Detection", "Demand Forecasting", "Auto Restock Alerts", "Seasonal Adaptation", "Sales Analytics"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: `${AMBER}15`, color: AMBER, border: `1px solid ${AMBER}30` }}>
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — animated AI display */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-96"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="rounded-3xl border p-6 space-y-3 relative overflow-hidden" style={{ background: "#060d14", borderColor: `${AMBER}25` }}>
                <div className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: `${AMBER}80` }}>● LIVE TREND FEED</div>
                {[
                  { label: "Korean Snacks",        pct: 94, up: true  },
                  { label: "Matcha Products",       pct: 87, up: true  },
                  { label: "Energy Drinks",         pct: 81, up: true  },
                  { label: "Traditional Candy",     pct: 23, up: false },
                  { label: "Press-On Nail Kits",    pct: 91, up: true  },
                  { label: "Disposable Razors",     pct: 18, up: false },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i + 0.3 }}
                  >
                    <div className="text-xs font-mono w-4" style={{ color: item.up ? MINT : "#FF6B6B" }}>
                      {item.up ? "▲" : "▼"}
                    </div>
                    <div className="text-sm text-white/60 w-40 truncate">{item.label}</div>
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.up ? `linear-gradient(90deg, ${MINT}, ${AMBER})` : "#FF6B6B60" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i + 0.5, duration: 0.7, ease: "easeOut" }}
                      />
                    </div>
                    <div className="text-xs font-mono w-8 text-right" style={{ color: item.up ? MINT : "#FF6B6B" }}>
                      {item.pct}%
                    </div>
                  </motion.div>
                ))}
                <div className="pt-3 border-t text-xs font-mono text-white/20" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  Updated 2 mins ago · Auto-adjusting inventory
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: `${MINT}15`, color: MINT }}>
              OUR VALUES
            </div>
            <h2 className="text-5xl font-black text-white mb-4">What We Stand For.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="card-shine rounded-2xl p-7 border border-white/5 group relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ borderColor: `${v.color}40`, background: `${v.color}06` }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <div className="w-2 h-2 rounded-full mb-3 opacity-70" style={{ background: v.color }} />
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: v.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-5xl font-black text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/40 text-lg mb-10">Tell us your space and your vision. We&apos;ll do the rest.</p>
          <Link href="/request">
            <motion.button
              className="px-10 py-4 rounded-2xl font-bold text-lg"
              style={{ background: `linear-gradient(135deg, ${MINT}, ${AMBER})`, color: "#0A0A0F", boxShadow: `0 0 40px ${MINT}50` }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 60px ${MINT}80` }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Machine →
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
