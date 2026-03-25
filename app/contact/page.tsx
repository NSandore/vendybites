"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const channels = [
  {
    icon: "📧",
    title: "Email Support",
    value: "hello@vendybites.com",
    sub: "Typical response within 4 hours",
    color: MINT,
  },
  {
    icon: "💬",
    title: "Live Chat",
    value: "Available in-app",
    sub: "Instant replies during business hours",
    color: AMBER,
  },
  {
    icon: "📞",
    title: "Phone",
    value: "1-800-VENDY-01",
    sub: "Mon–Fri, 8am–8pm EST",
    color: MINT,
  },
  {
    icon: "🔧",
    title: "Machine Issues",
    value: "24/7 Emergency Line",
    sub: "For urgent hardware or stocking issues",
    color: AMBER,
  },
];

const faqs = [
  {
    q: "How quickly can you deploy a machine?",
    a: "Most installations happen within 48–72 hours of finalizing your request. Custom machines may take a bit longer depending on product sourcing.",
  },
  {
    q: "Do I need to handle restocking myself?",
    a: "Not at all. We monitor inventory levels continuously and proactively restock before items run out. You don't lift a finger.",
  },
  {
    q: "What payment methods do your machines accept?",
    a: "All VendyBites machines accept cash, credit/debit cards (chip & swipe), and tap-to-pay (Apple Pay, Google Pay, and all major NFC wallets).",
  },
  {
    q: "Can I change the products after the machine is installed?",
    a: "Absolutely. You can request product changes at any time, and our AI trend system will also automatically suggest swaps based on what's selling and what's trending.",
  },
  {
    q: "What types of machines can you build?",
    a: "We've done snacks, beauty products, ramen, healthcare supplies, gaming accessories, pet supplies, and more. If your customers want it, we can put it in a machine.",
  },
  {
    q: "Is there a revenue share or contract?",
    a: "We offer flexible models — from revenue share agreements to flat monthly fees. We'll find the structure that works best for your situation.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden grid-pattern">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${MINT}0d 0%, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${MINT}15`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            GET IN TOUCH
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Let&apos;s</span>
            <span className="block glow-mint" style={{ color: MINT }}>Talk.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/40 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Questions, partnerships, machine support, or just want to say hi —
            our team is always here.
          </motion.p>
        </div>
      </section>

      {/* ── Contact channels ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.title}
              className="card-shine rounded-2xl border border-white/5 p-6 group relative overflow-hidden cursor-pointer"
              style={{ background: "rgba(255,255,255,0.02)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: `${ch.color}40`, background: `${ch.color}06`, scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{ch.icon}</div>
              <div className="w-2 h-2 rounded-full mb-3 opacity-70" style={{ background: ch.color }} />
              <h3 className="font-bold text-white text-lg mb-1">{ch.title}</h3>
              <div className="font-mono text-sm mb-1" style={{ color: ch.color }}>{ch.value}</div>
              <div className="text-xs text-white/35">{ch.sub}</div>
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: ch.color }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Contact form + FAQ ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            <motion.h2
              className="text-3xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Send a Message
            </motion.h2>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="py-14 text-center rounded-2xl border"
                  style={{ background: `${MINT}08`, borderColor: `${MINT}30` }}
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-black text-white mb-2">Message Sent!</h3>
                  <p className="text-white/40 text-sm mb-6">We&apos;ll get back to you within 4 hours.</p>
                  <button
                    className="px-6 py-2 rounded-full text-sm font-bold"
                    style={{ background: `${MINT}18`, border: `1px solid ${MINT}40`, color: MINT }}
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                >
                  {[
                    { label: "Name",    field: "name",    type: "text",  placeholder: "Your name" },
                    { label: "Email",   field: "email",   type: "email", placeholder: "you@example.com" },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{label}</label>
                      <input
                        type={type} placeholder={placeholder} required
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
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      placeholder="How can we help?"
                      rows={5} required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                      onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                      color: "#0A0A0F",
                      boxShadow: `0 0 30px ${MINT}50`,
                    }}
                    whileHover={{ scale: 1.02, boxShadow: `0 0 50px ${MINT}80` }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message →
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* FAQ */}
          <div>
            <motion.h2
              className="text-3xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Common Questions
            </motion.h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    className="rounded-2xl border overflow-hidden cursor-pointer"
                    style={{
                      background: open ? `${MINT}08` : "rgba(255,255,255,0.02)",
                      borderColor: open ? `${MINT}35` : "rgba(255,255,255,0.06)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <div className="flex items-center justify-between p-5 gap-4">
                      <span className="font-semibold text-white text-sm leading-snug">{faq.q}</span>
                      <motion.span
                        className="text-lg flex-shrink-0"
                        style={{ color: MINT }}
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        +
                      </motion.span>
                    </div>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm text-white/45 leading-relaxed border-t" style={{ borderColor: `${MINT}15` }}>
                            <div className="pt-4">{faq.a}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
