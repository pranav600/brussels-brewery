"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#f0ebe4] border-t border-[#0A4A28]/15 py-12 px-6 sm:px-10 text-[#0A4A28] w-full"
      suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        {/* Top row: Brand & Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand Column */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-sans font-medium text-xs sm:text-base md:text-lg uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0A4A28]">
                Cafe Forêt
              </span>
            </div>
            <p className="text-sm font-light text-[#0A4A28]/70">
              Coffee, calm, and a little something sweet 🌲
            </p>
          </div>

          {/* Policy Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-between text-xs text-[#0A4A28]/50 gap-4 text-center md:text-left">
            <span>
              &copy; {new Date().getFullYear()} Cafe Forêt. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
