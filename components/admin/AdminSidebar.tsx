"use client";

import Link from "next/link";
import { LayoutDashboard, Package, PlusCircle } from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Add Product",
    href: "/admin/products/new",
    icon: PlusCircle,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-black text-white p-8">

      {/* <h1 className="text-3xl font-bold tracking-widest">
        TRENDAURA
      </h1> */}

      <nav className="mt-12 space-y-3">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl p-4 hover:bg-zinc-800"
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}

      </nav>
    </aside>
  );
}