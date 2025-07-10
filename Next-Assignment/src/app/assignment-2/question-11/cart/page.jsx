"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context/CountProvider";
import { useRouter } from "next/navigation";
import "@/app/styles/shoping.css";

const Cart = () => {
  const router = useRouter();
  const {
    items,
    removeProduct,
    totalPrice,
    productCount,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  if (productCount === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }
  
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>
                {item.title} x <span>{item.quantity || 1}</span>
              </h3>
              <p>{item.description}</p>
              <p className="price">Rs.{item.price}</p>
              <button
                onClick={() => removeProduct(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
            <div className="quantity">
              <button
                onClick={() => decreaseQuantity(item)}
                style={{ marginRight: "0.2rem" }}
              >
                -
              </button>
              <button onClick={() => increaseQuantity(item)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total Items: {productCount}</p>
        <p>Total Price: Rs.{totalPrice.toFixed(2)}</p>
      </div>

      <button onClick={() => router.push("/assignment-2/question-11")}>
        Back to products
      </button>
    </div>
  );
};

export default Cart;
