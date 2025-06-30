import React from "react";
import "@/app/styles/dashboard/dashboardpage.css";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile Page</h1>
      <p className="profile-text">
        Hello! My name is "Anany More", and I am currently undergoing training
        in Next.js and modern web development. This profile section is a simple
        part of our assignment where we practice routing, nested layouts, and
        component design.
      </p>
      <p className="profile-text">
        I enjoy building responsive and functional user interfaces. Through this
        training, I’m gaining hands-on experience with topics like
        authentication, theming, context API, and routing in a real project
        environment.
      </p>
      <p className="profile-text">
        I look forward to learning more and improving my skills in front-end
        development using frameworks like React and Next.js.
      </p>
      <Link href="/assignment-3/question-5/dashboard" className="back-link">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>{" "}
        Back
      </Link>
    </div>
  );
};

export default Profile;
