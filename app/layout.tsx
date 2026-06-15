import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/home/FloatingWhatsapp";
import ScrollTop from "@/components/home/ScrollTop";

export const metadata: Metadata = {
  title: "Trendaura",
  description: "Premium Fashion Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        <Navbar />

        <main className="pt-20 min-h-screen">
          {children}
        </main>

        <Footer />

        <FloatingWhatsapp />

        <ScrollTop />

      </body>
    </html>
  );
}
