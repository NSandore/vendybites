"use client";

import { motion } from "framer-motion";

const slots = [
  { label: "A1", color: "#FF6B6B", emoji: "🍫" },
  { label: "A2", color: "#FFE66D", emoji: "🍬" },
  { label: "A3", color: "#4ECDC4", emoji: "🥤" },
  { label: "B1", color: "#FF6B00", emoji: "🍪" },
  { label: "B2", color: "#FF0080", emoji: "🍭" },
  { label: "B3", color: "#A8E6CF", emoji: "🥨" },
];

export default function VendingMachine() {
  return (
    <div className="relative float">
      {/* Glow orb behind machine */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse, #FFE600 0%, #FF6B00 50%, transparent 80%)" }}
      />

      {/* Machine body */}
      <motion.div
        className="relative rounded-3xl border-2 border-yellow-400/30 overflow-hidden"
        style={{
          width: 280,
          background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          boxShadow: "0 0 40px rgba(255,230,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Top display */}
        <div className="px-4 pt-4 pb-2">
          <div
            className="rounded-xl p-3 text-center border border-yellow-400/20 scanlines relative overflow-hidden"
            style={{ background: "#060614" }}
          >
            <div className="text-yellow-400 font-bold text-lg flicker tracking-widest">
              VENDY<span className="text-orange-400">BITES</span>
            </div>
            <div className="text-green-400 text-xs mt-1 font-mono">
              ● INSERT COINS ●
            </div>
          </div>
        </div>

        {/* Product slots grid */}
        <div className="grid grid-cols-3 gap-2 px-4 py-3">
          {slots.map((slot, i) => (
            <motion.div
              key={slot.label}
              className="rounded-lg border border-white/10 flex flex-col items-center justify-center py-3 cursor-pointer relative overflow-hidden card-shine"
              style={{ background: "rgba(255,255,255,0.04)" }}
              whileHover={{
                scale: 1.08,
                borderColor: slot.color,
                boxShadow: `0 0 20px ${slot.color}60`,
                background: `${slot.color}15`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <div className="text-2xl mb-1">{slot.emoji}</div>
              <div className="text-xs font-mono text-white/50">{slot.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Coin slot & buttons area */}
        <div className="px-4 pb-3 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            {["🟢", "🔴", "🟡"].map((btn, i) => (
              <motion.div
                key={i}
                className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs cursor-pointer"
                style={{ background: "rgba(255,255,255,0.05)" }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                {btn}
              </motion.div>
            ))}
          </div>

          {/* Coin slot */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-1.5 rounded-full bg-gray-700 border border-gray-600" />
            <div className="text-xs text-white/30 font-mono">INSERT</div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-2 gap-1">
            {["1", "2", "3", "4"].map((k) => (
              <motion.div
                key={k}
                className="w-6 h-6 rounded border border-white/20 flex items-center justify-center text-xs text-white/50 cursor-pointer font-mono"
                style={{ background: "rgba(255,255,255,0.04)" }}
                whileHover={{ scale: 1.2, borderColor: "#FFE600", color: "#FFE600" }}
                whileTap={{ scale: 0.85 }}
              >
                {k}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Delivery tray */}
        <div className="mx-4 mb-4">
          <div
            className="rounded-xl h-10 border border-white/10 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div className="text-xs text-white/20 font-mono">▼ DELIVERY TRAY ▼</div>
          </div>
        </div>

        {/* Side accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400/50 via-orange-500/30 to-transparent rounded-l-3xl" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-yellow-400/50 via-orange-500/30 to-transparent rounded-r-3xl" />
      </motion.div>
    </div>
  );
}
