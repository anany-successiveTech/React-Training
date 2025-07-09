"use client";

import Link from "next/link";
import "@/app/styles/a5q9.css";

export default function Question14() {
  return (
    <div className="hocWrapper">
      <h1 className="hocHeading">Higher Order Component</h1>
      <p className="hocText">
        This example demonstrates route protection using a Higher-Order Component (HOC).
      </p>

      <ul className="hocList">
        <li>
          <Link href="/assignment-5/question-9/login" className="hocLink">
            Login Page
          </Link>
        </li>
        <li>
          <Link href="/assignment-5/question-9/dashboard" className="hocLink">
            Dashboard (Protected)
          </Link>
        </li>
      </ul>
    </div>
  );
}
