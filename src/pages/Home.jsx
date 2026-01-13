import { getBlogs } from "../utils/localStorage";
import BlogCard from "../components/BlogCard";

function Home() {
  const blogs = getBlogs().slice(0, 3);

  return (
    <div className="container">
      <h1>Welcome to Blog Spot</h1>
      <p>A personal blog built with ReactJS</p>

      <h2>Latest Blogs</h2>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Home;
