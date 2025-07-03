"use client";

import { useState, useEffect } from "react";
import "@/app/styles/a5q3.css";

export default function Users() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setUsers(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        3. Enhance your Next.js component that fetches data from a public API by
        adding a loading indicator, such as a spinner. This indicator should be
        visible while the data is being fetched and hidden once the data has
        loaded successfully. Ensure the loading state is properly managed on the
        client side, especially when implementing retry functionality. Use the
        native fetch function and integrate this loading feedback seamlessly
        with the error handling and data display in your component.
      </p>
      <div className="users-container">
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Users</h1>

        {loading && <p className="users-loading">Loading...</p>}

        {error && (
          <div className="users-error">
            <p>{error}</p>
            <button className="users-retry-button" onClick={fetchUsers}>
              Retry
            </button>
          </div>
        )}

        {users && (
          <ul className="users-list">
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
