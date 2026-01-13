import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Tech");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
      author: "Admin"
    };

    const blogs = getBlogs();
    saveBlogs([...blogs, newBlog]);
    navigate("/blogs");
  };

  return (
    <div className="container">
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Content" onChange={e => setContent(e.target.value)} required />
        <select onChange={e => setCategory(e.target.value)}>
          <option>Tech</option>
          <option>Education</option>
          <option>Lifestyle</option>
        </select>
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateBlog;
