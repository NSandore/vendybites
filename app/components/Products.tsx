"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Snacks", "Drinks", "Candy", "Healthy"];

const products = [
  {
    name: "Kettle Chips",
    category: "Snacks",
    price: "$1.75",
    emoji: "🥔",
    color: "#FF6B00",
    tag: "BESTSELLER",
    desc: "Hand-cooked kettle style, extra crunch",
  },
  {
    name: "Energy Blast",
    category: "Drinks",
    price: "$2.50",
    emoji: "⚡",
    color: "#FFE600",
    tag: "NEW",
    desc: "150mg caffeine, zero sugar",
  },
  {
    name: "Choco Crunch",
    category: "Candy",
    price: "$1.25",
    emoji: "🍫",
    color: "#8B4513",
    tag: null,
    desc: "Rich milk chocolate with rice crisps",
  },
  {
    name: "Sparkling Water",
    category: "Drinks",
    price: "$1.50",
    emoji: "💧",
    color: "#4ECDC4",
    tag: "HEALTHY",
    desc: "Natural flavors, zero calories",
  },
  {
    name: "Trail Mix",
    category: "Healthy",
    price: "$2.00",
    emoji: "🥜",
    color: "#A8E6CF",
    tag: "HEALTHY",
    desc: "Nuts, seeds, and dried berries",
  },
  {
    name: "Gummy Bears",
    category: "Candy",
    price: "$1.00",
    emoji: "🐻",
    color: "#FF0080",
    tag: null,
    desc: "Assorted fruit flavors, 5oz bag",
  },
  {
    name: "Pretzels",
    category: "Snacks",
    price: "$1.25",
    emoji: "🥨",
    color: "#D4A017",
    tag: null,
    desc: "Salted sourdough pretzels",
  },
  {
    name: "Cold Brew",
    category: "Drinks",
    price: "$3.00",
    emoji: "☕",
    color: "#6B3A2A",
    tag: "PREMIUM",
    desc: "Small batch, 12hr cold steeped",
  },
  {
    name: "Granola Bar",
    category: "Healthy",
    price: "$1.75",
    emoji: "🌾",
    color: "#7CB518",
    tag: "HEALTHY",
    desc: "Oats, honey, and dark chocolate",
  },
];

const tagColors: Record<string, string> = {
  BESTSELLER: "#FF6B00",
  NEW: "#FFE600",
  HEALTHY: "#4ECDC4",
  PREMIUM: "#8B00FF",
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="products" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
            style={{ background: "rgba(255,230,0,0.1)", color: "#FFE600" }}
          >
            MENU
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            What&apos;s Inside?
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Curated selection of premium snacks and beverages, always fresh and ready.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeCategory === cat ? "#FFE600" : "rgba(255,255,255,0.05)",
                color: activeCategory === cat ? "#000" : "rgba(255,255,255,0.5)",
                border: `1px solid ${activeCategory === cat ? "#FFE600" : "rgba(255,255,255,0.1)"}`,
                boxShadow: activeCategory === cat ? "0 0 20px rgba(255,230,0,0.3)" : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Products grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="card-shine rounded-2xl border border-white/5 p-6 group cursor-pointer relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
              whileHover={{
                scale: 1.03,
                borderColor: `${product.color}50`,
                boxShadow: `0 0 30px ${product.color}20`,
                background: `${product.color}08`,
              }}
            >
              {/* Tag */}
              {product.tag && (
                <div
                  className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    background: `${tagColors[product.tag]}20`,
                    color: tagColors[product.tag],
                    border: `1px solid ${tagColors[product.tag]}40`,
                  }}
                >
                  {product.tag}
                </div>
              )}

              {/* Emoji icon */}
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product.emoji}
              </motion.div>

              {/* Product info */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-sm text-white/40">{product.desc}</p>
              </div>

              {/* Price + add button */}
              <div className="flex items-center justify-between mt-5">
                <span
                  className="text-2xl font-black"
                  style={{ color: product.color }}
                >
                  {product.price}
                </span>
                <motion.button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
                    background: `${product.color}20`,
                    border: `1px solid ${product.color}40`,
                    color: product.color,
                  }}
                  whileHover={{
                    scale: 1.15,
                    background: product.color,
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.85 }}
                >
                  +
                </motion.button>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
