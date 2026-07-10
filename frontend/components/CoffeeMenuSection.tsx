"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// ── Data ───────────────────────────────────────────────────
const coffeeItems = [
  { id: "latte",      name: "Café Latte",  price: "$25.60", volume: "160 ml", rating: 4.5, image: "/images/coffee_latte.png" },
  { id: "cappuccino", name: "Cappuccino",  price: "$27.50", volume: "160 ml", rating: 4.6, image: "/images/coffee_cappuccino.png" },
  { id: "flatwhite",  name: "Flat White",  price: "$27.50", volume: "160 ml", rating: 4.7, image: "/images/coffee_flatwhite.png" },
  { id: "espresso",   name: "Espresso",    price: "$15.00", volume: "60 ml",  rating: 4.8, image: "/images/coffee_espresso.png" },
  { id: "coldbrew",   name: "Cold Brew",   price: "$22.00", volume: "350 ml", rating: 4.6, image: "/images/coffee_coldbrew.png" },
];

const snackItems = [
  { id: "croissant", name: "Butter Croissant",       price: "$3.50",  volume: "1 pc",   rating: 4.7, image: "/images/snack_croissant.png" },
  { id: "tart",      name: "Warm Berry Tart",         price: "$4.80",  volume: "1 slice",rating: 4.6, image: "/images/snack_tart.png" },
  { id: "brownie",   name: "Fudge Brownie",           price: "$4.00",  volume: "1 pc",   rating: 4.8, image: "/images/snack_brownie.png" },
  { id: "toast",     name: "Avocado Toast",           price: "$7.50",  volume: "1 pc",   rating: 4.5, image: "/images/snack_toast.png" },
  { id: "cinnamon",  name: "Cinnamon Glaze Roll",     price: "$4.20",  volume: "1 pc",   rating: 4.6, image: "/images/snack_cinnamon.png" },
];

// All items in one row
const allItems = [...coffeeItems, ...snackItems];

// ── Carousel geometry ──────────────────────────────────────
const CARD_W = 280;
const IMG_D  = 220;
const GAP    = 28;
const STEP   = CARD_W + GAP;

// ── Reusable Card ──────────────────────────────────────────
type Item = { id: string; name: string; price: string; volume: string; rating: number; image: string };

function MenuCard({ item, accent }: { item: Item; accent: string }) {
  return (
    <div style={{ width: CARD_W, flexShrink: 0 }}>
      <div className="flex flex-col items-center">

        {/* Circular image — half-above card */}
        <div
          className="relative rounded-full overflow-hidden z-10"
          style={{
            width: IMG_D,
            height: IMG_D,
            marginBottom: -(IMG_D / 2),
            boxShadow: "0 12px 32px rgba(46,31,15,0.30)",
          }}
        >
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes={`${IMG_D}px`} />
        </div>

        {/* Dark card */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{ background: "#3a2010", boxShadow: "0 12px 36px rgba(46,31,15,0.20)" }}
        >
          {/* Body */}
          <div className="px-6 pb-5" style={{ paddingTop: IMG_D / 2 + 18 }}>
            <h3 className="font-black text-xl uppercase tracking-wide text-white mb-3 leading-tight">
              {item.name}
            </h3>

            {/* Rating */}
            <div className="inline-flex items-center gap-1.5 bg-[#28150a] rounded-md px-3 py-1.5 mb-4">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-white">{item.rating}</span>
            </div>

            {/* Volume */}
            <p className="text-sm mb-5">
              <span style={{ color: accent }} className="font-medium">Valume </span>
              <span className="text-white font-medium">{item.volume}</span>
            </p>
          </div>

          {/* Price strip */}
          <div className="flex items-center px-6 py-4" style={{ background: "#2a1508" }}>
            <span className="text-2xl font-black text-white">{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Infinite scroll row ────────────────────────────────────
function ScrollRow({ items, duration }: { items: Item[]; duration: number }) {
  const totalOneSet = items.length * STEP;
  const loopItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-end"
        style={{ gap: GAP, width: "max-content", paddingLeft: GAP }}
        animate={{ x: [0, -totalOneSet] }}
        transition={{ duration, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        {loopItems.map((item, idx) => (
          <MenuCard key={`${item.id}-${idx}`} item={item} accent="#c09878" />
        ))}
      </motion.div>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────
export default function CoffeeMenuSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-[#4a3a2a]/10 bg-[#efebe4]">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-black text-5xl sm:text-6xl uppercase tracking-tight text-[#4a3a2a] leading-none"
        >
          Our Coffee
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 text-sm text-[#4a3a2a]/55 font-light max-w-[380px] leading-relaxed"
        >
          There&apos;s always room for coffee and a bite — it&apos;s not just a
          meal, it&apos;s an experience.
        </motion.p>
      </div>

      {/* Single row — all items */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ScrollRow items={allItems} duration={48} />
      </motion.div>
    </section>
  );
}
