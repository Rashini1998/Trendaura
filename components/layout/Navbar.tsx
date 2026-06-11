"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="text-3xl font-bold tracking-[0.3rem]">
            TRENDAURA
          </Link>

          <div className="hidden items-center gap-8 md:flex">

            <Link href="/">Home</Link>

            <Link href="/products">Shop</Link>

            <a href="/#about">About</a>

            <a href="/#contact">Contact</a>

            <a
              href="https://wa.me/94710337335"
              target="_blank"
              className="rounded-full border bg-black px-5 py-2 text-white transition  hover:bg-white hover:text-black hover:border border-black"
            >
              WhatsApp
            </a>

          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={30} />
          </button>

        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
