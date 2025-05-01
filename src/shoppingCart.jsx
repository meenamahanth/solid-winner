import React, { useState } from "react";
import "./shoppingCart.css";

function ShoppingCart() {
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>🛒 Shopping Cart</h1>
      <div className="items-list">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <span>{item}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>🛍️ Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              {item}
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
