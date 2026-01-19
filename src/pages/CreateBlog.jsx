import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Tech");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
      category,
      image,
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
        <input 
          placeholder="Title" 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Content" 
          onChange={e => setContent(e.target.value)} 
          required 
        />
        <select onChange={e => setCategory(e.target.value)}>
          <option>Tech</option>
          <option>Education</option>
          <option>Lifestyle</option>
        </select>
        <div className="image-upload">
          <label htmlFor="image-input">Upload Cover Image:</label>
          <input 
            id="image-input"
            type="file" 
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
              <button 
                type="button" 
                onClick={() => {
                  setImage("");
                  setImagePreview("");
                }}
                className="remove-image-btn"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateBlog;
