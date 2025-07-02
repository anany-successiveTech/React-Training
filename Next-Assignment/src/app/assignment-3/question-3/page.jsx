"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";
import "@/app/styles/homepage.css";

const Page = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleProtectedClick = (e) => {
    e.preventDefault();

    if (!user) {
      localStorage.setItem(
        "redirectAfterLogin",
        "/assignment-3/question-3/about"
      );
      router.push("/assignment-3/question-1");
    }
    router.push("/assignment-3/question-3/about");
  };

  return (
    <div className="question-containerpk">
      <p style={{ textAlign: "center", margin: "2rem" }}>
        3. Create pages: Home and About. Implement file routing. Create
        navigation links to switch between the Home and About pages. Display
        appropriate content on each page. Add a "404 Not Found" page for any
        invalid routes.
      </p>

      <div className="sub-navbar">
        <Link href="/assignment-3/question-3/home" className="sub-link">
          Home
        </Link>
        <Link
          href="/assignment-3/question-3/about"
          className="sub-link"
          onClick={handleProtectedClick}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Page;
