import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/PlaceOrder.css";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Extract cart and total from navigation state
  const cart = location.state?.cart || [];
  const total = location.state?.total || 0;

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevents page refresh

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    console.log("ORDER PLACED", cart, total); 

    // ✅ FIX: Passing BOTH total and cart to the next page
    navigate("/order-success", {
      state: { 
        total: total, 
        cart: cart 
      },
    });
  };

  return (
    <div className="placeorder-page">
      <div className="placeorder-wrapper">

        {/* ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Your Order</h2>

          {cart.map((item, i) => (
            <div key={i} className="order-item">
              <span>{item.name} {item.quantity ? `x${item.quantity}` : ""}</span>
              <strong>₹{item.price}</strong>
            </div>
          ))}

          <div className="order-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>
        </div>

        {/* DELIVERY FORM */}
        <form className="delivery-form" onSubmit={handlePlaceOrder}>
          <h2>Delivery Details</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" required />

          <label>Delivery Address</label>
          <textarea placeholder="Complete address..." required />

          <label>Preferred Delivery Time</label>
          <input type="time" />

          <button type="submit" className="placeorder-btn">
            Place Order
          </button>
        </form>

      </div>
    </div>
  );
};

export default PlaceOrder;