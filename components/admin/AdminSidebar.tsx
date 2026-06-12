"use client";

import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    name: "Products",
    href: "/admin/products",
  },
  {
    name: "Add Product",
    href: "/admin/products/new",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-black text-white min-h-screen p-8">

      <h1 className="text-3xl font-bold tracking-widest">

        TRENDAURA

      </h1>

      <nav className="mt-12 flex flex-col gap-6">

        {links.map((link) => (

          <Link
            key={link.href}
            href={link.href}
            className="hover:text-yellow-500"
          >
            {link.name}
          </Link>

        ))}

      </nav>

    </aside>
  );
}