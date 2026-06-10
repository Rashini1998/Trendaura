"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
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

            <Link href="#">About</Link>

            <Link href="#">Contact</Link>

          </div>

        </div>
      </Container>
    </nav>
  );
}