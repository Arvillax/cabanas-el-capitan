import PageBanner from "./PageBanner.jsx";
import FaqAccordion from "./FaqAccordion.jsx";
import FaqCta from "./FaqCta.jsx";

function FaqPage() {
  return (
    <div className="bg-[#f6efe6]">
      <main>
        <PageBanner />
        <FaqAccordion />
        <FaqCta />
      </main>
    </div>
  );
}

export default FaqPage;
