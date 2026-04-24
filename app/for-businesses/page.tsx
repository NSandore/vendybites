"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const steps = [
  {
    n: "01",
    title: "You Reach Out",
    desc: "Tell us about your space — what type of business you run, roughly how many people use it daily, and what kind of products you have in mind.",
    color: MINT,
  },
  {
    n: "02",
    title: "We Plan Together",
    desc: "We meet, assess your space, and match the right machine and product mix to your audience. This part is collaborative — your input shapes everything.",
    color: AMBER,
  },
  {
    n: "03",
    title: "We Handle the Rest",
    desc: "Installation, maintenance, restocking, and ongoing support. You just benefit. We&apos;re the ones keeping it running.",
    color: MINT,
  },
];

const locationTypes = [
  { icon: "🏢", label: "Offices"              },
  { icon: "🏋️", label: "Gyms"               },
  { icon: "💇", label: "Salons"               },
  { icon: "🏠", label: "Apartment Complexes"  },
  { icon: "🏨", label: "Hotels"               },
  { icon: "🏥", label: "Medical Offices"      },
  { icon: "🎓", label: "Universities"         },
  { icon: "🛍️", label: "Retail Stores"       },
  { icon: "🏭", label: "Warehouses"           },
  { icon: "🧖", label: "Spas"                 },
];

const productCategories = ["Food & Snacks", "Beverages", "Beauty & Wellness", "Specialty / Niche", "Not Sure Yet"];
const spaceTypes = ["Office", "Gym / Fitness", "Salon / Spa", "Apartment Complex", "Hotel", "Medical / Healthcare", "University / School", "Retail", "Warehouse", "Other"];

