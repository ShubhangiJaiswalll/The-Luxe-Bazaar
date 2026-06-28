import toast from "react-hot-toast";
import API from "../api/api";

function CartSection({ cart, removeFromCart, isCartOpen, setIsCartOpen, user }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    if (!user) {
      toast.error("Please login before checkout");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      const { data } = await API.post("/orders", {
        userEmail: user.email,
        items: cart,
        total,
      });

      toast.success(data.message);
      setIsCartOpen(false);
    } catch (error) {
      toast.error("Order failed");
    }
  };

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? "show" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-drawer">
            <h3>Your cart is empty 🛍️</h3>
            <p>Add something luxe to your bag.</p>
          </div>
        ) : (
          <div className="drawer-items">
            {cart.map((item, index) => (
              <div className="drawer-item" key={index}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <h3>Total: ₹{total}</h3>
          <button className="checkout-btn" onClick={placeOrder}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}

export default CartSection;