import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import API from "./api/api";
import productData from "./data/product";

import "./styles/global.css";

import PromoBanner from "./components/PromoBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodSection from "./components/MoodSection";
import ProductSection from "./components/ProductSection";
import CategorySection from "./components/CategorySection";
import Testimonials from "./components/Testimonials";
import WishlistSection from "./components/WishlistSection";
import CartSection from "./components/CartSection";
import ProductModal from "./components/ProductModal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [productList, setProductList] = useState(productData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [showAuth, setShowAuth] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("luxeUser")) || null
  );

  // New App Navigation
  const [currentView, setCurrentView] = useState("home");

  // Orders
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("luxeOrders")) || []
  );

  // Checkout Address
  const [address, setAddress] = useState("");

  // Payment
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");

        if (data.length > 0) {
          setProductList(data);
        }
      } catch (error) {
        console.log("Using Local Products");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("luxeOrders", JSON.stringify(orders));
  }, [orders]);

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
      toast.success(`${product.name} added to wishlist`);
    } else {
      toast("Already in wishlist ❤️");
    }
  };

  const placeOrder = () => {
    if (!user) {
      setShowAuth(true);
      toast.error("Please login first");
      return;
    }

    if (!address.trim()) {
      toast.error("Please enter delivery address");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + Number(item.price), 0),
      address,
      paymentMethod,
      status: "Order Placed",
      date: new Date().toLocaleString(),
    };

    setOrders([newOrder, ...orders]);
    setCart([]);
    setAddress("");
    setCurrentView("orders");

    toast.success("Order placed successfully!");
  };
  return (
  <>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000,
        style: {
          background: "#3b241c",
          color: "#fffaf5",
          borderRadius: "14px",
        },
      }}
    />

    <PromoBanner />

    <Navbar
      cartCount={cart.length}
      wishlistCount={wishlist.length}
      setIsCartOpen={setIsCartOpen}
      user={user}
      setUser={setUser}
      setShowAuth={setShowAuth}
      setCurrentView={setCurrentView}
    />

    {showAuth && (
      <AuthPage
        setUser={setUser}
        setShowAuth={setShowAuth}
      />
    )}

    {currentView === "home" && (
      <>
        <Hero />

        <MoodSection />

        <ProductSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredProducts={filteredProducts}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          setSelectedProduct={setSelectedProduct}
        />

        <CategorySection />

        <Testimonials />

        <WishlistSection wishlist={wishlist} />

        <CartSection
  cart={cart}
  removeFromCart={removeFromCart}
  isCartOpen={isCartOpen}
  setIsCartOpen={setIsCartOpen}
  user={user}
  setCurrentView={setCurrentView}
/>

        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          addToCart={addToCart}
        />

        {user?.role === "admin" && (
          <AdminPanel
            productList={productList}
            setProductList={setProductList}
          />
        )}
      </>
    )}

    {currentView === "profile" && (
      <div className="section">
        <h2>👤 My Profile</h2>

        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role || "Customer"}</p>

        <button
          className="primary-btn"
          onClick={() => setCurrentView("orders")}
        >
          View Orders
        </button>
      </div>
    )}

    {currentView === "orders" && (
      <div className="section">
        <h2>📦 My Orders</h2>

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order.id}>
              <h3>Order #{order.id}</h3>

              <p>Status: {order.status}</p>

              <p>Total: ₹{order.total}</p>

              <p>{order.date}</p>

              <p>{order.address}</p>
            </div>
          ))
        )}

        <button
          className="primary-btn"
          onClick={() => setCurrentView("home")}
        >
          Continue Shopping
        </button>
      </div>
    )}

        {currentView === "checkout" && (
      <div className="section">
        <h2>🛍 Checkout</h2>

        <textarea
          placeholder="Enter delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: "100%",
            minHeight: "120px",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        />

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <option>Cash on Delivery</option>
          <option>Razorpay</option>
        </select>

        <h3>
          Total :
          ₹
          {cart.reduce(
            (sum, item) => sum + Number(item.price),
            0
          )}
        </h3>

        <button
          className="primary-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

        <button
          className="primary-btn"
          style={{ marginLeft: "10px" }}
          onClick={() => setCurrentView("home")}
        >
          Back
        </button>
      </div>
    )}

    <Newsletter />

    <Footer />
  </>
);
}

export default App;