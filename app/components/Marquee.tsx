"use client";

const items = [
  "🍫 CHOCOLATE", "🥤 COLD DRINKS", "🍬 CANDY", "🥜 TRAIL MIX",
  "⚡ ENERGY DRINKS", "🍪 COOKIES", "🥨 PRETZELS", "☕ COLD BREW",
  "🌾 GRANOLA BARS", "💧 SPARKLING WATER", "🐻 GUMMY BEARS", "🥔 CHIPS",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="py-4 overflow-hidden border-y"
      style={{
        borderColor: "rgba(255,230,0,0.15)",
        background: "rgba(255,230,0,0.03)",
      }}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-8 text-sm font-bold tracking-widest whitespace-nowrap"
            style={{ color: i % 3 === 0 ? "#FFE600" : i % 3 === 1 ? "#FF6B00" : "rgba(255,255,255,0.4)" }}
          >
            {item}
            <span className="text-white/10 ml-8">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
