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
  const [showAuth, setShowAuth] = useState(false);
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("luxeUser")) || null
);

  return (

    <>      <Toaster
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
/>
{showAuth && <AuthPage setUser={setUser} setShowAuth={setShowAuth} />}

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
/>
            <ProductModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        addToCart={addToCart}
      />
{user?.role === "admin" && (
  <AdminPanel productList={productList} setProductList={setProductList} />
)}
      <Newsletter />

      <Footer />

    </>
  );
}

export default App;