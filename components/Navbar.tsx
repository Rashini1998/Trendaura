"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav  className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-3xl font-bold tracking-widest"
          >
            TRENDAURA
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium">

            <Link href="/">Home</Link>

            <Link href="/products">Products</Link>

            <Link href="/#about">About</Link>

            <Link href="/#contact">Contact</Link>

          </div>

        </div>
      </Container>
    </nav>
  );
}