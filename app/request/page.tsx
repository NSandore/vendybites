"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const machineIdeas = [
  { label: "Snacks & Drinks",       emoji: "🍿" },
  { label: "Beauty & Wellness",     emoji: "💄" },
  { label: "Ramen & Hot Foods",     emoji: "🍜" },
  { label: "Healthcare",            emoji: "🩺" },
  { label: "Phone Accessories",     emoji: "📱" },
  { label: "Gaming",                emoji: "🎮" },
  { label: "Fitness & Supplements", emoji: "🏋️" },
  { label: "Pet Supplies",          emoji: "🐾" },
  { label: "Office Supplies",       emoji: "🖨️" },
  { label: "School Supplies",       emoji: "✏️" },
  { label: "Toys & Collectibles",   emoji: "🧸" },
  { label: "Something Else",        emoji: "✨" },
];

const perks = [
  { icon: "⚡", label: "48hr response"     },
  { icon: "🤝", label: "No commitment"     },
  { icon: "🎛️", label: "Fully customizable" },
  { icon: "🤖", label: "AI-optimized mix"  },
];

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", company: "", location: "", foot: "", details: "" });

  function toggleType(label: string) {
    setSelectedTypes((prev) => prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden grid-pattern">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 60% 0%, ${AMBER}0f 0%, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${AMBER}15`, color: AMBER }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            CUSTOM REQUESTS
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Dream It.</span>
            <span className="block glow-amber" style={{ color: AMBER }}>We Build It.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/40 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            No idea is too niche. Share your vision — we&apos;ll design, build, install,
            and keep your machine stocked with exactly what your customers want.
          </motion.p>

          {/* Perks strip */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          >
            {perks.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: `${MINT}0d`, border: `1px solid ${MINT}30`, color: MINT }}
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="text-center py-20 px-8 rounded-3xl border"
                style={{ background: `${MINT}08`, borderColor: `${MINT}30` }}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4, type: "spring" }}
              >
                <motion.div
                  className="text-8xl mb-6"
                  initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  🎉
                </motion.div>
                <h2 className="text-4xl font-black text-white mb-4">We Got It!</h2>
                <p className="text-white/40 text-lg max-w-md mx-auto mb-4">
                  Your request is in. Our team will review your idea and reach out within 48 hours.
                </p>
                <p className="text-white/30 text-sm mb-10">
                  We reply faster for urgent requests — just mention it in your message.
                </p>
                <motion.button
                  className="px-8 py-3 rounded-full text-sm font-bold"
                  style={{ background: `${MINT}18`, border: `1px solid ${MINT}40`, color: MINT }}
                  onClick={() => { setSubmitted(false); setSelectedTypes([]); setForm({ name: "", email: "", company: "", location: "", foot: "", details: "" }); }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  Submit Another Request
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              >

                {/* Machine type selector */}
                <div className="rounded-2xl border p-6" style={{ background: "rgba(255,255,255,0.02)", borderColor: `${MINT}18` }}>
                  <label className="block text-sm font-bold text-white mb-1 uppercase tracking-widest">
                    What type of machine? <span style={{ color: AMBER }}>*</span>
                  </label>
                  <p className="text-xs text-white/30 mb-4">Select all that apply — you can have multiple machines.</p>
                  <div className="flex flex-wrap gap-2">
                    {machineIdeas.map((type) => {
                      const active = selectedTypes.includes(type.label);
                      return (
                        <motion.button
                          key={type.label}
                          type="button"
                          onClick={() => toggleType(type.label)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                          style={{
                            background:  active ? AMBER             : "rgba(255,255,255,0.05)",
                            color:       active ? "#0A0A0F"         : "rgba(255,255,255,0.45)",
                            border:      `1px solid ${active ? AMBER : "rgba(255,255,255,0.1)"}`,
                            boxShadow:   active ? `0 0 14px ${AMBER}50` : "none",
                          }}
                          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        >
                          <span>{type.emoji}</span>
                          <span>{type.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact info */}
                <div className="rounded-2xl border p-6 space-y-5" style={{ background: "rgba(255,255,255,0.02)", borderColor: `${MINT}18` }}>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Your Info</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Full Name *",    field: "name",    type: "text",  placeholder: "Jane Smith"           },
                      { label: "Email *",        field: "email",   type: "email", placeholder: "jane@company.com"     },
                      { label: "Company / Org",  field: "company", type: "text",  placeholder: "Acme Corp (optional)" },
                    ].map(({ label, field, type, placeholder }) => (
                      <div key={field} className={field === "company" ? "sm:col-span-2" : ""}>
                        <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required={label.includes("*")}
                          value={form[field as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                          onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                          onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location & details */}
                <div className="rounded-2xl border p-6 space-y-5" style={{ background: "rgba(255,255,255,0.02)", borderColor: `${MINT}18` }}>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">About Your Space</h3>
                  {[
                    { label: "Location / Address *",    field: "location", placeholder: "e.g. 123 Main St, Downtown Mall, Gate B12..." },
                    { label: "Estimated Daily Foot Traffic", field: "foot",     placeholder: "e.g. ~500 people/day, busy office of 200, high-volume airport terminal..." },
                  ].map(({ label, field, placeholder }) => (
                    <div key={field}>
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{label}</label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        required={label.includes("*")}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                        onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Additional Details</label>
                    <textarea
                      placeholder="Tell us anything else — specific products you'd love, your timeline, budget range, or what problem you're trying to solve..."
                      rows={5}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                      onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full py-5 rounded-2xl font-bold text-lg tracking-wide"
                  style={{
                    background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                    color: "#0A0A0F",
                    boxShadow: `0 0 40px ${MINT}50`,
                  }}
                  whileHover={{ scale: 1.02, boxShadow: `0 0 60px ${MINT}80` }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send My Request →
                </motion.button>
                <p className="text-center text-white/20 text-xs">
                  We typically respond within 48 hours. No commitment required — this is just the start of a conversation.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
