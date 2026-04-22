"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden grid-pattern">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${MINT}0d 0%, transparent 55%)` }}
        />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${MINT}15`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            REACH OUT
          </motion.div>
          <motion.h1
            className="text-7xl lg:text-9xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Let&apos;s</span>
            <span className="block glow-mint" style={{ color: MINT }}>Talk.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/45 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you&apos;re ready to partner or just have a question, reach out.
            You&apos;ll hear back from us directly.
          </motion.p>
        </div>
      </section>

      {/* ── Form + Direct Info ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Form */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="py-16 text-center rounded-2xl border"
                style={{ background: `${MINT}08`, borderColor: `${MINT}30` }}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-black text-white mb-2">Message sent.</h3>
                <p className="text-white/40 text-sm mb-8">We&apos;ll get back to you directly.</p>
                <button
                  className="px-6 py-2 rounded-full text-sm font-bold"
                  style={{ background: `${MINT}18`, border: `1px solid ${MINT}40`, color: MINT }}
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              >
                <div>
                  <h2 className="text-3xl font-black text-white mb-8">Send a message.</h2>
                </div>
                {[
                  { label: "Name",         key: "name",    type: "text",  placeholder: "Your name",          required: true  },
                  { label: "Email",        key: "email",   type: "email", placeholder: "you@example.com",    required: true  },
                  { label: "Phone",        key: "phone",   type: "tel",   placeholder: "(475) 337-7461",     required: false },
                ].map(({ label, key, type, placeholder, required }) => (
                  <div key={key}>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      {label}
                      {!required && <span className="normal-case font-normal text-white/25 ml-1">(optional)</span>}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = `${MINT}60`)}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    placeholder="What&apos;s on your mind?"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = `${MINT}60`)}
                    onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
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
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Direct info */}
          <motion.div
            className="space-y-8 lg:pt-20"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-black text-white mb-3">We&apos;re here.</h2>
              <p className="text-white/50 leading-relaxed">
                Prefer to call or text? Reach us directly — no menus, no hold music.
                You&apos;ll get one of us on the other end.
              </p>
            </div>

            <div className="space-y-4">
              <div
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{ background: `${MINT}07`, borderColor: `${MINT}20` }}
              >
                <div className="text-2xl mt-0.5">✉</div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email us</div>
                  <div className="font-mono text-base font-semibold" style={{ color: MINT }}>
                    hello@vendybites.com
                  </div>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{ background: `${AMBER}07`, borderColor: `${AMBER}20` }}
              >
                <div className="text-2xl mt-0.5">✆</div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Call or text</div>
                  <div className="font-mono text-base font-semibold" style={{ color: AMBER }}>
                    (475) 337-7461
                  </div>
                  <div className="text-xs text-white/30 mt-1">Mon–Fri, 8am–6pm EST</div>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-2xl border"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p className="text-white/60 text-sm leading-relaxed italic">
                &ldquo;Based in Connecticut. Built for Connecticut businesses.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center text-xs font-black"
                  style={{ background: `linear-gradient(135deg, ${MINT}, ${AMBER})`, color: "#0A0A0F" }}
                >
                  V
                </div>
                <span className="text-sm font-bold text-white/50">VendyBites</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
