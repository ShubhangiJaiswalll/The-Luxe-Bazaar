import { useState } from "react";

function Navbar({
  cartCount,
  wishlistCount,
  setIsCartOpen,
  user,
  setUser,
  setShowAuth,
  setCurrentView,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const logout = () => {
    localStorage.removeItem("luxeToken");
    localStorage.removeItem("luxeUser");
    setUser(null);
    setOpenMenu(false);
    setCurrentView("home");
  };

  return (
    <nav className="navbar">
      <div
        className="brand"
        onClick={() => {
          setCurrentView("home");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img
          src="/logo/full-logo.jpeg"
          alt="The Luxe Bazaar"
          className="full-logo"
        />
      </div>

      <div className="nav-links">
        <button
          onClick={() => {
            setCurrentView("home");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            setCurrentView("home");
            setTimeout(() => scrollToSection("shop"), 100);
          }}
        >
          Shop
        </button>

        <button
          onClick={() => {
            setCurrentView("home");
            setTimeout(() => scrollToSection("shop"), 100);
          }}
        >
          Beauty
        </button>

        <button
          onClick={() => {
            setCurrentView("home");
            setTimeout(() => scrollToSection("shop"), 100);
          }}
        >
          Fashion
        </button>

        <button
          onClick={() => {
            setCurrentView("home");
            setTimeout(() => scrollToSection("wishlist"), 100);
          }}
        >
          Wishlist
        </button>
      </div>

      <div className="nav-actions">
        <button
          className="icon-btn"
          onClick={() => {
            setCurrentView("home");
            setTimeout(() => scrollToSection("wishlist"), 100);
          }}
        >
          ♡ <span>{wishlistCount}</span>
        </button>

        <button
          className="icon-btn"
          onClick={() => {
            setCurrentView("home");
            setIsCartOpen(true);
          }}
        >
          🛒 <span>{cartCount}</span>
        </button>

        {user ? (
          <div className="user-menu">
            <button
              className="login-btn"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Hi, {user.name?.split(" ")[0]} 👤
            </button>

            {openMenu && (
              <div className="user-dropdown">
                <p>{user.email}</p>

                <button
                  onClick={() => {
                    setCurrentView("profile");
                    setOpenMenu(false);
                  }}
                >
                  👤 My Profile
                </button>

                <button
                  onClick={() => {
                    setCurrentView("orders");
                    setOpenMenu(false);
                  }}
                >
                  📦 My Orders
                </button>

                <button
                  onClick={() => {
                    setCurrentView("checkout");
                    setOpenMenu(false);
                  }}
                >
                  💳 Checkout
                </button>

                <button
                  onClick={() => {
                    setCurrentView("home");
                    setTimeout(() => {
                      scrollToSection("wishlist");
                    }, 100);
                    setOpenMenu(false);
                  }}
                >
                  ❤️ My Wishlist
                </button>

                <button
                  onClick={() => {
                    setCurrentView("home");
                    setIsCartOpen(true);
                    setOpenMenu(false);
                  }}
                >
                  🛒 My Cart
                </button>

                <button onClick={logout}>
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="login-btn"
            onClick={() => setShowAuth(true)}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;