"use client";

import { motion } from "framer-motion";

const locations = [
  { name: "Downtown HQ", address: "123 Main St", status: "online", stock: 94 },
  { name: "Central Gym", address: "456 Fitness Ave", status: "online", stock: 78 },
  { name: "Tech Campus", address: "789 Innovation Dr", status: "online", stock: 100 },
  { name: "City Library", address: "321 Reading Blvd", status: "restocking", stock: 15 },
  { name: "Airport Terminal B", address: "Gate 12, Terminal B", status: "online", stock: 62 },
  { name: "Riverside Park", address: "88 Riverside Walk", status: "online", stock: 87 },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
            style={{ background: "rgba(255,0,128,0.1)", color: "#FF0080" }}
          >
            LOCATIONS
          </div>
          <h2 className="text-5xl font-black text-white mb-4">Find Us Near You</h2>
          <p className="text-white/40 text-lg">Real-time machine status and inventory.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              className="rounded-2xl border border-white/5 p-6 group cursor-pointer relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                borderColor: "rgba(255,230,0,0.3)",
                boxShadow: "0 0 30px rgba(255,230,0,0.08)",
              }}
            >
              {/* Status indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      loc.status === "online" ? "bg-green-400 animate-pulse" : "bg-yellow-400"
                    }`}
                  />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    loc.status === "online" ? "text-green-400" : "text-yellow-400"
                  }`}>
                    {loc.status}
                  </span>
                </div>
                <span className="text-xs text-white/30 font-mono">#{String(i + 1).padStart(3, "0")}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{loc.name}</h3>
              <p className="text-sm text-white/40 mb-5">📍 {loc.address}</p>

              {/* Stock bar */}
              <div>
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Stock Level</span>
                  <span className={loc.stock > 50 ? "text-green-400" : "text-yellow-400"}>
                    {loc.stock}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: loc.stock > 50
                        ? "linear-gradient(90deg, #4ECDC4, #7CB518)"
                        : "linear-gradient(90deg, #FF6B00, #FFE600)",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${loc.stock}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
