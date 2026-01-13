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
    saveBlogs(blogs.filter(b => b.id !== id));
    navigate("/blogs");
  };

  return (
    <div className="container">
      <h1>Edit Blog</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={updateBlog}>Update</button>
      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
}

export default EditBlog;
