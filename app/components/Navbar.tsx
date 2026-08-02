"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["HOME", "ABOUT", "TOURNAMENTS", "GAMES", "CONTACT"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="block">
          <Image
            src="/RiseLogo.png"
            alt="RISE LK Logo"
            width={128}
            height={40}
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex space-x-10 font-bold text-xs">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-zinc-400 hover:text-[#08D2C2] transition-colors tracking-[0.2em]"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="https://discord.gg/74RtuZmh2"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#08D2C2] hover:bg-[#07b5a5] text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest transition-all"
        >
          Join Discord
        </a>
      </div>
    </header>
  );
}