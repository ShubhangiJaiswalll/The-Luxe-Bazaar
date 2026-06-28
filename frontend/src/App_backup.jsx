import { useEffect, useState } from "react";
import API from "./api/api";
import productData from "./data/product";
import toast from "react-hot-toast";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodSection from "./components/MoodSection";
import ProductSection from "./components/ProductSection";
import CategorySection from "./components/CategorySection";
import Testimonials from "./components/Testimonials";
import WishlistSection from "./components/WishlistSection";
import CartSection from "./components/CartSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import { useEffect, useState } from "react";
import API from "./api/api";
import PromoBanner from "./components/PromoBanner";

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProducts();
}, []);
const [productList, setProductList] = useState(productData);
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");

      if (data && data.length > 0) {
        setProductList(data);
      }
    } catch (error) {
      console.log("Backend not connected, using local products");
    }
  };

  fetchProducts();
}, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = productList.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" || product.category === selectedCategory;

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

  return (
    <>
    <PromoBanner />
<Navbar
  cartCount={cart.length}
  wishlistCount={wishlist.length}
  setIsCartOpen={setIsCartOpen}
/>
      <Navbar
  cartCount={cart.length}
  wishlistCount={wishlist.length}
  setIsCartOpen={setIsCartOpen}
/>

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
/>

      <ProductModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        addToCart={addToCart}
      />

      <Newsletter />

      <Footer />
    </>
  );
}

export default App;