"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const machineIdeas = [
  "Snacks & Drinks", "Beauty & Wellness", "Ramen & Hot Foods",
  "Healthcare", "Phone Accessories", "Gaming", "Fitness & Supplements",
  "Pet Supplies", "Office Supplies", "Toys & Collectibles", "Other",
];

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", location: "", details: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="request" className="py-24 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 100%, ${AMBER}07 0%, transparent 60%)` }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
            style={{ background: `${AMBER}15`, color: AMBER }}
          >
            SPECIAL REQUESTS
          </div>
          <h2 className="text-5xl font-black text-white mb-4">Dream It. We&apos;ll Build It.</h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            No idea is too niche. Tell us what kind of machine you need and where,
            and we&apos;ll make it happen.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center py-16 px-8 rounded-3xl border"
              style={{ background: `${MINT}08`, borderColor: `${MINT}30` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <motion.div
                className="text-7xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              >
                🎉
              </motion.div>
              <h3 className="text-3xl font-black text-white mb-3">Request Received!</h3>
              <p className="text-white/50 mb-8 max-w-sm mx-auto">
                Our team will review your idea and reach out within 24 hours.
                We love a good challenge.
              </p>
              <motion.button
                className="px-6 py-2.5 rounded-full text-sm font-bold"
                style={{ background: `${MINT}18`, border: `1px solid ${MINT}40`, color: MINT }}
                onClick={() => { setSubmitted(false); setSelectedType(null); setForm({ name: "", email: "", location: "", details: "" }); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Another Request
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="rounded-3xl border p-8 space-y-6"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: `${MINT}18` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Machine type selector */}
              <div>
                <label className="block text-sm font-bold text-white/60 mb-3 uppercase tracking-widest">
                  What type of machine?
                </label>
                <div className="flex flex-wrap gap-2">
                  {machineIdeas.map((type) => {
                    const active = selectedType === type;
                    return (
                      <motion.button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                        style={{
                          background:  active ? AMBER             : "rgba(255,255,255,0.05)",
                          color:       active ? "#0A0A0F"         : "rgba(255,255,255,0.45)",
                          border:      `1px solid ${active ? AMBER : "rgba(255,255,255,0.1)"}`,
                          boxShadow:   active ? `0 0 14px ${AMBER}50` : "none",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {type}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Your Name",    field: "name",  type: "text",  placeholder: "Jane Smith"         },
                  { label: "Email",        field: "email", type: "email", placeholder: "jane@company.com"   },
                ].map(({ label, field, type, placeholder }) => (
                  <div key={field}>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid rgba(255,255,255,0.1)`,
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                      onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                ))}
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                  Location / Venue Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. Our office lobby at 123 Main St, Downtown"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                  onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                  Tell us more
                </label>
                <textarea
                  placeholder="Describe your ideal machine — what products, who your customers are, foot traffic, anything helps..."
                  rows={4}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = `${MINT}60`}
                  onBlur={(e)  => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold text-base tracking-wide"
                style={{
                  background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                  color: "#0A0A0F",
                  boxShadow: `0 0 30px ${MINT}50`,
                }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 40px ${MINT}80` }}
                whileTap={{ scale: 0.98 }}
              >
                Send My Request →
              </motion.button>

              <p className="text-center text-white/25 text-xs">
                We typically respond within 24 hours. No commitment required.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
