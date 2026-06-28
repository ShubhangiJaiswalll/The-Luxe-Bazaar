function CategorySection() {
  return (
    <section className="categories-section">
      <div className="section-header">
        <p>EXPLORE</p>
        <h2>Featured Categories</h2>
      </div>

      <div className="category-grid">
        <div className="category-card">
          <h3>Beauty</h3>
          <p>Makeup, skincare and self-care essentials.</p>
        </div>

        <div className="category-card">
          <h3>Fashion</h3>
          <p>Trendy outfits for every mood and moment.</p>
        </div>

        <div className="category-card">
          <h3>Accessories</h3>
          <p>Jewelry, bags and finishing touches.</p>
        </div>

        <div className="category-card">
          <h3>Luxury Picks</h3>
          <p>Premium products curated for you.</p>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;