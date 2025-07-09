"use client";

import "@/app/styles/a5q9.css";
import withAuth from "@/hoc/withAuth"

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/assignment-5/question-9/login";
  };

  return (
    <div className="dashboardWrapper">
      <h1 className="dashboardTitle">Welcome to the Dashboard!</h1>
      <p className="dashboardText">You are successfully logged in.</p>
      <button className="dashboardButton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default withAuth(Dashboard);
