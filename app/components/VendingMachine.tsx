"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MINT = "#aaf0ee";
const AMBER = "#fed383";

const slots = [
  { id: "A1", emoji: "🍫", name: "Choco Bar",     price: "$1.25", color: AMBER },
  { id: "A2", emoji: "🥤", name: "Sparkling Soda",price: "$1.75", color: MINT },
  { id: "A3", emoji: "🍬", name: "Candy Mix",      price: "$1.00", color: "#FF9DE2" },
  { id: "B1", emoji: "🥜", name: "Trail Mix",      price: "$2.00", color: AMBER },
  { id: "B2", emoji: "⚡", name: "Energy Drink",   price: "$2.50", color: MINT },
  { id: "B3", emoji: "🍪", name: "Cookie Pack",    price: "$1.50", color: "#C9B8FF" },
  { id: "C1", emoji: "🥨", name: "Pretzels",       price: "$1.25", color: AMBER },
  { id: "C2", emoji: "🌾", name: "Granola Bar",    price: "$1.75", color: MINT },
  { id: "C3", emoji: "☕", name: "Cold Brew",       price: "$3.00", color: "#C9B8FF" },
];

type Phase = "idle" | "selected" | "dispensing" | "done";

export default function VendingMachine() {
  const [selected, setSelected] = useState<string | null>(null);
  const [phase, setPhase]       = useState<Phase>("idle");
  const [trayItem, setTrayItem] = useState<(typeof slots)[0] | null>(null);
  const [trayKey, setTrayKey]   = useState(0);

  function pickSlot(slot: (typeof slots)[0]) {
    if (phase === "dispensing") return;
    setSelected(slot.id);
    setPhase("selected");
  }

  function dispense() {
    if (phase !== "selected" || !selected) return;
    const slot = slots.find((s) => s.id === selected)!;
    setPhase("dispensing");
    setTimeout(() => {
      setTrayItem(slot);
      setTrayKey((k) => k + 1);
      setPhase("done");
    }, 900);
  }

  function reset() {
    setSelected(null);
    setPhase("idle");
    setTrayItem(null);
  }

  const activeSlot = slots.find((s) => s.id === selected);

  const displayLine1 =
    phase === "idle"       ? "VENDYBITES"        :
    phase === "selected"   ? activeSlot!.id + "  " + activeSlot!.name :
    phase === "dispensing" ? "DISPENSING..."     :
                             "ENJOY! 😊";

  const displayLine2 =
    phase === "idle"       ? "● SELECT AN ITEM ●" :
    phase === "selected"   ? activeSlot!.price + "  — PRESS VEND" :
    phase === "dispensing" ? "PLEASE WAIT..."     :
                             "THANK YOU!";

  const displayColor =
    phase === "done"       ? MINT  :
    phase === "dispensing" ? AMBER :
    phase === "selected"   ? "#fff" :
                             MINT;

  return (
    <div className="relative float select-none">
      {/* Glow behind machine */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${MINT} 0%, ${AMBER} 50%, transparent 80%)` }}
      />

      {/* Machine body */}
      <motion.div
        className="relative rounded-3xl border-2 overflow-hidden"
        style={{
          width: 300,
          background: "linear-gradient(180deg, #0d1f2d 0%, #0a1520 60%, #06101a 100%)",
          borderColor: `${MINT}40`,
          boxShadow: `0 0 40px ${MINT}25, inset 0 1px 0 rgba(255,255,255,0.07)`,
        }}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* ── LCD Display ── */}
        <div className="px-4 pt-4 pb-2">
          <div
            className="rounded-xl p-3 border scanlines relative overflow-hidden"
            style={{ background: "#030d12", borderColor: `${MINT}25` }}
          >
            <motion.div
              key={displayLine1}
              className="text-sm font-bold tracking-widest flicker truncate"
              style={{ color: displayColor, fontFamily: "monospace" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {displayLine1}
            </motion.div>
            <motion.div
              key={displayLine2}
              className="text-xs mt-1 font-mono truncate"
              style={{ color: `${displayColor}99` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {displayLine2}
            </motion.div>
          </div>
        </div>

        {/* ── Product slots ── */}
        <div className="grid grid-cols-3 gap-2 px-4 py-2">
          {slots.map((slot, i) => {
            const isActive   = selected === slot.id;
            const isDispensed = phase === "done" && isActive;
            return (
              <motion.div
                key={slot.id}
                className={`rounded-xl border flex flex-col items-center justify-center py-3 cursor-pointer relative overflow-hidden${isActive ? " slot-active" : ""}`}
                style={{
                  background: isActive ? `${slot.color}18` : "rgba(255,255,255,0.03)",
                  borderColor: isActive ? slot.color : "rgba(255,255,255,0.08)",
                  opacity: isDispensed ? 0.35 : 1,
                }}
                whileHover={phase !== "dispensing" ? { scale: 1.07, borderColor: slot.color, background: `${slot.color}14` } : {}}
                whileTap={phase !== "dispensing" ? { scale: 0.94 } : {}}
                onClick={() => pickSlot(slot)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: isDispensed ? 0.35 : 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.35 }}
              >
                <motion.div
                  className="text-2xl mb-0.5"
                  animate={isActive && phase === "dispensing" ? { y: [0, 60], opacity: [1, 0] } : {}}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  {slot.emoji}
                </motion.div>
                <div className="text-xs font-mono" style={{ color: isActive ? slot.color : "rgba(255,255,255,0.35)" }}>
                  {slot.id}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Controls row ── */}
        <div className="px-4 pb-3 flex items-center justify-between mt-1">
          {/* LED indicators */}
          <div className="flex flex-col gap-1.5">
            {[MINT, AMBER, "#FF9DE2"].map((c, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: c, boxShadow: `0 0 6px ${c}` }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
              />
            ))}
          </div>

          {/* VEND button */}
          <motion.button
            className="px-5 py-2 rounded-xl font-bold text-sm tracking-widest"
            style={{
              background: phase === "selected"
                ? `linear-gradient(135deg, ${MINT}, ${AMBER})`
                : "rgba(255,255,255,0.06)",
              color: phase === "selected" ? "#0A0A0F" : "rgba(255,255,255,0.25)",
              border: `1px solid ${phase === "selected" ? MINT : "rgba(255,255,255,0.1)"}`,
              cursor: phase === "selected" ? "pointer" : "default",
              boxShadow: phase === "selected" ? `0 0 20px ${MINT}60` : "none",
            }}
            whileHover={phase === "selected" ? { scale: 1.05 } : {}}
            whileTap={phase === "selected" ? { scale: 0.95 } : {}}
            onClick={dispense}
          >
            VEND
          </motion.button>

          {/* Coin slot */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.07)" }} />
            <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>TAP</div>
          </div>
        </div>

        {/* ── Tray ── */}
        <div className="mx-4 mb-4">
          <div
            className="rounded-2xl border relative overflow-hidden flex items-center justify-center"
            style={{
              height: 64,
              background: "rgba(0,0,0,0.5)",
              borderColor: `${MINT}20`,
            }}
          >
            <AnimatePresence>
              {trayItem && (
                <motion.div
                  key={trayKey}
                  className="flex flex-col items-center dispense-bounce"
                  initial={{ scale: 0, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <div className="text-3xl">{trayItem.emoji}</div>
                  <div className="text-xs font-bold mt-0.5" style={{ color: MINT }}>
                    {trayItem.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {!trayItem && (
              <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
                ▼ COLLECTION TRAY ▼
              </div>
            )}
          </div>
        </div>

        {/* Reset button (shown after dispense) */}
        <AnimatePresence>
          {phase === "done" && (
            <motion.div
              className="px-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <button
                className="w-full py-2 rounded-xl text-xs font-bold tracking-widest"
                style={{
                  background: "rgba(170,240,238,0.08)",
                  border: `1px solid ${MINT}40`,
                  color: MINT,
                }}
                onClick={reset}
              >
                ↩ VEND ANOTHER
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Side accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full rounded-l-3xl" style={{ background: `linear-gradient(to bottom, ${MINT}80, ${AMBER}50, transparent)` }} />
        <div className="absolute top-0 right-0 w-1 h-full rounded-r-3xl" style={{ background: `linear-gradient(to bottom, ${MINT}80, ${AMBER}50, transparent)` }} />
      </motion.div>
    </div>
  );
}
