import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h2>FlickForge</h2>
          <p>
            Your home for discovering movies, popular films, tv shows,
            and the latest releases.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul class= "list">
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
         <li><a href=""><i class="fab-brands fa-facebook-f"></i> Facebook</a></li> 
          <li><a href=""><i class="fab-brands fa-instagram"></i> Instagram</a></li>
          <li><a href=""><i class="fab-brands fa-x-twitter"></i> Twitter</a></li>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} FlickForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;