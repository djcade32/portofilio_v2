import About from "@/sections/About";
import Experience from "@/sections/Experience";
import FeaturedWork from "@/sections/FeaturedWork";
import Hero from "@/sections/Hero";
import Tech from "@/sections/Tech";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tech />
      <FeaturedWork />
      <Experience />
      <Contact />
    </main>
  );
}
