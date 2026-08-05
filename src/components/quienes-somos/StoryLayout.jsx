import StoryCopy from "./StoryCopy";
import StoryPanel from "./StoryPanel";

function StoryLayout({ copy, panelCards }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
      <StoryCopy title={copy.title} paragraphs={copy.paragraphs} />
      <StoryPanel cards={panelCards} />
    </div>
  );
}

export default StoryLayout;
