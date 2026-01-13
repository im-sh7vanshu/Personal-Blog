import { getBlogs } from "../utils/localStorage";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const blogs = getBlogs();

  return (
    <div className="container">
      <h1>All Blogs</h1>
      {blogs.length === 0 && <p>No blogs found.</p>}
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
