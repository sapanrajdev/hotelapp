// Checkout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/success");
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Review your order and click the button to complete the checkout.</p>
      <button onClick={handleCheckout}>Complete Checkout</button>
    </div>
  );
};

export default Checkout;
