"use client";

import "@/app/styles/dashboard/dashboardpage.css";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        5. Extend the application to include nested routes for a more complex
        user interface. Create a new section of your application (e.g., a
        Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
        Implement nested routing within this section using nested routes. Add
        navigation links to switch between the sub-pages within the Dashboard
        section. Customize the content displayed on each sub-page.
      </p>
      <div className="dashboard-container">
        <div className="dashboard">
          <Link
            href="/assignment-3/question-5/dashboard"
            className="subpage-link"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
