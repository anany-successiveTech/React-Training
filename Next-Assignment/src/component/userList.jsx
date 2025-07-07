"use client";
import "@/app/styles/a5q11.css";

export default function UserList({ data }) {
  return (
    <div className="userListWrapper">
      <h2 className="userListTitle">User List</h2>
      <ul className="userList">
        {data?.map((user) => (
          <li key={user.id} className="userListItem">
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
