import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Contact from "@/components/Contact";
import About from "@/components/About";
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