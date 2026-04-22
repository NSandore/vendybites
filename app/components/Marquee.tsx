"use client";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const items = [
  "Connecticut Local",
  "Brand New Machines",
  "AI-Powered Inventory",
  "Self-Vend Technology",
  "Card + Cash + Tap Accepted",
  "Fairfield County",
  "Hartford",
  "New Haven",
  "Zero Hassle Setup",
  "Direct Founder Support",
  "Food + Beverages",
  "Beauty + Wellness",
  "Specialty Machines",
  "No Call Centers",
  "Real People. Real Support.",
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
            className="flex items-center gap-2 px-8 text-xs font-bold tracking-widest whitespace-nowrap uppercase"
            style={{ color: i % 3 === 0 ? MINT : i % 3 === 1 ? AMBER : "rgba(255,255,255,0.3)" }}
          >
            {item}
            <span className="text-white/10 ml-8">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
