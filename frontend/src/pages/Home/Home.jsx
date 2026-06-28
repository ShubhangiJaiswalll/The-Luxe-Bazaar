import { products } from "../../data/product";

function Home() {
  return (
    <div className="home-page">
      <section className="section">
        <p className="section-subtitle">TRENDING NOW</p>
        <h1 className="section-title">Luxury Finds You’ll Love</h1>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <h4>₹{product.price}</h4>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;