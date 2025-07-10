"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "@/context/CountProvider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [addedItemName, setAddedItemName] = useState("");

  const handleAddToCart = (product) => {
    addProduct(product);
    setAddedItemName(product.title);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="products-page">
      <p style={{ textAlign: "center", margin: "2rem" }}>
        11. Build a shopping cart application using the useContext hook. Set up
        a context to manage the state of the shopping cart. Create components to
        display products and a shopping cart. Use the useContext hook to access
        the cart state and update it. Allow users to add and remove items from
        the cart. Display the total price of items in the cart.
      </p>

      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">Rs.{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {addedItemName} added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Page;
