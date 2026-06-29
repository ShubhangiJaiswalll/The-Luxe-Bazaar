function ProductCard({ product, addToCart, addToWishlist, setSelectedProduct }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card" onClick={() => setSelectedProduct(product)}>
      <div className="product-image-wrapper">
        <span className="product-badge">{product.badge}</span>

        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(product);
          }}
        >
          ♡
        </button>

        <img
  src={
    product.image?.startsWith("http")
      ? product.image
      : `https://the-luxe-bazaar.onrender.com${product.image}`
  }
  alt={product.name}
/>
      </div>

      <p className="product-category">{product.category}</p>

      <h3>{product.name}</h3>

      <div className="rating">
        ⭐ {product.rating} <span>({product.reviews})</span>
      </div>

      <div className="price-row">
        <span className="price">₹{product.price}</span>
        <span className="old-price">₹{product.originalPrice}</span>
        <span className="discount">{discount}% OFF</span>
      </div>

      <p className="delivery">🚚 Free Delivery</p>

      <button
        className="cart-btn"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;