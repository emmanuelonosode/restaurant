"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-[0_24px_24px_rgba(28,28,25,0.04)]">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <Link href="/" className="font-headline text-2xl font-bold text-[#702817] dark:text-[#8e3e2b] tracking-tighter">
            Culinary Gallery
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-headline text-lg tracking-tight hover:scale-105 transition-all duration-300 ${
                  isActive(href)
                    ? "text-[#702817] dark:text-[#8e3e2b] font-bold border-b-2 border-[#845400] pb-1"
                    : "text-stone-600 dark:text-stone-400 hover:text-[#702817]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="bg-primary text-on-primary px-8 py-2.5 rounded-full font-label font-semibold text-sm tracking-wide uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm inline-block"
            >
              Inquire
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#702817] p-1"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden pt-20">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`font-headline text-2xl tracking-tight ${
                isActive(href)
                  ? "text-[#702817] font-bold"
                  : "text-stone-600 dark:text-stone-300"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-primary text-on-primary px-10 py-4 rounded-full font-label font-semibold text-sm tracking-wide uppercase hover:opacity-90 transition-all shadow-sm"
          >
            Inquire Now
          </Link>
        </div>
      )}
    </>
  );
}
