"use client";
import React from "react";
import Link from "next/link";
import "@/app/styles/dashboard/dashboardpage.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-box">
        {/* <h1 className="dashboard-heading">Dashboard Page</h1> */}
        <div className="dashboard-links">
          <Link href="/assignment-3/question-5" className="subpage-link">
            <span>
              <i className="fa-solid fa-arrow-left"></i>
            </span>{" "}
            Back
          </Link>
          <br />
          <Link
            href="/assignment-3/question-5/dashboard/setting"
            className="subpage-link"
          >
            Setting
          </Link>
          <br />
          <Link
            href="/assignment-3/question-5/dashboard/profile"
            className="subpage-link"
          >
            Profile
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
