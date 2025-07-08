"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/styles/about.css";
import { AuthContext } from "@/context/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
useEffect(() => {
  if (!user) {
    localStorage.setItem("redirectAfterLogin", "/assignment-3/question-3/about");
    router.push("/assignment-3/question-1");
  }
}, [user, router]);

if (!user) return null;

  return (
    <div className="about-container">
      <h1 className="about-title">About This Project</h1>

      <p className="about-text">
        This project is a part of our training assignment on Next.js. We are
        learning how to build simple and structured web applications using the
        App Router system. I'm developing it as a dashboard-based layout where
        each assignment question is organized into its own route. The About page
        is one of those routes and it explains what the overall project is
        about. It gives visitors an idea of what has been implemented and how it
        connects with the learning goals.
      </p>

      <p className="about-text">
        On this page, you’ll find a summary of the topics covered in the
        project, like client-side routing, page protection using authentication,
        the use of Context API for global state, and the creation of custom
        hooks. It also shows how we can combine different small tasks into a
        single project using modular components. This helps in understanding how
        to structure projects better and make them more manageable.
      </p>

      <p className="about-text">
        Overall, this About page acts as an introduction to the entire
        assignment, helping both the developer and reviewers to understand the
        purpose and progress of the work done.
      </p>

      <Link href="/assignment-3/question-3" className="about-link">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>{" "}
        Back
      </Link>
    </div>
  );
};

export default About;
