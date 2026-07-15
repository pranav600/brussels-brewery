"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wifi, BookOpen, Laptop, Plug } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target === "locations") {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const el = document.getElementById("locations");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const handleScrollToLocations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("locations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#f0ebe4] text-[#0A4A28] selection:bg-[#0A4A28]/10 overflow-x-hidden relative flex flex-col justify-between"
      suppressHydrationWarning>
      <Navbar />

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-5 w-full">
          {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
          <div className="flex flex-col gap-0 lg:hidden">
            {/* 1. Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="font-display uppercase text-[#0A4A28] whitespace-nowrap text-center"
              style={{
                fontSize: "clamp(34px, 10vw, 54px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}>
              Coffee&nbsp;&nbsp;Calm&nbsp;&nbsp;Sweet
            </motion.h1>

            {/* 2. Card Stack */}
            <div className="relative w-full h-[340px] sm:h-[420px] mt-6 select-none">
              <div className="relative w-full max-w-[340px] sm:max-w-[460px] mx-auto h-full flex items-center justify-center">
                {/* Back Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -12 }}
                  animate={{ opacity: 1, x: 0, rotate: -12 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute w-[120px] sm:w-[160px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-8 border-[#f0ebe4] z-10 left-0 top-14">
                  <Image
                    src="/images/four_cups.jpg"
                    alt="Cafe Foret Cups"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </motion.div>
                {/* Back Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 15 }}
                  animate={{ opacity: 1, x: 0, rotate: 15 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="absolute w-[120px] sm:w-[160px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-8 border-[#f0ebe4] z-10 right-0 top-18">
                  <Image
                    src="/images/two_cups.jpg"
                    alt="Cafe Foret Two Cups"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </motion.div>
                {/* Front Center */}
                <motion.div
                  initial={{ opacity: 0, y: 50, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, rotate: 2 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                  className="absolute w-[170px] sm:w-[220px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-[#f0ebe4] z-20 left-[26%] top-4">
                  <Image
                    src="/images/cafe_foret.jpg"
                    alt="Cafe Foret"
                    fill
                    className="object-cover"
                    sizes="220px"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* 3. Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="mt-6 text-sm sm:text-base text-[#0A4A28]/65 font-normal leading-relaxed">
              A lush botanical forest sanctuary in downtown Toronto. Savor
              signature specialty croffles and cream coffees in a spacious,
              study-friendly plant oasis.
            </motion.p>

            {/* 4 & 5. Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
              <Link
                href="/menu"
                className="bg-[#0A4A28] text-[#f0ebe4] text-center px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#07301a] transition-all duration-200 active:scale-95 cursor-pointer shadow-sm">
                Our Menu
              </Link>
              <Link
                href="/book-table"
                className="border-2 border-[#0A4A28]/40 hover:border-[#0A4A28] text-[#0A4A28] text-center px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#0A4A28]/5 transition-all duration-200 active:scale-95 cursor-pointer">
                Book Table
              </Link>
            </motion.div>
          </div>

          {/* ── DESKTOP LAYOUT (hidden below lg) ── */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-center pr-6">
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="font-display uppercase text-[#0A4A28]"
                style={{
                  fontSize: "clamp(72px, 11vw, 130px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}>
                Coffee
                <br />
                Calm
                <br />
                Sweet
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="mt-8 text-base text-[#0A4A28]/65 font-normal leading-relaxed max-w-md">
                A lush botanical forest sanctuary in downtown Toronto. Savor
                signature specialty croffles and cream coffees in a spacious,
                study-friendly plant oasis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex flex-row items-center gap-4 mt-10">
                <Link
                  href="/menu"
                  className="bg-[#0A4A28] text-[#f0ebe4] text-center px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#07301a] transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm">
                  Our Menu
                </Link>
                <Link
                  href="/book-table"
                  className="border-2 border-[#0A4A28]/40 hover:border-[#0A4A28] text-[#0A4A28] text-center px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#0A4A28]/5 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer">
                  Book Table
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Card Stack */}
            <div className="lg:col-span-7 flex items-center justify-center relative select-none h-[540px]">
              <div className="relative w-full max-w-[650px] h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -12 }}
                  animate={{ opacity: 1, x: 0, rotate: -12 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute w-[230px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-8 border-[#f0ebe4] bg-[#0A4A28]/5 z-10 left-0 top-16">
                  <Image
                    src="/images/four_cups.jpg"
                    alt="Cafe Foret Botanical Sanctuary"
                    fill
                    className="object-cover"
                    sizes="230px"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 15 }}
                  animate={{ opacity: 1, x: 0, rotate: 15 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="absolute w-[230px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-8 border-[#f0ebe4] bg-[#0A4A28]/5 z-10 right-0 top-20">
                  <Image
                    src="/images/two_cups.jpg"
                    alt="Cafe Foret Two Cups"
                    fill
                    className="object-cover"
                    sizes="230px"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, rotate: 2 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                  className="absolute w-[310px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-[#f0ebe4] bg-[#0A4A28]/5 z-20 left-[26%] top-6">
                  <Image
                    src="/images/cafe_foret.jpg"
                    alt="Cafe Foret"
                    fill
                    className="object-cover"
                    sizes="310px"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Homepage Extended Sections - Light/Cream Palette */}
      <div className="bg-[#f0ebe4] text-[#0A4A28] w-full">
        {/* Photo Gallery Section */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#0A4A28]/10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] tracking-wide text-[#0A4A28]">
              Sanctuary Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 text-sm text-[#0A4A28]/70 font-light max-w-[420px] mx-auto leading-relaxed">
              A glimpse inside our calm botanical escape in downtown Toronto.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1: cafe_foret.jpg */}
            <div className="group relative aspect-[4/4] rounded-2xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-[#0A4A28]/5">
              <Image
                src="/images/gallery_1.jpg"
                alt="Cafe Foret Botanical Sanctuary"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Image 2: four_cups.jpg */}
            <div className="group relative aspect-[4/4] rounded-2xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-[#0A4A28]/5">
              <Image
                src="/images/gallery_2.jpg"
                alt="Cafe Foret Specialties Selection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Image 3: gallery_4.png */}
            <div className="group relative aspect-[4/4] rounded-2xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-[#0A4A28]/5">
              <Image
                src="/images/gallery_3.jpg"
                alt="Cozy interior study space"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Image 4: two_cups.jpg */}
            <div className="group relative aspect-[4/4] rounded-2xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-[#0A4A28]/5">
              <Image
                src="/images/gallery_4.jpg"
                alt="Cafe Foret Signature Iced Coffees"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Image 5: gallery_2.png */}
            <div className="group relative aspect-[4/4] rounded-2xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-[#0A4A28]/5">
              <Image
                src="/images/gallery_7.jpg"
                alt="Cafe Foret Deserts"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Image 6: snack_croissant.png */}
            <div className="group relative aspect-[4/4] rounded-2xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-[#0A4A28]/5">
              <Image
                src="/images/gallery_6.jpg"
                alt="Freshly baked specialty treats"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </section>

        {/* Section 1: Handmade Just For You */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#0A4A28]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/4] rounded-2xl overflow-hidden shadow-lg border border-[#0A4A28]/10">
                <Image
                  src="/images/croffle.jpg"
                  alt="Cafe Foret Signature Chocolate Croffle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
            {/* Text Right */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
              <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] tracking-tight text-[#0A4A28] mb-6">
                Signature Croissant Sandwiches
              </h2>
              <p className="text-base sm:text-lg text-[#0A4A28]/80 leading-relaxed font-light mb-8 max-w-[500px]">
                Savor our freshly prepared croissant sandwiches—buttery, cheesy,
                warm, and flaky croissants filled with premium ingredients like
                savory ham, melted cheese, and crisp greens. The perfect
                satisfying bite to accompany your coffee.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 border border-[#0A4A28]/30 hover:border-[#0A4A28] text-[#0A4A28] px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#0A4A28]/5 transition-all duration-250 cursor-pointer select-none">
                <span>View our menu</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Botanical Study Sanctuary Workspace */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#0A4A28]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Left */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start text-left order-2 lg:order-1">
              <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] tracking-tight text-[#0A4A28] mb-6">
                A Botanical Study Sanctuary
              </h2>
              <p className="text-base sm:text-lg text-[#0A4A28]/80 leading-relaxed font-light mb-6 max-w-[500px]">
                Escape the bustle of downtown Toronto. Cafe Forêt is a cozy
                haven designed with lush plant life, neutral tones, and warm
                wood accents to bring peace to your day.
              </p>
              <p className="text-base sm:text-lg text-[#0A4A28]/80 leading-relaxed font-light mb-6 max-w-[500px]">
                Spacious seating, stable high-speed Wi-Fi, and convenient power
                outlets at every seat make it the perfect urban hideaway to
                study, work remotely, or gather with friends.
              </p>

              {/* Workspace Amenity Logos */}
              <div className="flex flex-wrap items-center gap-3 mb-8 text-[#0A4A28]/80">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#0A4A28]/10 px-3.5 py-2 rounded-xl shadow-sm">
                  <Wifi className="w-4 h-4 text-[#0A4A28]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Fast Wi-Fi
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#0A4A28]/10 px-3.5 py-2 rounded-xl shadow-sm">
                  <BookOpen className="w-4 h-4 text-[#0A4A28]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Study Spots
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#0A4A28]/10 px-3.5 py-2 rounded-xl shadow-sm">
                  <Laptop className="w-4 h-4 text-[#0A4A28]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Laptop Friendly
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#0A4A28]/10 px-3.5 py-2 rounded-xl shadow-sm">
                  <Plug className="w-4 h-4 text-[#0A4A28]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Power Outlets
                  </span>
                </div>
              </div>
            </div>
            {/* Image Right */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#0A4A28]/10">
                <Image
                  src="/images/people_working.jpg"
                  alt="Cafe Foret cozy plant-filled seating area"
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
          className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#0A4A28]/10">
          <div className="text-center mb-16">
            <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-[42px] tracking-wide text-[#0A4A28]">
              Location & Hours
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
            {/* Left Column: Details Card */}
            <div className="lg:col-span-5 flex flex-col justify-between items-center text-center bg-white/40 rounded-3xl p-8 sm:p-10 shadow-md border border-[#0A4A28]/10 space-y-6">
              <div className="w-full">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wider text-[#0A4A28] mb-2">
                  Downtown Toronto
                </h3>
                <p className="text-base font-light text-[#0A4A28]/95 leading-relaxed">
                  2 FL, 153 Dundas St. W,
                  <br />
                  Toronto, Ontario M5G 1C6
                </p>
              </div>

              <div className="border-t border-[#0A4A28]/10 pt-6 w-full">
                <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-[#0A4A28] mb-2">
                  Hours
                </h3>
                <p className="text-sm font-light text-[#0A4A28]/85">
                  Monday to Sunday: 10:00 AM – 10:00 PM
                </p>
              </div>

              <div className="border-t border-[#0A4A28]/10 pt-6 w-full">
                <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-[#0A4A28] mb-2">
                  Contact
                </h3>
                <p className="text-sm font-light text-[#0A4A28]/85">
                  Phone: 647-348-9554
                  <br />
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/cafeforet_to"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#07301a] font-medium">
                    @cafeforet_to
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column: Google Map Embed */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-md border border-[#0A4A28]/10 bg-white/40 p-3 min-h-[350px] lg:min-h-full">
              <iframe
                title="Cafe Forêt Location Map"
                src="https://maps.google.com/maps?q=Cafe%20Foret%20153%20Dundas%20St%20W%20Toronto&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[320px] lg:min-h-full rounded-2xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
