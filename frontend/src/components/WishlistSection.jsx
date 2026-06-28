function WishlistSection({ wishlist }) {
  return (
    <section className="wishlist-section" id="wishlist">
      <div className="section-header">
        <p>SAVED PICKS</p>
        <h2>Your Wishlist</h2>
      </div>

      {wishlist.length === 0 ? (
        <p className="empty-cart">No wishlist items yet.</p>
      ) : (
        <div className="product-grid">
          {wishlist.map((item) => (
            <div className="product-card" key={item._id}>
              <img className="product-img" src={item.image} alt={item.name} />
              <p>{item.category}</p>
              <h3>{item.name}</h3>
              <span>₹{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistSection;