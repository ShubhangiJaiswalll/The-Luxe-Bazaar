function ProductModal({ selectedProduct, setSelectedProduct, addToCart }) {
  if (!selectedProduct) return null;

  const discount = Math.round(
    ((selectedProduct.originalPrice - selectedProduct.price) /
      selectedProduct.originalPrice) *
      100
  );

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="product-modal luxury-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setSelectedProduct(null)}>
          ×
        </button>

        <div className="modal-image-box">
          <span className="product-badge">{selectedProduct.badge}</span>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>

        <div className="modal-details">
          <p className="product-category">{selectedProduct.category}</p>

          <h2>{selectedProduct.name}</h2>

          <div className="rating">
            ⭐ {selectedProduct.rating} <span>({selectedProduct.reviews} reviews)</span>
          </div>

          <div className="price-row modal-price">
            <span className="price">₹{selectedProduct.price}</span>
            <span className="old-price">₹{selectedProduct.originalPrice}</span>
            <span className="discount">{discount}% OFF</span>
          </div>

          <p className="modal-desc">
            A premium curated pick from The Luxe Bazaar, selected for everyday
            elegance, comfort and luxury styling.
          </p>

          <div className="modal-benefits">
            <p>🚚 Free Delivery</p>
            <p>📦 In Stock</p>
            <p>✨ Premium Quality</p>
          </div>

          <div className="modal-actions">
            <button className="cart-btn" onClick={() => addToCart(selectedProduct)}>
              Add To Cart
            </button>

            <button className="wishlist-modal-btn">
              ♡ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;