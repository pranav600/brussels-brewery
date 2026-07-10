"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "coffee" | "snacks";
  tags?: string[];
  icon: React.ReactNode;
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "coffee" | "snacks">("all");

  const menuItems: MenuItem[] = [
    // Coffee Items
    {
      id: "espresso",
      name: "Espresso",
      price: 3.00,
      description: "Rich, bold, and concentrated double shot of pure roasted coffee.",
      category: "coffee",
      tags: ["Strong", "Gluten-Free"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="4" strokeLinecap="round" />
          <line x1="10" y1="2" x2="10" y2="4" strokeLinecap="round" />
          <line x1="14" y1="2" x2="14" y2="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      price: 4.20,
      description: "Perfect harmony of espresso, velvet-steamed milk, and dense foam layers.",
      category: "coffee",
      tags: ["Classic"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <path d="M3 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 4 2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "latte",
      name: "Cafe Latte",
      price: 4.50,
      description: "Balanced shot of espresso topped with silky steamed milk and subtle microfoam.",
      category: "coffee",
      tags: ["Smooth"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 2h14v2H5V2z" strokeLinecap="round" />
          <path d="M6 4h12l-2 15a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3L6 4z" />
          <line x1="9" y1="8" x2="15" y2="8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "flatwhite",
      name: "Flat White",
      price: 4.40,
      description: "Smooth ristretto espresso shots topped with silky micro-foamed whole milk.",
      category: "coffee",
      tags: ["Double Shot"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <circle cx="10" cy="14" r="2" />
        </svg>
      )
    },
    {
      id: "coldbrew",
      name: "Cold Brew",
      price: 4.80,
      description: "Signature 18-hour slow-steeped iced coffee, sweet and exceptionally smooth.",
      category: "coffee",
      tags: ["Iced", "Sweet Finish"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h12l-1 18H7L6 3z" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      id: "brusselsspecial",
      name: "Brussels Signature",
      price: 5.20,
      description: "Premium brewed coffee infused with warm speculoos cookie butter syrup and fresh whip.",
      category: "coffee",
      tags: ["Chef's Choice", "Sweet"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
          <path d="M7 12l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    // Snack Items
    {
      id: "croissant",
      name: "Butter Croissant",
      price: 3.50,
      description: "Flaky, golden, and rich layers of laminated butter dough, baked fresh daily.",
      category: "snacks",
      tags: ["Freshly Baked"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C8 6.5 4 8 2 12c4 2 6 0 10-3 4 3 6 5 10 3-2-4-6-5.5-10-10z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 9c2-1 4-1.5 6-1.5s4 .5 6 1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "tart",
      name: "Warm Berry Tart",
      price: 4.80,
      description: "Crisp vanilla pastry shell filled with rich custard and fresh local seasonal berries.",
      category: "snacks",
      tags: ["Fruit Lover"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="8" />
          <circle cx="9" cy="10" r="1.5" />
          <circle cx="12" cy="11" r="1.5" />
          <circle cx="15" cy="10" r="1.5" />
          <circle cx="10" cy="14" r="1.5" />
          <circle cx="14" cy="14" r="1.5" />
        </svg>
      )
    },
    {
      id: "brownie",
      name: "Fudge Brownie",
      price: 4.00,
      description: "Decadent warm Belgian double chocolate fudge square brownie with sea salt flakes.",
      category: "snacks",
      tags: ["Chocolate", "Warm"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      )
    },
    {
      id: "toast",
      name: "Avocado Sourdough Toast",
      price: 7.50,
      description: "Fresh crushed Hass avocados, cherry tomatoes, and microgreens on toasted country sourdough.",
      category: "snacks",
      tags: ["Vegan", "Healthy Choice"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6z" />
          <circle cx="12" cy="11" r="3" />
          <path d="M9 16c1.5 1 4.5 1 6 0" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "cinnamon",
      name: "Cinnamon Glaze Roll",
      price: 4.20,
      description: "Soft warm brioche rolled with cinnamon brown sugar, covered in velvet cream cheese frosting.",
      category: "snacks",
      tags: ["Sweet", "Warm"],
      icon: (
        <svg className="w-8 h-8 text-[#4a3a2a]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 12c-2 0-3-1.5-3-3s1.5-3 3-3 3 1.5 3 3-1 3-3 3zm0 0c0 2 1.5 3 3 3s3-1.5 3-3" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#efebe4] text-[#4a3a2a] selection:bg-[#4a3a2a]/10 overflow-x-hidden relative flex flex-col justify-between">
      
      <Navbar />

      {/* Menu Main Content Container */}
      <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-10 py-12 w-full">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#4a3a2a]/70 hover:text-[#4a3a2a] transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Title Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-sans font-light text-[36px] sm:text-[48px] text-[#4a3a2a] leading-tight tracking-tight mb-4">
            Our Menu
          </h1>
          <p className="text-sm sm:text-base font-light text-[#4a3a2a]/70">
            Explore our curated selection of organic, single-origin coffees brewed to perfection, along with our freshly baked, delicious morning snacks.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center justify-center gap-3 mb-12 select-none">
          {[
            { id: "all", label: "All Items" },
            { id: "coffee", label: "Premium Coffee" },
            { id: "snacks", label: "Fresh Snacks" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[#4a3a2a] text-[#efebe4] shadow-md"
                  : "border border-[#4a3a2a]/15 text-[#4a3a2a] hover:bg-[#4a3a2a]/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid Items Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#4a3a2a]/5 hover:shadow-md transition-shadow flex flex-col justify-between relative group"
              >
                {/* Visual Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-xl bg-[#efebe4]/40 border border-[#4a3a2a]/10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                      {item.icon}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 justify-end max-w-[150px]">
                      {item.tags?.map((tag) => (
                        <span 
                          key={tag} 
                          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            tag === "Chef's Choice" 
                              ? "bg-[#4a3a2a] text-[#efebe4]" 
                              : "bg-[#efebe4]/60 text-[#4a3a2a]/80"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-sans font-semibold text-lg text-[#4a3a2a] mb-2 group-hover:text-[#5d4936] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-light text-[#4a3a2a]/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row price */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#4a3a2a]/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a3a2a]/50">
                    Price
                  </span>
                  <span className="font-sans font-bold text-lg text-[#4a3a2a]">
                    €{item.price.toFixed(2)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </main>

      <Footer />

    </div>
  );
}
