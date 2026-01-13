import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <p>{blog.content.slice(0, 100)}...</p>
      <p><b>Category:</b> {blog.category}</p>
      <Link to={`/blogs/${blog.id}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;
