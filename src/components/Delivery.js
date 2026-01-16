import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Delivery.css";

const menuData = {
  Starters: [
    { name: "Tuna Tartare", price: 1450 },
    { name: "Peruvian Ceviche", price: 1350 },
    { name: "Burrata & Heirloom Tomatoes", price: 1250 },
  ],
  "Main Course": [
    { name: "Beef Wellington", price: 2850 },
    { name: "Royal Lamb Biryani", price: 1950 },
    { name: "Black Cod with Miso", price: 2650 },
  ],
  Seafood: [
    { name: "Bouillabaisse", price: 2450 },
    { name: "Miso Glazed Black Cod", price: 2550 },
    { name: "Maryland Crab Cakes", price: 2350 },
  ],
  Desserts: [
    { name: "Dark Chocolate Fondant", price: 1250 },
    { name: "Crème Brûlée", price: 950 },
    { name: "Tiramisu della Casa", price: 1050 },
  ],
  Beverages: [
    { name: "Liquid Gold Cocktail", price: 850 },
    { name: "Vintage Red Wine Glass", price: 1250 },
    { name: "Artisan Cold Brew", price: 550 },
  ],
};

const categories = Object.keys(menuData);

const Delivery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cart, total },
    });
  };

  return (
    <div className="delivery-page">

      {/* HERO */}
      <section className="delivery-hero">
        <span className="delivery-eyebrow">RestoCabana Delivery</span>
        <h1 className="delivery-title">
          Delivered with <br /> Precision & Care
        </h1>
        <p className="delivery-subtitle">
          Our signature cuisine, thoughtfully packaged and delivered
          with the same elegance you expect at our table.
        </p>
      </section>

      {/* CATEGORY NAV */}
      <section className="delivery-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* MAIN CONTENT */}
      <section className="delivery-layout">

        {/* MENU */}
        <div className="delivery-menu">
          {menuData[activeCategory].map((item, index) => (
            <div className="delivery-item" key={index}>
              <div>
                <h3>{item.name}</h3>
                <span className="price">₹{item.price}</span>
              </div>
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
          ))}
        </div>

        {/* CART */}
        <aside className="delivery-cart">
          <h3>Your Order</h3>

          {cart.length === 0 ? (
            <p className="empty-cart">No items added</p>
          ) : (
            <>
              <ul>
                {cart.map((item, i) => (
                  <li key={i}>
                    {item.name}
                    <span>₹{item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              {/* ✅ FIXED BUTTON */}
              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </aside>

      </section>
    </div>
  );
};

export default Delivery;
