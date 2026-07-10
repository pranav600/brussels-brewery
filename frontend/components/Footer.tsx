"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#efebe4] border-t border-[#4a3a2a]/15 py-12 px-6 sm:px-10 text-[#4a3a2a] w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top row: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#4a3a2a]/15 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#4a3a2a]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 18C24 13 26 13 26 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M32 18C32 13 34 13 34 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M40 18C40 13 42 13 42 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M16 28H48C48 28 46 45 32 45C18 45 16 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-sans font-medium text-xs sm:text-base md:text-lg uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#4a3a2a]">
                Brussels Brewery
              </span>
            </div>
            <p className="text-sm font-light text-[#4a3a2a]/70">
              Brewed To Perfection, Served With Love
            </p>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-sans text-sm font-medium tracking-wider uppercase text-[#4a3a2a]">
              Join our newsletter to receive exclusive updates, and news!
            </h3>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                suppressHydrationWarning
                className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-[#4a3a2a]/20 text-sm text-[#4a3a2a] placeholder:text-[#4a3a2a]/40 focus:border-[#4a3a2a]/50 outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-[#4a3a2a] hover:bg-[#5d4936] text-[#efebe4] px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors cursor-pointer select-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row: Socials & Sublinks */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#4a3a2a]/15 flex items-center justify-center text-[#4a3a2a] hover:bg-[#4a3a2a]/5 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#4a3a2a]/15 flex items-center justify-center text-[#4a3a2a] hover:bg-[#4a3a2a]/5 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#4a3a2a]/15 flex items-center justify-center text-[#4a3a2a] hover:bg-[#4a3a2a]/5 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 12.24s4.92 11.24 11.24 11.24c6.6 0 11-4.606 11-11.24 0-.76-.08-1.34-.18-1.955H12.24z"/>
              </svg>
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-6 text-xs text-[#4a3a2a]/70">
            <Link href="/privacy" className="hover:text-[#4a3a2a] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#4a3a2a] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#4a3a2a] transition-colors">Cookies</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-[#4a3a2a]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4a3a2a]/50 gap-4">
          <span>&copy; {new Date().getFullYear()} Brussels Brewery. All Rights Reserved.</span>
          <span>Powered by Pranav Joshi</span>
        </div>

      </div>
    </footer>
  );
}
