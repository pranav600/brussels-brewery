"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Flame, Users2 } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years of Crafting" },
    { value: "15k+", label: "Daily Happy Brewers" },
    { value: "3", label: "Roastery Locations" },
    { value: "100%", label: "Sourced with Love" },
  ];

  const values = [
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      title: "Art of Roasting",
      description:
        "Every single bean is roasted in small batches to highlight its unique flavor profiles.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Handcrafted Love",
      description:
        "From pulling double espresso shots to pouring custom latte art, we care about the details.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Ethical Sourcing",
      description:
        "We partner directly with family farms around the globe to ensure fair wages and premium quality.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-sky-500" />,
      title: "Our Community",
      description:
        "Our cafes are spaces designed to inspire connection, collaboration, and slow afternoons.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#efebe4] text-[#4a3a2a] flex flex-col font-sans"
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
              className="font-display uppercase text-5xl sm:text-6xl tracking-tight text-[#4a3a2a] mb-4">
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#4a3a2a]/70 font-light leading-relaxed">
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
              <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#4a3a2a] tracking-tight">
                Born from Passion
              </h2>
              <p className="text-sm sm:text-base text-[#4a3a2a]/80 font-light leading-relaxed">
                Brussels Brewery started over a decade ago with a simple goal:
                to make specialty coffee approachable, creative, and memorable.
                Founded in the historic heart of Brussels, we set out to combine
                traditional European coffee cultures with modern, light-roast
                profile dynamics.
              </p>
              <p className="text-sm sm:text-base text-[#4a3a2a]/80 font-light leading-relaxed">
                Every cup of coffee is the result of a meticulously traced
                journey, starting from small family-owned farms in Ethiopia,
                Colombia, and Sumatra, to our custom-built cast iron roasters
                right here in Brussels. We look at coffee not just as a drink,
                but as a craft and a community.
              </p>
              <div className="pt-4">
                <Link
                  href="/menu"
                  className="bg-[#4a3a2a] text-[#efebe4] inline-block px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#5d4936] transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm">
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
                  src="/images/coffee_pack_branded.png"
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
            className="bg-[#3a2010] text-[#efebe4] rounded-3xl p-8 sm:p-12 mb-24 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="py-2 md:py-0">
                  <span className="font-display uppercase text-4xl sm:text-5xl text-amber-400 block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-white/60 font-light uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Core Values */}
          <div>
            <div className="text-center mb-16 max-w-xl mx-auto">
              <h2 className="font-display uppercase text-3xl sm:text-4xl text-[#4a3a2a] tracking-tight mb-4">
                What We Stand For
              </h2>
              <p className="text-sm sm:text-base text-[#4a3a2a]/70 font-light">
                We believe that premium coffee should be made responsibly and
                served with transparency.
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
                  className="bg-white/40 backdrop-blur-sm border border-[#4a3a2a]/10 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:bg-white/60 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#4a3a2a]/5 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base uppercase tracking-wider text-[#4a3a2a] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#4a3a2a]/70 font-light leading-relaxed">
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
