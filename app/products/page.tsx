"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

const machineTypes = [
  {
    id: "snacks",   label: "Snacks & Drinks",    emoji: "🍿", color: MINT,
    tagline: "Offices, gyms, schools, public spaces",
    description: "The classic VendyBites experience. Everything from kettle chips and cold brew to energy drinks and trail mix. Always rotating with the latest trending snacks.",
    products: [
      { emoji: "🥔", name: "Kettle Chips",     price: "$1.75", tag: "BESTSELLER" },
      { emoji: "⚡", name: "Energy Blast",      price: "$2.50", tag: "NEW"        },
      { emoji: "🍫", name: "Choco Crunch",      price: "$1.25", tag: null         },
      { emoji: "💧", name: "Sparkling Water",   price: "$1.50", tag: "HEALTHY"   },
      { emoji: "🥜", name: "Trail Mix",         price: "$2.00", tag: "HEALTHY"   },
      { emoji: "🐻", name: "Gummy Bears",       price: "$1.00", tag: null         },
      { emoji: "🥨", name: "Pretzels",          price: "$1.25", tag: null         },
      { emoji: "☕", name: "Cold Brew",          price: "$3.00", tag: "PREMIUM"   },
      { emoji: "🌾", name: "Granola Bar",       price: "$1.75", tag: "HEALTHY"   },
      { emoji: "🥤", name: "Sparkling Soda",    price: "$1.75", tag: null         },
      { emoji: "🍬", name: "Candy Mix",         price: "$1.00", tag: null         },
      { emoji: "🫐", name: "Blueberry Muffin",  price: "$2.25", tag: "NEW"        },
    ],
  },
  {
    id: "beauty",   label: "Beauty & Wellness",  emoji: "💄", color: "#FF9DE2",
    tagline: "Malls, airports, hotels, event venues",
    description: "The on-the-go beauty essential. Perfect for airport layovers, hotel lobbies, and shopping malls. Everything your customer needs to look and feel great — instantly.",
    products: [
      { emoji: "👁️", name: "Press-On Lash Sets",     price: "$8.00", tag: "TRENDING" },
      { emoji: "🌸", name: "Mini Perfume Rollers",    price: "$6.00", tag: null        },
      { emoji: "💅", name: "Nail Polish & Wraps",     price: "$5.00", tag: "NEW"       },
      { emoji: "✨", name: "Lash Glue Pens",          price: "$4.50", tag: null        },
      { emoji: "💧", name: "Hydrogel Eye Patches",    price: "$5.50", tag: "TRENDING" },
      { emoji: "🧴", name: "Travel Moisturizer",      price: "$7.00", tag: null        },
      { emoji: "💋", name: "Tinted Lip Balm",         price: "$3.50", tag: null        },
      { emoji: "🌟", name: "Highlighter Stick",       price: "$6.50", tag: "PREMIUM"  },
      { emoji: "🪞", name: "Mini Blotting Papers",    price: "$2.50", tag: null        },
      { emoji: "🧹", name: "Makeup Remover Wipes",    price: "$3.00", tag: null        },
      { emoji: "🌿", name: "Facial Mist Spray",       price: "$5.00", tag: "NEW"       },
      { emoji: "🫧", name: "Cleansing Foam Travel",   price: "$4.00", tag: null        },
    ],
  },
  {
    id: "ramen",    label: "Ramen & Hot Foods",  emoji: "🍜", color: AMBER,
    tagline: "Airports, train stations, college campuses",
    description: "Restaurant-quality hot food on demand. Each machine includes a built-in heating element. From authentic tonkotsu to spicy miso — a full meal in under 3 minutes.",
    products: [
      { emoji: "🍜", name: "Tonkotsu Ramen Bowl",   price: "$8.50", tag: "FAN FAVE"  },
      { emoji: "🌶️", name: "Spicy Miso Ramen Kit", price: "$7.50", tag: "HOT"       },
      { emoji: "🫙", name: "Shoyu Ramen Cup",        price: "$6.00", tag: null         },
      { emoji: "🥩", name: "Chashu Pork Topping",   price: "$3.50", tag: "PREMIUM"   },
      { emoji: "🧂", name: "Ramen Seasoning Pack",  price: "$2.00", tag: null         },
      { emoji: "🥚", name: "Marinated Soft Egg",    price: "$2.50", tag: null         },
      { emoji: "🌿", name: "Nori & Bamboo Shoots",  price: "$2.00", tag: null         },
      { emoji: "🍱", name: "Side Rice Bowl",        price: "$4.50", tag: null         },
      { emoji: "🧋", name: "Matcha Milk Tea",       price: "$5.00", tag: "NEW"        },
      { emoji: "🥟", name: "Frozen Gyoza Pack",     price: "$5.50", tag: "TRENDING"  },
      { emoji: "🫚", name: "Sesame Oil Drizzle",    price: "$1.50", tag: null         },
      { emoji: "🍙", name: "Onigiri Rice Ball",     price: "$3.50", tag: "NEW"        },
    ],
  },
  {
    id: "custom",   label: "Custom Machine",     emoji: "🎛️", color: "#C9B8FF",
    tagline: "Any product. Any space. Any vision.",
    description: "The sky is the limit. We've built machines for healthcare clinics, gaming lounges, pet shops, and more. If your customers want it, we can put it in a machine.",
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
      { emoji: "🎵", name: "Music Accessories",    price: "Custom", tag: null },
      { emoji: "🧘", name: "Wellness & Calm",      price: "Custom", tag: null },
      { emoji: "📚", name: "Books & Magazines",    price: "Custom", tag: null },
    ],
  },
];

