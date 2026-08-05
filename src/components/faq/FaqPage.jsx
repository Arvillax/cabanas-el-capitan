import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import PageBanner from "./PageBanner.jsx";
import FaqAccordion from "./FaqAccordion.jsx";
import FaqCta from "./FaqCta.jsx";

// Página completa de FAQ. Compone el banner, el acordeón de preguntas
// frecuentes y el bloque de llamado a la acción, junto con el Header y
// Footer compartidos (src/components/global).
function FaqPage() {
  return (
    <div className="bg-[#f6efe6]">
      <Header />
      <main>
        <PageBanner />
        <FaqAccordion />
        <FaqCta />
      </main>
      <Footer />
    </div>
  );
}

export default FaqPage;
