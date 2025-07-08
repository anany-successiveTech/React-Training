"use client";

import Input from "@/component/Input";
import React, { useState } from "react";
import "@/app/styles/a4q7.css";

const Page = () => {
  const [searchedItem, setSearchedItem] = useState("");

  const handleSearch = (event) => {
    setSearchedItem(event.target.value);
  };
  const products = [
    { id: 1, title: "Refrigerator", price: 100, image: "/pic-1.jpg" },
    { id: 2, title: "Washing Machine", price: 100, image: "/pic-3.jpg" },
    { id: 3, title: "Laptop", price: 100, image: "/pic-5.jpg" },
    { id: 4, title: "Drawer Cabinet", price: 100, image: "/pic-2.jpg" },
    { id: 5, title: "Laptop", price: 100, image: "/pic-6.jpg" },
    { id: 6, title: "Dining Table", price: 100, image: "/pic-4.jpg" },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchedItem.toLowerCase())
  );

  return (
    <>
      <div className="search-page">
        <p className="search-instructions">
          7. Design a search filter component that consists of an input field.
          As the user types into the input, use controlled components to filter
          a list of items displayed below. The list should dynamically update to
          show only items matching the search query.
        </p>

        <div className="finder">
          <Input
            type="text"
            placeholder="Search Product....."
            onChange={handleSearch}
            value={searchedItem}
          />
        </div>

        <div className="searched-result-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <strong>${product.price}</strong>87
              </div>
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
