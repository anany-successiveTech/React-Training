'use client';

import { useState } from 'react';
import '@/app/styles/a5q2.css'

export default function UserList({ initialUsers, initialError }) {
  const [users, setUsers] = useState(initialUsers || []);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // console.log(res);
      
      if (!res.ok) throw new Error();
      const data = await res.json();
      // console.log(res);
      setUsers(data);
    } catch {
      setError('Failed to load users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="loading">Loading...</p>;

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button className="retry-button" onClick={retryFetch}>Retry</button>
      </div>
    );
  }

  return (
    <div className='main-user'>
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
    </div>
  );
}
