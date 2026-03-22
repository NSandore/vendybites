"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-16"
      style={{ borderColor: "rgba(255,230,0,0.1)", background: "rgba(255,255,255,0.01)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black"
                style={{
                  background: "linear-gradient(135deg, #FFE600, #FF6B00)",
                  boxShadow: "0 0 20px rgba(255,230,0,0.3)",
                }}
              >
                V
              </div>
              <span className="font-black text-2xl">
                Vendy<span style={{ color: "#FFE600" }}>Bites</span>
              </span>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Premium vending machines for modern spaces. Fresh snacks, cashless payments, always stocked.
            </p>
            <div className="flex gap-3">
              {["𝕏", "📘", "📸", "▶"].map((icon, i) => (
                <motion.div
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm cursor-pointer border border-white/10"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#FFE600",
                    background: "rgba(255,230,0,0.1)",
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Products",
              links: ["Snacks", "Beverages", "Candy", "Healthy Options", "New Arrivals"],
            },
            {
              title: "Company",
              links: ["About Us", "Locations", "Careers", "Press", "Blog"],
            },
            {
              title: "Support",
              links: ["Help Center", "Report Issue", "Contact", "Refunds", "Machine Request"],
            },
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm text-white/30 hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/20 text-sm">
            © 2026 VendyBites. All rights reserved.
          </p>
          <p className="text-white/20 text-sm">
            Made with <span style={{ color: "#FF0080" }}>♥</span> and{" "}
            <span style={{ color: "#FFE600" }}>snacks</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
