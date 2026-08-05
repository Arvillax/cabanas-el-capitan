import SectionHeading from "./SectionHeading";
import StoryLayout from "./StoryLayout";
import WhyChooseUs from "./WhyChooseUs";
import CtaBlock from "./CtaBlock";
import {
  heading,
  storyCopy,
  storyPanel,
  whyChooseUs,
  ctaBlock,
} from "../../../data/quienes-somos.js";

function QuienesSomos() {
  return (
    <main className="bg-[#f6efe6] flex flex-col gap-16 py-16 px-6 sm:px-10">
      <SectionHeading kicker={heading.kicker} title={heading.title} />
      <StoryLayout copy={storyCopy} panelCards={storyPanel} />
      <WhyChooseUs reasons={whyChooseUs} />
      <CtaBlock title={ctaBlock.title} links={ctaBlock.links} />
    </main>
  );
}

export default QuienesSomos;
