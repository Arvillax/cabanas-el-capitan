import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import PageBanner from "./PageBanner.jsx";
import BlogGrid from "./BlogGrid.jsx";
import SocialCTA from "./SocialCTA.jsx";

function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F6EFE6] font-sans text-[#362117]">
      <Header />
      <main>
        <PageBanner />
        <BlogGrid />
        <SocialCTA />
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
