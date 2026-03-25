"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const machineTypes = [
  {
    id: "snacks",
    label: "Snacks & Drinks",
    emoji: "🍿",
    tagline: "Offices, gyms, schools, public spaces",
    color: MINT,
    products: [
      { emoji: "🥔", name: "Kettle Chips",      price: "$1.75", tag: "BESTSELLER" },
      { emoji: "⚡", name: "Energy Blast",       price: "$2.50", tag: "NEW"        },
      { emoji: "🍫", name: "Choco Crunch",       price: "$1.25", tag: null         },
      { emoji: "💧", name: "Sparkling Water",    price: "$1.50", tag: "HEALTHY"   },
      { emoji: "🥜", name: "Trail Mix",          price: "$2.00", tag: "HEALTHY"   },
      { emoji: "🐻", name: "Gummy Bears",        price: "$1.00", tag: null         },
      { emoji: "🥨", name: "Pretzels",           price: "$1.25", tag: null         },
      { emoji: "☕", name: "Cold Brew",           price: "$3.00", tag: "PREMIUM"   },
      { emoji: "🌾", name: "Granola Bar",        price: "$1.75", tag: "HEALTHY"   },
    ],
  },
  {
    id: "beauty",
    label: "Beauty & Wellness",
    emoji: "💄",
    tagline: "Malls, airports, hotels, event venues",
    color: "#FF9DE2",
    products: [
      { emoji: "👁️", name: "Press-On Lash Sets",       price: "$8.00", tag: "TRENDING" },
      { emoji: "🌸", name: "Mini Perfume Rollers",      price: "$6.00", tag: null        },
      { emoji: "💅", name: "Nail Polish & Wraps",       price: "$5.00", tag: "NEW"       },
      { emoji: "✨", name: "Lash Glue Pens",            price: "$4.50", tag: null        },
      { emoji: "💧", name: "Hydrogel Eye Patches",      price: "$5.50", tag: "TRENDING" },
      { emoji: "🧴", name: "Travel Moisturizer",        price: "$7.00", tag: null        },
      { emoji: "💋", name: "Tinted Lip Balm",           price: "$3.50", tag: null        },
      { emoji: "🌟", name: "Highlighter Stick",         price: "$6.50", tag: "PREMIUM"  },
      { emoji: "🪞", name: "Mini Blotting Papers",      price: "$2.50", tag: null        },
    ],
  },
  {
    id: "ramen",
    label: "Ramen & Hot Foods",
    emoji: "🍜",
    tagline: "Airports, train stations, college campuses",
    color: AMBER,
    products: [
      { emoji: "🍜", name: "Tonkotsu Ramen Bowl",    price: "$8.50", tag: "FAN FAVE"  },
      { emoji: "🌶️", name: "Spicy Miso Ramen Kit",  price: "$7.50", tag: "HOT"       },
      { emoji: "🫙", name: "Shoyu Ramen Cup",         price: "$6.00", tag: null         },
      { emoji: "🥩", name: "Chashu Pork Topping",    price: "$3.50", tag: "PREMIUM"   },
      { emoji: "🧂", name: "Ramen Seasoning Pack",   price: "$2.00", tag: null         },
      { emoji: "🥚", name: "Marinated Soft Egg",     price: "$2.50", tag: null         },
      { emoji: "🌿", name: "Nori & Bamboo Shoots",   price: "$2.00", tag: null         },
      { emoji: "🍱", name: "Side Rice Bowl",         price: "$4.50", tag: null         },
      { emoji: "🧋", name: "Matcha Milk Tea",        price: "$5.00", tag: "NEW"        },
    ],
  },
  {
    id: "custom",
    label: "Custom Machine",
    emoji: "🎛️",
    tagline: "You imagine it — we build it",
    color: "#C9B8FF",
    products: [
      { emoji: "🩺", name: "Healthcare Supplies",   price: "Custom", tag: null },
      { emoji: "📱", name: "Phone Accessories",     price: "Custom", tag: null },
      { emoji: "🎮", name: "Gaming Gear",           price: "Custom", tag: null },
      { emoji: "🧸", name: "Toys & Collectibles",  price: "Custom", tag: null },
      { emoji: "🌿", name: "CBD & Wellness",        price: "Custom", tag: null },
      { emoji: "🖨️", name: "Office Supplies",      price: "Custom", tag: null },
      { emoji: "🏋️", name: "Fitness Supplements",  price: "Custom", tag: null },
      { emoji: "🐾", name: "Pet Snacks & Toys",    price: "Custom", tag: null },
      { emoji: "✏️", name: "School Supplies",      price: "Custom", tag: null },
    ],
  },
];

