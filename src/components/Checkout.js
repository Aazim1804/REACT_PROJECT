import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "../Styles/Checkout.css";

const Checkout = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  // Temporary dummy data
  const orderItems = [
    { name: "Beef Wellington", price: 2850 },
    { name: "Dark Chocolate Fondant", price: 1250 },
  ];

  const total = orderItems.reduce((sum, i) => sum + i.price, 0);

  // 3. Create the click handler
  const handlePlaceOrder = () => {
    // In a real app, you'd validate the form inputs here
    console.log("Order Placed:", orderItems, total);

    // 4. Navigate to success page and pass the total via state
    navigate("/order-success", {
      state: { total: total }
    });
  };

  return (
    <div className="checkout-page">
      {/* HEADER */}
      <section className="checkout-header">
        <span className="checkout-eyebrow">RestoCabana</span>
        <h1 className="checkout-title">Order Summary</h1>
        <p className="checkout-subtitle">
          Please review your order and provide delivery details.
        </p>
      </section>

      {/* CONTENT */}
      <section className="checkout-layout">
        {/* LEFT — ORDER */}
        <div className="checkout-order">
          <h2>Your Order</h2>
          <ul className="checkout-items">
            {orderItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <strong>₹{item.price}</strong>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div className="checkout-form">
          <h2>Delivery Details</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label>Delivery Address</label>
            <textarea placeholder="Street, city, landmark…" />
          </div>
          <div className="form-group">
            <label>Preferred Delivery Time</label>
            <input type="time" />
          </div>

          {/* 5. Attach the onClick handler */}
          <button 
            className="place-order-btn" 
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;