"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Coffee, Sparkles, BookOpen } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Lush Indoor Plants" },
    { value: "4.0★", label: "Google Rating" },
    { value: "1", label: "Cozy Forest Oasis" },
    { value: "100%", label: "Study & Work Friendly" },
  ];

  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Botanical Serenity",
      description:
        "A lush, plant-filled forest oasis in downtown Toronto designed to help you relax, focus, and find calm.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-amber-700" />,
      title: "Cream Coffee Craft",
      description:
        "Savor our signature house-made cream-topped specialty drinks, crafted with premium coffee beans.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Signature Croffles",
      description:
        "Fresh, crispy, and warm croffles prepared daily using high-quality butter and sweet toppings.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      title: "Workspace Comfort",
      description:
        "Equipped with spacious tables, warm lighting, and quiet corners perfect for focused study or work.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#f0ebe4] text-[#0A4A28] flex flex-col font-sans"
      suppressHydrationWarning>
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          {/* Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display uppercase text-5xl sm:text-6xl tracking-tight text-[#0A4A28] mb-4">
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#0A4A28]/70 font-light leading-relaxed">
              Learn about our journey, our commitment to coffee craft, and the
              values that drive every brew we pour.
            </motion.p>
          </div>

          {/* Section 1: Grid Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Story Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 space-y-6">
              <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#0A4A28] tracking-tight">
                Born from Passion
              </h2>
              <p className="text-sm sm:text-base text-[#0A4A28]/80 font-light leading-relaxed">
                Cafe Forêt started with a simple goal: to make specialty coffee,
                pastries, and calm spaces approachable, creative, and memorable.
                Founded as a botanical sanctuary in downtown Toronto, we set out to
                combine traditional coffee brewing techniques with a modern, cozy
                workspace atmosphere.
              </p>
              <p className="text-sm sm:text-base text-[#0A4A28]/80 font-light leading-relaxed">
                Every cup of coffee is the result of a meticulously planned
                journey, from selecting premium coffee beans to crafting our signature
                cream-topped drinks and buttery pastries. We look at Cafe Forêt not just
                as a cafe, but as a botanical oasis for our community to study,
                connect, and unwind.
              </p>
              <div className="pt-4">
                <Link
                  href="/menu"
                  className="bg-[#0A4A28] text-[#f0ebe4] inline-block px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#07301a] transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm">
                  Explore Our Brews
                </Link>
              </div>
            </motion.div>

            {/* Story Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src="/images/about_page.jpg"
                  alt="Specialty coffee packaging showing roasted coffee beans and take-out cups"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </motion.div>
          </div>

          {/* Section 2: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0A4A28] text-[#f0ebe4] rounded-3xl p-8 sm:p-12 mb-24 shadow-xl border border-[#0A4A28]/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="py-2 md:py-0">
                  <span className="font-display uppercase text-4xl sm:text-5xl text-white block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#f0ebe4]/80 font-light uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Core Values */}
          <div>
            <div className="text-center mb-16 max-w-xl mx-auto">
              <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#0A4A28] tracking-tight mb-4">
                What We Stand For
              </h2>
              <p className="text-sm sm:text-base text-[#0A4A28]/70 font-light">
                We believe that specialty coffee, botanical greenery, and quiet comfort
                should come together to create a calm sanctuary for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/40 backdrop-blur-sm border border-[#0A4A28]/10 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:bg-white/60 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#0A4A28]/5 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base uppercase tracking-wider text-[#0A4A28] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#0A4A28]/70 font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
