"use client";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/themeContext";
import "@/app/styles/icon.css";
import { CartContext } from "@/context/cartContext";

const Navbar = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { productCount } = useContext(CartContext);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleOnclick = (assignmentNo) => {
    setActiveQuestion(assignmentNo);
    router.push(`/assignment-${assignmentNo}`);
  };

  return (
    <div className="btn-container">
      {[1, 2].map((num) => (
        <Button
          key={num}
          name={`assignment.${num}`}
          value={num}
          onclick={(num) => handleOnclick(num)}
          active={activeQuestion === num}
        />
      ))}
      <div className="icons">
        <button className="darkButton" onClick={toggleTheme}>
          {theme === "light" ? (
            <i
              className="fa-solid fa-moon fa-2xl"
              style={{ color: "#000000" }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-sun fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
          )}
        </button>
      </div>
      <div className="cart-container">
        <button
          className="cart-button"
          onClick={() => router.push("/assignment-2/question-11/cart")}
        >
          {theme === "light" ? (
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
          ) : (
            <i
              className="fa-solid fa-cart-shopping fa-xl"
              style={{ color: "#f7f7f8" }}
            ></i>
          )}
          {productCount}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