export default function ForBusinessesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", business: "", city: "", spaceType: "",
    footTraffic: "", productCategory: "", contact: "", notes: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function field(key: keyof typeof form, label: string, placeholder: string, type = "text", required = true) {
    return (
      <div key={key}>
        <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
          {label}{required && <span style={{ color: AMBER }}> *</span>}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = `${MINT}60`)}
          onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden grid-pattern">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 60% 0%, ${AMBER}0d 0%, transparent 55%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${AMBER}15`, color: AMBER }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            FOR CONNECTICUT BUSINESSES
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Your Space.</span>
            <span className="block text-white">Our Machine.</span>
            <span className="block glow-amber" style={{ color: AMBER }}>Zero Hassle.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/50 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            We handle everything — from setup to ongoing support — so you don&apos;t have
            to think about it. Your employees, residents, or guests get a great machine.
            You get zero work.
          </motion.p>
        </div>
      </section>

      {/* ── Quick Contact Paths ── */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#partner-form"
            className="rounded-2xl border p-6 transition-colors"
            style={{ background: `${MINT}08`, borderColor: `${MINT}25` }}
          >
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: MINT }}>
              FASTEST PATH
            </div>
            <h2 className="text-2xl font-black text-white mb-2">Start the 60-second form</h2>
            <p className="text-white/45 text-sm leading-relaxed">
              Skip the scroll. Jump straight to the partner request form.
            </p>
          </a>

          <a
            href="tel:+14753377461"
            className="rounded-2xl border p-6 transition-colors"
            style={{ background: `${AMBER}08`, borderColor: `${AMBER}25` }}
          >
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: AMBER }}>
              CALL OR TEXT
            </div>
            <h2 className="text-2xl font-black text-white mb-2">(475) 337-7461</h2>
            <p className="text-white/45 text-sm leading-relaxed">
              Reach us directly if you want a faster conversation.
            </p>
          </a>

          <a
            href="mailto:hello@vendybites.com"
            className="rounded-2xl border p-6 transition-colors"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.12)" }}
          >
            <div className="text-xs font-bold tracking-widest mb-3 text-white/50">
              EMAIL US
            </div>
            <h2 className="text-2xl font-black text-white mb-2">hello@vendybites.com</h2>
            <p className="text-white/45 text-sm leading-relaxed">
              Send the basics and we&apos;ll reply directly.
            </p>
          </a>
        </div>
      </section>

      {/* ── Partner Interest Form ── */}
      <section className="py-16 px-6 scroll-mt-32" id="partner-form">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${MINT}15`, color: MINT }}
            >
              PARTNER WITH US
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Let&apos;s get started.</h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">
              Fill out the form and we&apos;ll reach out directly, usually within 24 hours.
              No commitment, no obligation. Just a conversation.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="text-center py-20 px-8 rounded-3xl border"
                style={{ background: `${MINT}08`, borderColor: `${MINT}30` }}
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4, type: "spring" }}
              >
                <motion.div
                  className="text-7xl mb-6"
                  initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  🎉
                </motion.div>
                <h3 className="text-3xl font-black text-white mb-3">We Got It!</h3>
                <p className="text-white/45 text-lg max-w-sm mx-auto mb-8">
                  We&apos;ll reach out to you directly, usually within 24 hours.
                </p>
                <button
                  className="px-8 py-3 rounded-full text-sm font-bold"
                  style={{ background: `${MINT}18`, border: `1px solid ${MINT}40`, color: MINT }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", business: "", city: "", spaceType: "", footTraffic: "", productCategory: "", contact: "", notes: "" });
                  }}
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${MINT}15`, borderRadius: "1.5rem", padding: "2.5rem" }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field("name", "Your Name", "Jane Smith")}
                  {field("business", "Business Name", "Acme Fitness")}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field("city", "City or Town in CT", "Stamford, CT")}
                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      Type of Space<span style={{ color: AMBER }}> *</span>
                    </label>
                    <select
                      required
                      value={form.spaceType}
                      onChange={(e) => setForm({ ...form, spaceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = `${MINT}60`)}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#0A0A0F" }}>Select type...</option>
                      {spaceTypes.map((t) => (
                        <option key={t} value={t} style={{ background: "#0A0A0F" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field("footTraffic", "Estimated Daily Foot Traffic", "e.g. ~200 employees", "text", false)}
                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      Preferred Product Category
                    </label>
                    <select
                      value={form.productCategory}
                      onChange={(e) => setForm({ ...form, productCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = `${MINT}60`)}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#0A0A0F" }}>Select...</option>
                      {productCategories.map((c) => (
                        <option key={c} value={c} style={{ background: "#0A0A0F" }}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {field("contact", "Phone or Email", "your@email.com or (475) 337-7461")}
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                    Anything else we should know
                    <span className="normal-case font-normal text-white/25 ml-1">(optional)</span>
                  </label>
                  <textarea
                    placeholder="Tell us anything that might help — timeline, specific products you have in mind, or what problem you're trying to solve..."
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = `${MINT}60`)}
                    onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-lg mt-2"
                  style={{
                    background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                    color: "#0A0A0F",
                    boxShadow: `0 0 30px ${MINT}50`,
                  }}
                  whileHover={{ scale: 1.02, boxShadow: `0 0 50px ${MINT}80` }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send My Interest
                </motion.button>
                <p className="text-center text-white/25 text-xs">
                  We typically respond within 24 hours. No commitment required. This is just the start of a conversation.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${MINT}15`, color: MINT }}
            >
              HOW IT WORKS
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Three steps. That&apos;s it.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                className="card-shine rounded-2xl p-8 border border-white/5 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <div
                  className="text-7xl font-black absolute top-4 right-5 opacity-[0.04] select-none"
                  style={{ lineHeight: 1 }}
                >
                  {step.n}
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-5"
                  style={{ background: `${step.color}20`, border: `1px solid ${step.color}40`, color: step.color }}
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}50, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="py-20 px-6 border-t" style={{ borderColor: `${MINT}10` }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              WHO WE WORK WITH
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              If people walk through your doors, we can help.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {locationTypes.map((loc, i) => (
              <motion.div
                key={loc.label}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/5 text-center"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                whileHover={{ borderColor: `${MINT}35`, background: `${MINT}06`, scale: 1.04 }}
              >
                <span className="text-3xl">{loc.icon}</span>
                <span className="text-xs font-semibold text-white/60">{loc.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Flexibility ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
              style={{ background: `${MINT}15`, color: MINT }}
            >
              PRODUCT FLEXIBILITY
            </div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              We match the machine to your space and your people.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
              We offer far more than chips and soda. Food, drinks, beauty, and niche specialty
              machines means we can serve almost any audience. The right machine for the right space — every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why Not a Big Company ── */}
      <section className="py-20 px-6 border-t" style={{ borderColor: `${MINT}10` }}>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              THE DIFFERENCE
            </div>
            <h2 className="text-4xl font-black text-white leading-tight">
              Big vending companies can be slow,<br />
              <span style={{ color: AMBER }}>hard to reach, and treat every location the same.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              We aim to do the opposite. No automated phone trees. No 5-day response windows.
              No one-size-fits-all stocking. When you have a question or a problem,
              you&apos;re talking to the same people every time.
            </p>
          </motion.div>

          <motion.div
            className="flex-shrink-0 w-full lg:w-80"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div
              className="rounded-2xl border p-7 space-y-5"
              style={{ background: `${MINT}07`, borderColor: `${MINT}25` }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                style={{ background: `${MINT}20`, color: MINT }}
              >
                DIRECT CONTACT PROMISE
              </div>
              <p className="text-white font-semibold leading-relaxed">
                Every VendyBites partner works directly with our founders.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                You&apos;ll have our direct contact from day one.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: `linear-gradient(135deg, ${MINT}30, ${AMBER}30)`, border: `2px solid ${MINT}40` }}
                >
                  VB
                </div>
                <div>
                  <div className="text-white text-sm font-bold">VendyBites Founders</div>
                  <div className="text-xs" style={{ color: MINT }}>Connecticut-based</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
