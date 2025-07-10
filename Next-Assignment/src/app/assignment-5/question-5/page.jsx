import axios from "axios";
import "@/app/styles/a5q5.css";
export const dynamic = "force-dynamic";

const FetchUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
const UsersPage = async () => {
  const users = await FetchUsers();

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        5. Create a Next.js component that fetches data from a public API (like
        JSONPlaceholder) using Axios and displays the results on the page. Use
        the App Router conventions and perform the data fetching on the server
        side.
      </p>

      <main className="container-for-user">
        <h1>Users List (SSR with Axios)</h1>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default UsersPage;
