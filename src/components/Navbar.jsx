import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Blog Spot</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
