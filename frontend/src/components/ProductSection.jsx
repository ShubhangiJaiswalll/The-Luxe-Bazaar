import ProductCard from "./ProductCard";

function ProductSection({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  filteredProducts,
  addToCart,
  addToWishlist,
  setSelectedProduct,
}) {
  const categories = [
    "All",
    "Beauty & Skincare",
    "Fashion",
    "Accessories",
  ];

  return (
    <section className="products-section" id="shop">
      <div className="section-header">
        <p>TRENDING NOW</p>
        <h2>Luxury Finds You’ll Love</h2>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search luxury finds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filter-pills">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active-pill" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;