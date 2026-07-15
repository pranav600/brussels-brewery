"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  const navLinks = [
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  const handleVisitUs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById("locations");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTarget", "locations");
      router.push("/");
    }
  };

  const handleVisitUsMobile = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    if (pathname === "/") {
      setTimeout(() => {
        const el = document.getElementById("locations");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Wait for mobile menu exit animation to finish so page height stabilizes
    } else {
      sessionStorage.setItem("scrollTarget", "locations");
      router.push("/");
    }
  };

  return (
    <header className="relative z-50 w-full">
      <div className="flex items-center justify-between px-4 py-3 sm:px-10 lg:px-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 select-none">
          {/* Uncomment if using logo
          <Image
            src="/images/company_log.png"
            alt="Cafe Forêt Logo"
            width={300}
            height={300}
            priority
            className="h-25 w-25 rounded-full object-contain"
          />
          */}

          <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#0A4A28] sm:text-base md:text-lg sm:tracking-[0.2em]">
            Cafe Forêt
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-base transition-colors duration-200 border-b-2 pb-0.5 ${
                isActive(link.href)
                  ? "border-[#0A4A28] text-[#0A4A28]"
                  : "border-transparent text-[#0A4A28]/80 hover:text-[#0A4A28]"
              }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/"
            onClick={handleVisitUs}
            className="inline-block rounded-[14px] px-7 py-3 text-sm font-medium tracking-wide transition-all bg-[#0A4A28] text-[#f0ebe4] hover:bg-[#07301a]">
            Visit Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-full border border-[#0A4A28]/15 p-2.5 text-[#0A4A28] transition-colors hover:bg-[#0A4A28]/5 md:hidden">
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-[#0A4A28]/10 bg-[#f0ebe4] shadow-lg md:hidden">
            <div className="flex flex-col gap-5 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-sans text-base transition-colors font-semibold ${
                    isActive(link.href)
                      ? "text-[#0A4A28]"
                      : "text-[#0A4A28]/80 hover:text-[#0A4A28]"
                  }`}>
                  {link.label}
                </Link>
              ))}

              <Link
                href="/"
                onClick={handleVisitUsMobile}
                className="mt-4 rounded-[14px] bg-[#0A4A28] py-3.5 text-center text-sm font-medium tracking-wide text-[#f0ebe4] transition-colors hover:bg-[#07301a]">
                Visit Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// patch: resolve hydration mismatch

// patch: smooth scroll behavior
