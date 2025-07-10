"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import axios from "axios";
import "@/app/styles/a5q7.css";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );

      if (response.status === 201) {
        setMessage("Post created successfully!");
        setTitle("");
        setBody("");
      }
    } catch (err) {
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        7. Create a Component in Next.js that renders a form allowing the user
        to input data, such as a post title and content. On form submission, use
        Axios to send a POST request to a public API endpoint, submitting the
        user's input data. Handle success and error states appropriately in the
        UI.
      </p>

      <div className="a7q7-form-container">
        <h1 className="a7q7-title">Create New Post</h1>

        <form onSubmit={handleSubmit} className="a7q7-form">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="body">Content</label>
          <textarea
            id="body"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {message && <p className="a7q7-success">{message}</p>}
        {error && <p className="a7q7-error">{error}</p>}
      </div>
    </div>
  );
}
