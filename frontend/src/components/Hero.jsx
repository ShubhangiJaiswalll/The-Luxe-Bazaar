function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">NEW DROP 2026 ✨</span>

        <p className="tag">DESI LUXE MARKETPLACE</p>

        <h1>
          A Little Luxury <br />
          for Every You
        </h1>

        <p className="hero-text">
          Discover fashion, beauty, skincare and everyday luxuries curated for
          every mood, every style and every story.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Collection
          </button>

          <button className="secondary-btn">Explore Beauty</button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>2500+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>4.8★</h3>
            <p>Average Rating</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Luxury Picks</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card main-card">
          <img src="/src/assets/images/fashion.jpg" alt="Fashion" />
          <span>Fashion Edit</span>
        </div>

        <div className="hero-card small-card card-a">
          <img src="/src/assets/images/beauty.jpg" alt="Beauty" />
          <span>Beauty Glow</span>
        </div>

        <div className="hero-card small-card card-b">
          <img src="/src/assets/images/skincare.jpg" alt="Skincare" />
          <span>Skin Rituals</span>
        </div>

        <div className="floating-pill pill-one">🚚 Free Shipping</div>
        <div className="floating-pill pill-two">✨ Premium Brands</div>
      </div>
    </section>
  );
}

export default Hero;