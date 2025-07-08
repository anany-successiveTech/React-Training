"use client";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/ThemeProvider";
import { CartContext } from "@/context/CountProvider";
import "@/app/styles/navBar.css";

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
      {[1, 2, 3].map((num) => (
        <Button
          key={num}
          name={`assignment.${num}`}
          value={num}
          onclick={() => handleOnclick(num)}
          active={activeQuestion === num}
        />
      ))}

      <div className="icon-container">
        <div className="theme-toggle">
          <button className="theme-button" onClick={toggleTheme}>
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

        <div className="navbar-cart">
          <button
            className="navbar-cart-button"
            onClick={() => router.push("/assignment-2/question-11/cart")}
          >
            <i
              className="fa-solid fa-cart-shopping fa-xl"
              style={{ color: theme === "light" ? "#1f1f1f" : "#f0f0f0" }}
            ></i>
            <span className="cart-count">{productCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
