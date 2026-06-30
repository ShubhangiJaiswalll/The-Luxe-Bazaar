import fashionImg from "../assets/images/fashion.jpg";
import beautyImg from "../assets/images/beauty.jpg";
import skincareImg from "../assets/images/skincare.jpg";

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
      </div>

      <div className="hero-visual">
        <div className="hero-card main-card">
          <img src={fashionImg} alt="Fashion" />
          <span>Fashion Edit</span>
        </div>

        <div className="hero-card small-card card-a">
          <img src={beautyImg} alt="Beauty" />
          <span>Beauty Glow</span>
        </div>

        <div className="hero-card small-card card-b">
          <img src={skincareImg} alt="Skincare" />
          <span>Skin Rituals</span>
        </div>

        <div className="floating-pill pill-one">🚚 Free Shipping</div>
        <div className="floating-pill pill-two">✨ Premium Brands</div>
      </div>
    </section>
  );
}

export default Hero;