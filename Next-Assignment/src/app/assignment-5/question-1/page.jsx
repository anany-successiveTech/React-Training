"use client";

import React, { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  },[]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Blog Posts (Server-Side Rendered)</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1.5rem" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostsPage;
