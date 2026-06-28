import { useState } from "react";

function Navbar({
  cartCount,
  wishlistCount,
  setIsCartOpen,
  user,
  setUser,
  setShowAuth,
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
  };

  return (
    <nav className="navbar">
      <div
        className="brand"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <img
          src="/logo/full-logo.jpeg"
          alt="The Luxe Bazaar"
          className="full-logo"
        />
      </div>

      <div className="nav-links">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </button>

        <button onClick={() => scrollToSection("shop")}>Shop</button>

        <button onClick={() => scrollToSection("shop")}>Beauty</button>

        <button onClick={() => scrollToSection("shop")}>Fashion</button>

        <button onClick={() => scrollToSection("wishlist")}>Wishlist</button>
      </div>

      <div className="nav-actions">
        <button className="icon-btn" onClick={() => scrollToSection("wishlist")}>
          ♡ <span>{wishlistCount}</span>
        </button>

        <button className="icon-btn" onClick={() => setIsCartOpen(true)}>
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
                    scrollToSection("wishlist");
                    setOpenMenu(false);
                  }}
                >
                  My Wishlist
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setOpenMenu(false);
                  }}
                >
                  My Cart
                </button>

                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-btn" onClick={() => setShowAuth(true)}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;