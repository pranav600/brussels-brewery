"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

export default function ContactPage() {
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
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#0A4A28]/70 font-light leading-relaxed">
              Have a question, feedback, or just want to talk coffee? Drop us a
              line and we’ll get back to you as soon as possible.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 space-y-6">
              {/* Info Card 1: Address */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#0A4A28]/10 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0A4A28]/5 text-[#0A4A28] flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider text-[#0A4A28] mb-2">
                    Our Cafe
                  </h3>
                  <p className="text-sm text-[#0A4A28]/70 font-light leading-relaxed">
                    2 FL, 153 Dundas St. W,
                    <br />
                    Toronto, Ontario M5G 1C6
                  </p>
                </div>
              </div>

              {/* Info Card 2: Phone & Email */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#0A4A28]/10 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0A4A28]/5 text-[#0A4A28] flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider text-[#0A4A28] mb-2">
                    Contact Details
                  </h3>
                  <p className="text-sm text-[#0A4A28]/70 font-light mb-1">
                    Phone:{" "}
                    <a
                      href="tel:647-348-9554"
                      className="hover:text-[#0A4A28] underline">
                      647-348-9554
                    </a>
                  </p>
                  <p className="text-sm text-[#0A4A28]/70 font-light">
                    Email:{" "}
                    <a
                      href="mailto:hello@cafeforet.com"
                      className="hover:text-[#0A4A28] underline">
                      hello@cafeforet.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Info Card 3: Hours */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-[#0A4A28]/10 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0A4A28]/5 text-[#0A4A28] flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider text-[#0A4A28] mb-2">
                    Cafe Hours
                  </h3>
                  <div className="text-sm text-[#0A4A28]/70 font-light space-y-1">
                    <p className="flex justify-between gap-8">
                      <span>Monday – Sunday:</span>{" "}
                      <span>10:00 AM – 10:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Card instead of form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 bg-[#0A4A28] text-[#f0ebe4] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#f0ebe4]/10 flex flex-col justify-between gap-8">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#f0ebe4]/10 shadow-md">
                <Image
                  src="/images/work_space.jpg"
                  alt="Cozy study and work tables surrounded by lush green plants inside Cafe Forêt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
              </div>

              <div className="space-y-4">
                <h2 className="font-display uppercase text-2xl tracking-wide text-white">
                  We'd Love to Host You
                </h2>
                <p className="text-sm font-light text-[#f0ebe4]/80 leading-relaxed">
                  Savor our signature cream-topped specialty coffees and buttery
                  croffles in a serene botanical plant sanctuary. With spacious
                  study-friendly workspaces and high-speed Wi-Fi, it's the
                  perfect spot to read, work, or catch up with friends.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/book-table"
                  className="flex-1 bg-[#f0ebe4] text-[#0A4A28] text-center py-4 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-white transition-all hover:scale-[1.01] active:scale-95 cursor-pointer select-none">
                  Book A Table
                </Link>
                <a
                  href="https://www.instagram.com/cafeforet_to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-[#f0ebe4] text-[#f0ebe4] hover:bg-[#f0ebe4] hover:text-[#0A4A28] text-center py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all hover:scale-[1.01] active:scale-95 cursor-pointer select-none flex items-center justify-center gap-2">
                  <Instagram size={16} />
                  <span>Follow Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
