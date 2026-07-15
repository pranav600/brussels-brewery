"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Category structure mapping
const CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "croffle", label: "Croffle" },
  { id: "bingsu", label: "Bingsu" },
  { id: "coffee", label: "Coffee & Latte" },
  { id: "matcha", label: "Matcha Series" },
  { id: "tea", label: "Tea & Chocolate" },
  { id: "sparkling-smoothie", label: "Refreshers & Smoothies" },
];

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tags?: string[];
}

interface MenuSection {
  title: string;
  subtitle?: string;
  category: string;
  items: MenuItem[];
  note?: string;
  image?: string;
}

const menuSections: MenuSection[] = [
  // ── CROFFLE (CROISSANT WAFFLE) ──
  {
    title: "Croffle",
    subtitle: "Croissant Waffle",
    category: "croffle",
    image: "/images/croffle.jpg",
    note: "EXTRA: Add Ice Cream +$3.00 | Fruit Toppings (Banana, Mango) +$2.00",
    items: [
      {
        name: "Vanilla",
        price: "11.95",
        description:
          "Croffle, Vanilla ice cream, Maple syrup, Whipped Cream, Almond topping.",
      },
      {
        name: "Chocolate",
        price: "12.95",
        description:
          "Croffle, Chocolate ice cream, Banana, Whipped Cream, Almond topping.",
      },
      {
        name: "Berry",
        price: "12.95",
        description:
          "Croffle, Vanilla ice cream, Strawberry, Blueberry, Whipped Cream.",
      },
      {
        name: "Injeolmi (Roasted Soybean)",
        price: "12.95",
        description:
          "Croffle, condensed milk, Roasted injeolmi powder, sliced almond, Vanilla ice cream, Whipped Cream.",
      },
      {
        name: "Brown Cheese",
        price: "13.95",
        description:
          "Croffle, Cheese, Vanilla ice cream, Whipped cream, Caramel syrup.",
      },
    ],
  },

  // ── BINGSU (KOREAN SHAVED ICE) ──
  {
    title: "Bingsu",
    subtitle: "Korean Milk Shaved Ice",
    category: "bingsu",
    image: "/images/mango_bingsu.jpg",
    items: [
      {
        name: "Milk Redbean",
        price: "14.95",
        description: "Redbean, Vanilla ice cream, Condensed milk.",
      },
      {
        name: "Injeolmi (Roasted Soybean)",
        price: "14.95",
        description:
          "Injeolmi, roasted soy powder, redbean, Vanilla ice cream, Condensed milk, Almond.",
      },
      {
        name: "Strawberry",
        price: "15.95",
        description: "Strawberry, strawberry puree, Vanilla ice cream, Mint.",
      },
      {
        name: "Oreo",
        price: "15.95",
        description: "Oreo crumbles, Strawberry puree, Vanilla ice cream.",
        tags: ["New"],
      },
      {
        name: "Matcha Redbean",
        price: "15.95",
        description:
          "Matcha powder, redbean, Vanilla ice cream, Condensed milk.",
      },
      {
        name: "Mango",
        price: "16.95",
        description: "Mango chunks, mango puree, Vanilla ice cream.",
      },
    ],
  },

  // ── COFFEE ──
  {
    title: "Standard Coffee",
    category: "coffee",
    image: "/images/four_cups.jpg",
    note: "MILK OPTIONS: Almond / Oat milk +$1.00 | Add Espresso Shot +$1.20 | Add Syrup +$0.50",
    items: [
      { name: "Flat White (12oz)", price: "5.95" },
      {
        name: "Latte (12oz / 16oz)",
        price: "5.95 / 6.45",
        tags: ["Hot / Ice"],
      },
      {
        name: "Mocha Latte (12oz / 16oz)",
        price: "6.45 / 7.25",
        tags: ["Hot / Ice"],
      },
      {
        name: "Vanilla Latte (12oz / 16oz)",
        price: "6.45 / 7.25",
        tags: ["Hot / Ice"],
      },
      {
        name: "Salted Caramel Latte (12oz / 16oz)",
        price: "6.45 / 7.25",
        tags: ["Hot / Ice"],
      },
    ],
  },
  {
    title: "Lattes with Cream Foam",
    subtitle: "Coffee Base",
    category: "coffee",
    items: [
      {
        name: "Spanish Cream Latte (16oz)",
        price: "6.75",
        description: "Condensed milk cream foam.",
        tags: ["Ice Only"],
      },
      {
        name: "Peanut Butter Cream Latte (16oz)",
        price: "6.75",
        tags: ["Ice Only"],
      },
    ],
  },
  {
    title: "Specials",
    category: "coffee",
    items: [
      {
        name: "Cookie Butter Latte (12oz / 16oz)",
        price: "6.45 / 7.25",
        tags: ["Ice Only"],
      },
      {
        name: "Iced Coconut Coffee (16oz)",
        price: "7.25",
        tags: ["Ice Only"],
      },
    ],
  },

  // ── MATCHA ──
  {
    title: "Matcha Series",
    subtitle: "Ceremonial Grade",
    category: "matcha",
    image: "/images/gallery_4.jpg",
    items: [
      {
        name: "Matcha Latte (12oz / 16oz)",
        price: "6.50 / 7.25",
        tags: ["Hot / Ice"],
      },
      {
        name: "Hojicha Latte (12oz / 16oz)",
        price: "6.50 / 7.25",
        tags: ["Hot / Ice"],
      },
      {
        name: "Matcha Lime Fizz (16oz)",
        price: "7.25",
        tags: ["New", "Ice Only"],
      },
    ],
  },
  {
    title: "Coconut Water with Cream Foam",
    category: "matcha",
    items: [
      {
        name: "Coconut Matcha Cloud (16oz)",
        price: "6.95",
        tags: ["Ice Only"],
      },
      {
        name: "Coconut Hojicha Cloud (16oz)",
        price: "6.95",
        tags: ["Ice Only"],
      },
      {
        name: "Strawberry Coconut Matcha Cloud (16oz)",
        price: "6.95",
        tags: ["New", "Ice Only"],
      },
    ],
  },
  {
    title: "Lattes with Cream Foam",
    subtitle: "Matcha Base",
    category: "matcha",
    items: [
      { name: "Matcha Cream Latte (16oz)", price: "6.75", tags: ["Ice Only"] },
      {
        name: "Hojicha Cream Latte (16oz)",
        price: "6.95",
        description: "Matcha Cream Foam on Hojicha Latte.",
        tags: ["Ice Only"],
      },
      {
        name: "Mugwort Cream Matcha Latte (16oz)",
        price: "6.95",
        tags: ["Ice Only"],
      },
      { name: "Ube Matcha Latte (16oz)", price: "6.95", tags: ["Ice Only"] },
      {
        name: "Strawberry Matcha Latte (16oz)",
        price: "6.95",
        tags: ["Ice Only"],
      },
      {
        name: "Strawberry Hojicha Latte (16oz)",
        price: "6.95",
        tags: ["Ice Only"],
      },
      {
        name: "Blueberry Matcha Latte (16oz)",
        price: "6.95",
        tags: ["Ice Only"],
      },
      { name: "Mango Matcha Latte (16oz)", price: "6.95", tags: ["Ice Only"] },
    ],
  },

  // ── TEA & CHOCOLATE ──
  {
    title: "Tea & Decadent Chocolate",
    category: "tea",
    image: "/images/tea_chocolate.jpg",
    items: [
      {
        name: "London Fog (12oz / 16oz)",
        price: "5.50 / 6.25",
        tags: ["Hot Only"],
      },
      { name: "Hot / Iced Chocolate (12oz / 16oz)", price: "5.75 / 6.75" },
      {
        name: "Iced Dubai Chocolate (16oz)",
        price: "8.75",
        description:
          "Pistachio cream, chocolate sauce, toasted crispy kunafa layers.",
        tags: ["Must Try", "Ice Only"],
      },
    ],
  },
  {
    title: "Hot Tea",
    subtitle: "by Sloane",
    category: "tea",
    items: [
      {
        name: "Heavenly Cream (12oz)",
        price: "4.95",
        description: "Sloane's signature blend, smooth, creamy vanilla.",
      },
      {
        name: "Citron Calm (12oz)",
        price: "4.95",
        description: "Chamomile.",
      },
      { name: "Earl Grey Tea (12oz)", price: "4.95" },
      {
        name: "Crimson Berry (12oz)",
        price: "4.95",
        description: "Blend of berries and hibiscus.",
      },
      { name: "Decaf Black Tea (12oz)", price: "4.95" },
    ],
  },
  {
    title: "Iced Tea",
    category: "tea",
    items: [
      { name: "Yuzu Berry Iced Tea (16oz)", price: "5.95" },
      { name: "Decaf Mango Black Iced Tea (16oz)", price: "5.95" },
      { name: "Peach Iced Tea (16oz)", price: "5.95" },
    ],
  },

  // ── REFRESHERS & SMOOTHIES ──
  {
    title: "Sparkling Refresher",
    subtitle: "Seasonal Ade",
    category: "sparkling-smoothie",
    image: "/images/refreshers.jpg",
    items: [
      {
        name: "Mango Tango Crush (16oz)",
        price: "7.50",
        tags: ["New", "Seasonal", "Ice Only"],
      },
      {
        name: "Berry Breeze Ade (16oz)",
        price: "7.50",
        tags: ["New", "Seasonal", "Ice Only"],
      },
      {
        name: "Yuzu Hibiscus (16oz)",
        price: "7.50",
        tags: ["New", "Seasonal", "Ice Only"],
      },
    ],
  },
  {
    title: "Smoothies",
    category: "sparkling-smoothie",
    items: [
      { name: "Strawberry Smoothie (16oz)", price: "6.95", tags: ["New"] },
      {
        name: "Strawberry Banana Smoothie (16oz)",
        price: "6.95",
        tags: ["New"],
      },
      { name: "Mango Smoothie (16oz)", price: "6.95", tags: ["New"] },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSections =
    activeCategory === "all"
      ? menuSections
      : menuSections.filter((sec) => sec.category === activeCategory);

  const getSectionStyles = (catId: string) => {
    switch (catId) {
      case "croffle":
        return {
          bg: "bg-amber-50/20 border-amber-200/50",
          titleColor: "text-amber-900",
          pillBg: "bg-amber-100/60 text-amber-900 border-amber-200",
          tagColor: "bg-amber-600 text-white",
        };
      case "bingsu":
        return {
          bg: "bg-sky-50/20 border-sky-200/50",
          titleColor: "text-sky-900",
          pillBg: "bg-sky-100/60 text-sky-900 border-sky-200",
          tagColor: "bg-sky-600 text-white",
        };
      case "coffee":
        return {
          bg: "bg-orange-50/20 border-orange-200/50",
          titleColor: "text-orange-950",
          pillBg: "bg-orange-100/60 text-orange-900 border-orange-200",
          tagColor: "bg-orange-700 text-white",
        };
      case "matcha":
        return {
          bg: "bg-emerald-50/20 border-emerald-200/50",
          titleColor: "text-emerald-950",
          pillBg: "bg-emerald-100/60 text-emerald-900 border-emerald-200",
          tagColor: "bg-emerald-700 text-white",
        };
      case "tea":
        return {
          bg: "bg-rose-50/20 border-rose-200/50",
          titleColor: "text-rose-950",
          pillBg: "bg-rose-100/60 text-rose-900 border-rose-200",
          tagColor: "bg-rose-700 text-white",
        };
      case "sparkling-smoothie":
        return {
          bg: "bg-teal-50/20 border-teal-200/50",
          titleColor: "text-teal-950",
          pillBg: "bg-teal-100/60 text-teal-900 border-teal-200",
          tagColor: "bg-teal-700 text-white",
        };
      default:
        return {
          bg: "bg-stone-50/30 border-stone-200/50",
          titleColor: "text-[#0A4A28]",
          pillBg: "bg-stone-100 text-stone-800",
          tagColor: "bg-[#0A4A28] text-white",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#f0ebe4] text-[#0A4A28] selection:bg-[#0A4A28]/10 overflow-x-hidden flex flex-col justify-between">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-10 py-12 w-full"
      >
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#0A4A28]/70 hover:text-[#0A4A28] transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-sans font-light text-[38px] sm:text-[50px] text-[#0A4A28] leading-tight tracking-tight mb-4 uppercase">
            Mênu
          </h1>
          <p className="text-sm sm:text-base font-light text-[#0A4A28]/70 italic">
            Coffee, calm, and a little something sweet.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 mb-16 overflow-x-auto pb-3 pt-1 scrollbar-none">
          {CATEGORIES.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-[#0A4A28] text-[#f0ebe4] border-[#0A4A28] shadow-sm"
                    : "bg-white/40 border-[#0A4A28]/10 text-[#0A4A28]/80 hover:bg-[#0A4A28]/5"
                }`}>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid / Sections */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-16"
        >
          {filteredSections.map((section, secIdx) => {
            const style = getSectionStyles(section.category);
            return (
              <div key={secIdx} className="space-y-6">
                {/* Header of Section */}
                <div className="border-b border-[#0A4A28]/10 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <h2
                      className={`font-sans font-semibold text-2xl tracking-wide uppercase ${style.titleColor}`}>
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <span className="text-xs uppercase tracking-wider text-[#0A4A28]/50 italic">
                        {section.subtitle}
                      </span>
                    )}
                  </div>

                  {section.note && (
                    <span className="text-[10px] sm:text-xs font-medium text-[#0A4A28]/60 bg-white/50 border border-[#0A4A28]/10 px-2.5 py-1 rounded-lg max-w-full inline-block sm:inline">
                      {section.note}
                    </span>
                  )}
                </div>

                {section.image ? (
                  /* Alternating Left/Right Image layout on desktop, stacked on mobile */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Category Image (4/4 square ratio) */}
                    <div className={`relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#0A4A28]/10 bg-[#0A4A28]/5 lg:col-span-5 ${secIdx % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover hover:scale-[1.02] transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 500px"
                        priority={secIdx === 0}
                      />
                    </div>

                    {/* Cards Container next to Image */}
                    <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 w-full">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className={`rounded-xl p-3 sm:p-4 md:p-6 border shadow-sm bg-white/70 hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden ${style.bg}`}
                        >
                          <div>
                            {/* Tags (aligned across cards on desktop) */}
                            <div className={`flex-wrap gap-1 mb-2 h-auto md:h-5 items-center ${item.tags && item.tags.length > 0 ? "flex" : "hidden md:flex"}`}>
                              {item.tags?.map((tag) => (
                                <span
                                  key={tag}
                                  className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${style.tagColor}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Name */}
                            <h3 className="font-sans font-medium text-xs sm:text-sm md:text-lg text-[#0A4A28] mb-1 leading-tight sm:leading-snug">
                              {item.name}
                            </h3>

                            {/* Description */}
                            {item.description && (
                              <p className="text-[10px] sm:text-xs font-light text-[#0A4A28]/70 leading-normal mb-3 line-clamp-2 md:line-clamp-none">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Price row */}
                          <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#0A4A28]/5">
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0A4A28]/40">
                              Price
                            </span>
                            <span className="font-sans font-bold text-xs sm:text-sm md:text-base text-[#0A4A28]">
                              ${item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Regular grid if no category image */
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className={`rounded-xl p-3 sm:p-4 md:p-6 border shadow-sm bg-white/70 hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden ${style.bg}`}
                      >
                        <div>
                          {/* Tags (aligned across cards on desktop) */}
                          <div className={`flex-wrap gap-1 mb-2 h-auto md:h-5 items-center ${item.tags && item.tags.length > 0 ? "flex" : "hidden md:flex"}`}>
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${style.tagColor}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Name */}
                          <h3 className="font-sans font-medium text-xs sm:text-sm md:text-lg text-[#0A4A28] mb-1 leading-tight sm:leading-snug">
                            {item.name}
                          </h3>

                          {/* Description */}
                          {item.description && (
                            <p className="text-[10px] sm:text-xs font-light text-[#0A4A28]/70 leading-normal mb-3 line-clamp-2 md:line-clamp-none">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Price row */}
                        <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#0A4A28]/5">
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0A4A28]/40">
                            Price
                          </span>
                          <span className="font-sans font-bold text-xs sm:text-sm md:text-base text-[#0A4A28]">
                            ${item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Global Allergies / Options Note */}
        <div className="mt-16 bg-white/40 border border-[#0A4A28]/10 rounded-2xl p-6 text-center max-w-xl mx-auto">
          <p className="text-xs font-light text-[#0A4A28]/80 leading-relaxed space-y-1">
            <span>
              Bar baked goods may have come into contact with allergens. Please
              let us know of any severe food allergies before ordering.
            </span>
          </p>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}

// patch: alternating desktop layout with square cover images

// patch: compact 2-column mobile layout cards
