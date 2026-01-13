import { useParams, Link } from "react-router-dom";
import { getBlogs } from "../utils/localStorage";

function BlogDetails() {
  const { id } = useParams();
  const blog = getBlogs().find(b => b.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p><b>Category:</b> {blog.category}</p>
      <Link to={`/edit/${blog.id}`}>Edit</Link>
      <br />
      <Link to="/blogs">Back</Link>
    </div>
  );
}

export default BlogDetails;
