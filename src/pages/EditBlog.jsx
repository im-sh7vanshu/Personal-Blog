import { useParams, useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";
import { useState } from "react";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = getBlogs();
  const blog = blogs.find(b => b.id === id);

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const updateBlog = () => {
    const updated = blogs.map(b =>
      b.id === id ? { ...b, title, content } : b
    );
    saveBlogs(updated);
    navigate("/blogs");
  };

  const deleteBlog = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      saveBlogs(blogs.filter(b => b.id !== id));
      navigate("/blogs");
    }
  };

  return (
    <div className="container">
      <h1>Edit Blog</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <div className="button-group">
        <button onClick={updateBlog} className="btn-primary">Update</button>
        <button onClick={deleteBlog} className="btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default EditBlog;
