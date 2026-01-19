import { useParams, Link } from "react-router-dom";
import { getBlogs } from "../utils/localStorage";

function BlogDetails() {
  const { id } = useParams();
  const blog = getBlogs().find(b => b.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      {blog.image && <img src={blog.image} alt={blog.title} className="blog-detail-image" />}
      <p>{blog.content}</p>
      <p><b>Category:</b> {blog.category}</p>
      <p><b>Date:</b> {blog.date}</p>
      <div className="blog-actions">
        <Link to={`/edit/${blog.id}`} className="btn-edit">Edit</Link>
        <Link to="/blogs" className="btn-back">← Back</Link>
      </div>
    </div>
  );
}

export default BlogDetails;
