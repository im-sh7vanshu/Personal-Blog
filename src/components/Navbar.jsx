import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="nav">
      <h2>Blog Spot</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
