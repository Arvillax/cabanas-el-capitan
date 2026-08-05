import { blogData } from "../../../data/blog.js";
import BlogCard from "./BlogCard.jsx";

function BlogGrid() {
  return (
    <section className="bg-[#F6EFE6] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((articulo) => (
          <BlogCard key={articulo.id} articulo={articulo} />
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;
