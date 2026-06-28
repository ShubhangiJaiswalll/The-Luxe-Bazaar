function Footer() {
  return (
    <footer className="footer premium-footer">
      <div className="footer-brand">
        <h2>✨ The Luxe Bazaar</h2>
        <p>
          A curated luxury marketplace for fashion, beauty, skincare and
          everyday elegance.
        </p>
      </div>

      <div className="footer-column">
        <h4>Shop</h4>
        <a>Beauty</a>
        <a>Fashion</a>
        <a>Accessories</a>
        <a>New Arrivals</a>
      </div>

      <div className="footer-column">
        <h4>Customer Care</h4>
        <a>Contact Us</a>
        <a>Shipping Policy</a>
        <a>Returns</a>
        <a>FAQs</a>
      </div>

      <div className="footer-column">
        <h4>Connect</h4>
        <a>GitHub</a>
        <a>LinkedIn</a>
        <a>Instagram</a>
        <a>Portfolio</a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 The Luxe Bazaar. Built with React & love.</p>
      </div>
    </footer>
  );
}

export default Footer;