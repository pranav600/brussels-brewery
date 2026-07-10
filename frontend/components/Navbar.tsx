"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine if the path matches or has hash target
  const isActive = (href: string) => {
    if (href === "/menu") return pathname === "/menu";
    if (href === "/book-table") return pathname === "/book-table";
    if (href === "/about") return pathname === "/about";
    if (href === "/contact") return pathname === "/contact";
    if (href === "/") return pathname === "/";
    return false;
  };

  const navLinks = [
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="w-full relative z-50" suppressHydrationWarning>
      <div className="w-full px-6 sm:px-10 lg:px-16 py-6 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group select-none cursor-pointer">
          <svg
            className="w-10 h-10 text-[#4a3a2a] transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Steam lines */}
            <path
              d="M24 18C24 13 26 13 26 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M32 18C32 13 34 13 34 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M40 18C40 13 42 13 42 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Coffee cup bowl */}
            <path
              d="M16 28H48C48 28 46 45 32 45C18 45 16 28 16 28Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-sans font-medium text-xs sm:text-base md:text-lg uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#4a3a2a]">
            Brussels Brewery
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors duration-200 cursor-pointer ${
                isActive(link.href)
                  ? "text-[#4a3a2a] font-semibold border-b-2 border-[#4a3a2a] pb-0.5"
                  : "text-[#4a3a2a]/80 hover:text-[#4a3a2a]"
              }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Link
            href="/book-table"
            className={`inline-block px-7 py-3 rounded-[14px] text-sm font-medium tracking-wide transition-all duration-200 shadow-sm cursor-pointer select-none ${
              isActive("/book-table")
                ? "bg-[#efebe4] border border-[#4a3a2a] text-[#4a3a2a]"
                : "bg-[#4a3a2a] text-[#efebe4] hover:bg-[#5d4936]"
            }`}>
            Book Table
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full border border-[#4a3a2a]/15 text-[#4a3a2a] hover:bg-[#4a3a2a]/5 transition-colors select-none cursor-pointer">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#efebe4] border-b border-[#4a3a2a]/10 w-full z-45 absolute top-[88px] left-0 overflow-hidden shadow-lg">
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-sans text-base tracking-wide transition-all cursor-pointer ${
                    isActive(link.href)
                      ? "text-[#4a3a2a] font-semibold"
                      : "text-[#4a3a2a]/80 hover:text-[#4a3a2a]"
                  }`}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-table"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#4a3a2a] text-[#efebe4] py-3.5 rounded-[14px] text-sm font-medium tracking-wide hover:bg-[#5d4936] mt-4 cursor-pointer">
                Book Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
