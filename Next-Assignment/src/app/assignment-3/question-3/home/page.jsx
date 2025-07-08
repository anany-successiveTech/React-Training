import React from "react";
import Link from "next/link";
import "@/app/styles/homepage.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Home Page</h1>

      <p className="home-text">
        This page is part of our training assignment where we are learning how to build web pages using Next.js.
        It shows how we can make different pages and move between them easily.
      </p>

      <p className="home-text">
        In this task, we have created two pages: Home and About. You can click the links to go from one page to another
        without reloading the whole site. This helps us understand how simple websites work using Next.js.
      </p>

      <p className="home-text">
        The purpose of this page is to give a short introduction. You can visit the About page to read more about this project.
      </p>

      <Link href="/assignment-3/question-3" className="home-link">
        <span><i className="fa-solid fa-arrow-left"></i></span> Back
      </Link>
    </div>
  );
};

export default Home;