const tagColors: Record<string, string> = {
  BESTSELLER: AMBER,
  NEW:        MINT,
  HEALTHY:    MINT,
  PREMIUM:    "#C9B8FF",
  TRENDING:   "#FF9DE2",
  HOT:        "#FF6B6B",
  "FAN FAVE": AMBER,
};

export default function Products() {
  const [activeMachine, setActiveMachine] = useState(machineTypes[0].id);
  const machine = machineTypes.find((m) => m.id === activeMachine)!;

  return (
    <section id="products" className="py-24 px-6 relative">
      {/* Background accent matching active machine */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${machine.color}06 0%, transparent 65%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
            style={{ background: `${MINT}15`, color: MINT }}
          >
            OUR MACHINES
          </div>
          <h2 className="text-5xl font-black text-white mb-4">Any Machine. Any Product.</h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            We&apos;re not limited to snacks. From beauty to ramen to fully custom builds —
            if your customers want it, we stock it.
          </p>
        </motion.div>

        {/* Machine type tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {machineTypes.map((mt) => {
            const isActive = activeMachine === mt.id;
            return (
              <motion.button
                key={mt.id}
                onClick={() => setActiveMachine(mt.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background:  isActive ? mt.color          : "rgba(255,255,255,0.05)",
                  color:       isActive ? "#0A0A0F"         : "rgba(255,255,255,0.5)",
                  border:      `1px solid ${isActive ? mt.color : "rgba(255,255,255,0.1)"}`,
                  boxShadow:   isActive ? `0 0 20px ${mt.color}60` : "none",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{mt.emoji}</span>
                <span>{mt.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Machine info banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={machine.id}
            className="flex items-center gap-4 mb-8 px-5 py-3 rounded-2xl border mx-auto w-fit"
            style={{ background: `${machine.color}10`, borderColor: `${machine.color}30` }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-2xl">{machine.emoji}</span>
            <div>
              <div className="font-bold text-white text-sm">{machine.label}</div>
              <div className="text-xs" style={{ color: `${machine.color}cc` }}>{machine.tagline}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={machine.id}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {machine.products.map((product, i) => (
              <motion.div
                key={product.name}
                className="card-shine rounded-2xl border border-white/5 p-5 group cursor-pointer relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: `${machine.color}50`,
                  boxShadow: `0 0 25px ${machine.color}18`,
                  background: `${machine.color}07`,
                }}
              >
                {product.tag && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{
                      background: `${tagColors[product.tag]}20`,
                      color:       tagColors[product.tag],
                      border:      `1px solid ${tagColors[product.tag]}40`,
                    }}
                  >
                    {product.tag}
                  </div>
                )}

                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {product.emoji}
                </motion.div>

                <h3 className="text-base font-bold text-white mb-1">{product.name}</h3>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-black" style={{ color: machine.color }}>
                    {product.price}
                  </span>
                  <motion.button
                    className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold"
                    style={{
                      background: `${machine.color}20`,
                      border:     `1px solid ${machine.color}40`,
                      color:       machine.color,
                    }}
                    whileHover={{ scale: 1.15, background: machine.color, color: "#0A0A0F" }}
                    whileTap={{ scale: 0.85 }}
                  >
                    +
                  </motion.button>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${machine.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom CTA */}
        {activeMachine === "custom" && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/40 mb-4">Don&apos;t see your idea? We love a challenge.</p>
            <motion.a
              href="#request"
              className="inline-block px-8 py-3 rounded-2xl font-bold text-sm"
              style={{
                background: "linear-gradient(135deg, #C9B8FF, #aaf0ee)",
                color: "#0A0A0F",
                boxShadow: "0 0 25px #C9B8FF50",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit a Custom Request →
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
