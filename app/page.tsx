import TopBar from "@/components/ui/TopBar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Sold from "@/components/section/Sold";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Hero />
      <About />
      <Sold />
    </div>
  );
}
