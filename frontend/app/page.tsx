"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoffeeMenuSection from "@/components/CoffeeMenuSection";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-[#efebe4] text-[#4a3a2a] selection:bg-[#4a3a2a]/10 overflow-x-hidden relative flex flex-col justify-between"
      suppressHydrationWarning>
      <Navbar />

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto sm:px-15 py-12 lg:py-5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-6">
              {/* Giant stacked headline — Anton font matching reference */}
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="font-display uppercase text-[#4a3a2a]"
                style={{
                  fontSize: "clamp(72px, 11vw, 130px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}>
                Brewed
                <br />
                With
                <br />
                Care
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="mt-8 text-sm sm:text-base text-[#4a3a2a]/65 font-normal leading-relaxed max-w-[320px]">
                Savor the layered notes of every roast.
                <br />
                From bean to brew, crafted with care in every cup.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex flex-row items-center gap-4 mt-10">
                <Link
                  href="/menu"
                  className="bg-[#7a6040] text-[#efebe4] text-center px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#5d4936] transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm">
                  Our Menu
                </Link>
                <Link
                  href="/#locations"
                  className="border-2 border-[#4a3a2a]/40 hover:border-[#4a3a2a] text-[#4a3a2a] text-center px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#4a3a2a]/5 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer">
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Coffee Image */}
            <div className="lg:col-span-7 flex items-center justify-center relative select-none">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
                className="w-full flex items-center justify-center mix-blend-multiply">
                <div className="relative w-full max-w-[700px] aspect-square">
                  <Image
                    src="/images/three_brussels_cups.png"
                    alt="Three Brussels Brewery customized 3D floating iced coffee cups with dynamic splash effects"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 750px"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Homepage Extended Sections - Light/Cream Palette */}
      <div className="bg-[#efebe4] text-[#4a3a2a] w-full">
        {/* Coffee Menu Carousel Section */}
        <CoffeeMenuSection />

        {/* Section 1: Handmade Just For You */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#4a3a2a]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#4a3a2a]/10">
                <Image
                  src="/images/coffee_pack_branded.png"
                  alt="Premium Brussels Brewery coffee bag and takeaway cups"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
            {/* Text Right */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] tracking-tight text-[#4a3a2a] mb-6">
                Handmade Just For You
              </h2>
              <p className="text-base sm:text-lg text-[#4a3a2a]/80 leading-relaxed font-light mb-8 max-w-[500px]">
                Our organically grown coffee beans are roasted over an open
                flame in a one-of-a-kind, brick roaster. There's nothing quite
                like a cup of Brussels Brewery coffee.
              </p>
              <div>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 border border-[#4a3a2a]/30 hover:border-[#4a3a2a] text-[#4a3a2a] px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#4a3a2a]/5 transition-all duration-250 cursor-pointer select-none">
                  <span>View our menu</span>
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Made In Brussels */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#4a3a2a]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Left */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] tracking-tight text-[#4a3a2a] mb-6">
                Made In Brussels
              </h2>
              <p className="text-base sm:text-lg text-[#4a3a2a]/80 leading-relaxed font-light mb-6 max-w-[500px]">
                Welcome to Brussels Brewery, where the charm of Brussels meets
                the aroma of freshly brewed coffee. Our café is a cozy haven
                where friends gather, ideas spark, and every sip tells a story.
              </p>
              <p className="text-base sm:text-lg text-[#4a3a2a]/80 leading-relaxed font-light mb-8 max-w-[500px]">
                Come and experience the soul of Brussels in every cup and
                bite—we can't wait to welcome you!
              </p>
              <div>
                <Link
                  href="/#about"
                  className="inline-flex items-center gap-2 border border-[#4a3a2a]/30 hover:border-[#4a3a2a] text-[#4a3a2a] px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#4a3a2a]/5 transition-all duration-250 cursor-pointer select-none">
                  <span>Learn more</span>
                  <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
            {/* Image Right */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#4a3a2a]/10">
                <Image
                  src="/images/gallery_2.png"
                  alt="Brussels Brewery cozy outdoor patio dining tables"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section
          id="locations"
          className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] tracking-wide text-[#4a3a2a]">
              Locations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Brussels */}
            <div className="space-y-3">
              <h3 className="font-sans font-semibold text-lg uppercase tracking-wider text-[#4a3a2a]">
                Brussels
              </h3>
              <p className="text-sm font-light text-[#4a3a2a]/80 leading-relaxed">
                Rue au Midi 45, 1000
                <br />
                Bruxelles, Belgium
              </p>
            </div>
            {/* Anderlecht */}
            <div className="space-y-3">
              <h3 className="font-sans font-semibold text-lg uppercase tracking-wider text-[#4a3a2a]">
                Anderlecht
              </h3>
              <p className="text-sm font-light text-[#4a3a2a]/80 leading-relaxed">
                Pl. De Linde 27, 1070
                <br />
                Anderlecht, Belgium
              </p>
            </div>
            {/* Machelen */}
            <div className="space-y-3">
              <h3 className="font-sans font-semibold text-lg uppercase tracking-wider text-[#4a3a2a]">
                Machelen
              </h3>
              <p className="text-sm font-light text-[#4a3a2a]/80 leading-relaxed">
                Dorpsplein 2, 1830
                <br />
                Machelen, Belgium
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