const tagColors: Record<string, string> = {
  BESTSELLER: AMBER, NEW: MINT, HEALTHY: MINT,
  PREMIUM: "#C9B8FF", TRENDING: "#FF9DE2",
  HOT: "#FF6B6B", "FAN FAVE": AMBER,
};

export default function ProductsPage() {
  const [activeMachine, setActiveMachine] = useState(machineTypes[0].id);
  const machine = machineTypes.find((m) => m.id === activeMachine)!;

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden grid-pattern">
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${machine.color}10 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${MINT}15`, color: MINT }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            OUR MACHINES
          </motion.div>
          <motion.h1
            className="text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white">Any Machine.</span>
            <span className="block glow-mint" style={{ color: MINT }}>Any Product.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/40 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            From gummy bears to glow serums, tonkotsu ramen to gaming controllers —
            browse our catalog or request something entirely new.
          </motion.p>
        </div>
      </section>

      {/* ── Machine type tabs ── */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Tab pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {machineTypes.map((mt) => {
              const active = activeMachine === mt.id;
              return (
                <motion.button
                  key={mt.id}
                  onClick={() => setActiveMachine(mt.id)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all text-sm"
                  style={{
                    background:  active ? mt.color          : "rgba(255,255,255,0.05)",
                    color:       active ? "#0A0A0F"         : "rgba(255,255,255,0.5)",
                    border:      `1px solid ${active ? mt.color : "rgba(255,255,255,0.1)"}`,
                    boxShadow:   active ? `0 0 24px ${mt.color}70` : "none",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base">{mt.emoji}</span>
                  <span>{mt.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Machine info card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={machine.id}
              className="rounded-2xl border p-6 mb-10 flex flex-col md:flex-row md:items-center gap-4"
              style={{ background: `${machine.color}08`, borderColor: `${machine.color}25` }}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.25 }}
            >
              <div className="text-5xl">{machine.emoji}</div>
              <div className="flex-1">
                <div className="font-black text-white text-xl mb-1">{machine.label}</div>
                <div className="text-sm mb-2" style={{ color: `${machine.color}cc` }}>{machine.tagline}</div>
                <p className="text-white/40 text-sm leading-relaxed">{machine.description}</p>
              </div>
              {machine.id === "custom" && (
                <Link href="/request">
                  <motion.button
                    className="px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap"
                    style={{ background: `linear-gradient(135deg, #C9B8FF, ${MINT})`, color: "#0A0A0F" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Custom →
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Products grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={machine.id}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            >
              {machine.products.map((product, i) => (
                <motion.div
                  key={product.name}
                  className="card-shine rounded-2xl border border-white/5 p-5 group cursor-pointer relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.25 }}
                  whileHover={{
                    scale: 1.04,
                    borderColor: `${machine.color}50`,
                    boxShadow: `0 0 28px ${machine.color}18`,
                    background: `${machine.color}07`,
                  }}
                >
                  {product.tag && (
                    <div
                      className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold"
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
                    whileHover={{ scale: 1.25, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.emoji}
                  </motion.div>
                  <h3 className="text-sm font-bold text-white mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black" style={{ color: machine.color }}>{product.price}</span>
                    <motion.button
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: `${machine.color}20`, border: `1px solid ${machine.color}40`, color: machine.color }}
                      whileHover={{ scale: 1.2, background: machine.color, color: "#0A0A0F" }}
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
        </div>
      </section>

      {/* ── Custom CTA ── */}
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 100%, ${MINT}07 0%, transparent 60%)` }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">🎛️</div>
            <h2 className="text-4xl font-black text-white mb-4">Don&apos;t See Your Idea?</h2>
            <p className="text-white/40 mb-8">We love building machines for categories we&apos;ve never done before. Tell us what you need.</p>
            <Link href="/request">
              <motion.button
                className="px-10 py-4 rounded-2xl font-bold text-lg"
                style={{ background: `linear-gradient(135deg, ${MINT}, ${AMBER})`, color: "#0A0A0F", boxShadow: `0 0 40px ${MINT}50` }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 60px ${MINT}80` }}
                whileTap={{ scale: 0.95 }}
              >
                Submit a Custom Request →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
