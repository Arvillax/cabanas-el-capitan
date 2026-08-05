import PageBanner from "./PageBanner.jsx";
import ServicesGrid from "./ServicesGrid.jsx";
import InclusionsSection from "./InclusionsSection.jsx";
import CtaBlock from "./CtaBlock.jsx";

function ServiciosPage() {
  return (
    <div className="bg-[#f6efe6]">
      <main>
        <PageBanner />
        <ServicesGrid />
        <InclusionsSection />
        <CtaBlock />
      </main>
    </div>
  );
}

export default ServiciosPage;
