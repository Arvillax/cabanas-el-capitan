import PageBanner from "./PageBanner.jsx";
import BlogGrid from "./BlogGrid.jsx";
import SocialCTA from "./SocialCTA.jsx";

function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F6EFE6] font-sans text-[#362117]">
      <main>
        <PageBanner />
        <BlogGrid />
        <SocialCTA />
      </main>
    </div>
  );
}

export default BlogPage;
