"use client";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const items = [
  "🍿 SNACKS & DRINKS", "💄 BEAUTY & LASH", "🍜 RAMEN & HOT FOODS",
  "🤖 AI TREND TECH", "💳 CASH · CARD · TAP", "🎛️ FULLY CUSTOM",
  "🥤 COLD DRINKS", "✨ PRESS-ON LASHES", "🥜 TRAIL MIX",
  "📱 TAP TO PAY", "🌶️ SPICY MISO RAMEN", "♻️ ECO FRIENDLY",
  "🐻 GUMMY BEARS", "💅 NAIL WRAPS", "☕ COLD BREW", "🤝 24/7 SUPPORT",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="py-4 overflow-hidden border-y"
      style={{ borderColor: `${MINT}20`, background: `${MINT}05` }}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-8 text-sm font-bold tracking-widest whitespace-nowrap"
            style={{ color: i % 3 === 0 ? MINT : i % 3 === 1 ? AMBER : "rgba(255,255,255,0.35)" }}
          >
            {item}
            <span className="text-white/10 ml-8">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
