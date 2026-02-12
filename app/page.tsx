import About from "@/sections/About";
import Experience from "@/sections/Experience";
import FeaturedWork from "@/sections/FeaturedWork";
import Hero from "@/sections/Hero";
import Tech from "@/sections/Tech";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tech />
      <FeaturedWork />
      <Experience />
    </main>
  );
}
