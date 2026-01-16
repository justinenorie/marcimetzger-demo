import TopBar from "@/components/ui/TopBar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Sold from "@/components/section/Sold";
import Find from "@/components/section/Find";
import PhotoGallery from "@/components/section/PhotoGallery";
import Services from "@/components/section/Services";
import CallOrVisit from "@/components/section/CallOrVisit";
import Map from "@/components/section/Map";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Hero />
      <Services />
      <Sold />
      <PhotoGallery />
      <Find />
      <About />
      <CallOrVisit />
      <Map />
      <Footer />
    </div>
  );
}
