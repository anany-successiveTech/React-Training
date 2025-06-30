import React from 'react';
import Link from 'next/link';
import '@/app/styles/dashboard/dashboardpage.css'

const Setting = () => {
  return (
    <div className="setting-container">
      <h1 className="setting-heading">Settings Page</h1>
      <p className="setting-text">
        This page allows you to manage and update your personal preferences for the dashboard application. Although it's a part of a training assignment, it mimics real-world features you would find in modern web applications.
      </p>
      <p className="setting-text">
        In a full application, this section could include options to change your password, update your profile info, toggle dark/light mode, and control notification settings. For now, it's kept simple to help understand routing and navigation between nested dashboard pages.
      </p>
      <Link href="/assignment-3/question-5/dashboard" className="back-link">
        <span><i className="fa-solid fa-arrow-left"></i></span> Back
      </Link>
    </div>
  );
};

export default Setting;
