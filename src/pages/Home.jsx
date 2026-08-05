import Carousel from "../components/home/Carousel";
import IntroStrip from "../components/home/IntroStrip";
import CabanasGrid from "../components/home/CabanasGrid";
import ServiciosSection from "../components/home/ServiciosSection";
import StorySection from "../components/home/StorySection";
import UbicacionSection from "../components/home/UbicacionSection";
import OpinionesSection from "../components/home/OpinionesSection";
import ContactoCTA from "../components/home/ContactoCTA";

export default function Home() {
  return (
    <>
      <Carousel />
      <IntroStrip />
      <CabanasGrid />
      <ServiciosSection />
      <StorySection />
      <UbicacionSection />
      <OpinionesSection />
      <ContactoCTA />
    </>
  );
}
