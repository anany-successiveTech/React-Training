import axios from "axios";
import UserList from "@/app/assignment-5/question-6/userList";
import "@/app/styles/a5q6.css";
export const dynamic = "force-dynamic";

const fetchUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return { users: res.data, error: null };
  } catch (err) {
    return { users: null, error: "Failed to load users. Please try again." };
  }
};

const UsersPage = async () => {
  const { users, error } = await fetchUsers();

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        6. Modify your previous Next.js Server Component that fetches data with
        Axios to include error handling. If the request fails, display an error
        message and provide a retry button so the user can attempt fetching the
        data again. Implement the retry logic in a Client Component to handle
        user interaction.
      </p>

      <div className="a6q6-container">
        <h1 className="a6q6-title">Users List</h1>
        <UserList initialUsers={users} initialError={error} />
      </div>
    </div>
  );
};

export default UsersPage;
