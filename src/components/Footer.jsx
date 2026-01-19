function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Blog Spot</p>

      <div className="footer-links">
        <a href="https://github.com/im-sh7vanshu" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-icon">🐙</span>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/shivanshu-roy-986600382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-icon">💼</span>
          <span>LinkedIn</span>
        </a>
        <a href="mailto:shivanshuroy077@gmail.com" className="social-link">
          <span className="social-icon">✉️</span>
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
