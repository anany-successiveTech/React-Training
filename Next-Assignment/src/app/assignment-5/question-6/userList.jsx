'use client';

import { useState } from 'react';
import "@/app/styles/a5q6.css"

const UserList = ({ initialUsers, initialError }) => {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUsers(data);
    } catch {
      setError('Retry failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="a6q6-loading">Loading...</p>;

  if (error) {
    return (
      <div className="a6q6-error-block">
        <p className="a6q6-error-text">{error}</p>
        <button className="a6q6-retry-button" onClick={retryFetch}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <ul className="a6q6-user-list">
      {users?.map((user) => (
        <li key={user.id} className="a6q6-user-item">
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
}
export default UserList