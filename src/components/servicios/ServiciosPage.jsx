import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import PageBanner from "./PageBanner.jsx";
import ServicesGrid from "./ServicesGrid.jsx";
import InclusionsSection from "./InclusionsSection.jsx";
import CtaBlock from "./CtaBlock.jsx";

// Página completa de Servicios. Compone el banner, la cuadrícula de
// servicios, la sección de inclusiones y el bloque de llamado a la acción,
// junto con el Header y Footer compartidos (src/components/global).
function ServiciosPage() {
  return (
    <div className="bg-[#f6efe6]">
      <Header />
      <main>
        <PageBanner />
        <ServicesGrid />
        <InclusionsSection />
        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}

export default ServiciosPage;
