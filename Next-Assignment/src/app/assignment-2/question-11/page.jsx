"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import "@/app/styles/shoping.css";

const products = [
  {
    id: 1,
    title: "Refrigerator",
    description: "Double-door frost-free fridge",
    price: 100,
    image: "/pic-1.jpg",
  },
  {
    id: 2,
    title: "Washing Machine",
    description: "Front-load automatic washer",
    price: 100,
    image: "/pic-3.jpg",
  },
  {
    id: 3,
    title: "Laptop",
    description: "Powerful thin & light laptop",
    price: 100,
    image: "/pic-5.jpg",
  },
  {
    id: 4,
    title: "Drawer Cabinet",
    description: "Wooden 4-drawer cabinet",
    price: 100,
    image: "/pic-2.jpg",
  },
  {
    id: 5,
    title: "Laptop",
    description: "Powerful thin & light laptop",
    price: 100,
    image: "/pic-6.jpg",
  },
  {
    id: 6,
    title: "Dining Table",
    description: "Modern 6-seater wooden table",
    price: 100,
    image: "/pic-4.jpg",
  },
];

const Page = () => {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="products-page">
      <p style={{ textAlign: "center", margin: "2rem 2rem 6rem 2rem" }}>
        11. Build a shopping cart application using the useContext hook. Set up
        a context to manage the state of the shopping cart. Create components to
        display products and a shopping cart. Use the useContext hook to access
        the cart state and update it. Allow users to add and remove items from
        the cart. Display the total price of items in the cart.
      </p>

      <div className="products-list">
        {products.map((PorductItem) => (
          <div key={PorductItem.id} className="product-card">
            <img src={PorductItem.image} alt={PorductItem.title} className="product-image" />
            <div className="product-details">
              <h3>{PorductItem.title}</h3>
              <p>{PorductItem.description}</p>
              <p className="price">Rs.{PorductItem.price}</p>
              <button onClick={() => addProduct(PorductItem)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
