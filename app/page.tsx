import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/product/FeaturedProducts";
import Contact from "@/components/home/Contact";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>

      <Hero />

      <FeaturedProducts />

      <About />

      <Testimonials />

      <Contact />

    </main>
  );
}