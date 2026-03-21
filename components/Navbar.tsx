"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-[0_24px_24px_rgba(28,28,25,0.04)]">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <Link href="/" className="font-headline text-2xl font-bold text-[#702817] dark:text-[#8e3e2b] tracking-tighter">
          Culinary Gallery
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            href="/gallery"
            className={`font-headline text-lg tracking-tight hover:scale-105 transition-all duration-300 ${isActive('/gallery') ? 'text-[#702817] dark:text-[#8e3e2b] font-bold border-b-2 border-[#845400] pb-1' : 'text-stone-600 dark:text-stone-400 hover:text-[#702817]'}`}
          >
            Gallery
          </Link>
          <Link 
            href="/booking"
            className={`font-headline text-lg tracking-tight hover:scale-105 transition-all duration-300 ${isActive('/booking') ? 'text-[#702817] dark:text-[#8e3e2b] font-bold border-b-2 border-[#845400] pb-1' : 'text-stone-600 dark:text-stone-400 hover:text-[#702817]'}`}
          >
            Services
          </Link>
          <Link 
            href="/about"
            className={`font-headline text-lg tracking-tight hover:scale-105 transition-all duration-300 ${isActive('/about') ? 'text-[#702817] dark:text-[#8e3e2b] font-bold border-b-2 border-[#845400] pb-1' : 'text-stone-600 dark:text-stone-400 hover:text-[#702817]'}`}
          >
            About
          </Link>
          <Link 
            href="/journal"
            className={`font-headline text-lg tracking-tight hover:scale-105 transition-all duration-300 ${isActive('/journal') ? 'text-[#702817] dark:text-[#8e3e2b] font-bold border-b-2 border-[#845400] pb-1' : 'text-stone-600 dark:text-stone-400 hover:text-[#702817]'}`}
          >
            Journal
          </Link>
        </div>
        <Link 
          href="/booking" 
          className="bg-primary text-on-primary px-8 py-2.5 rounded-full font-label font-semibold text-sm tracking-wide uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm inline-block"
        >
          Inquire
        </Link>
      </div>
    </nav>
  );
}
