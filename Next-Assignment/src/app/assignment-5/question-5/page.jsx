import axios from 'axios';
import '@/app/styles/a5q5.css'

const FetchUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
}
const UsersPage = async () =>{
  const users = await FetchUsers();

  return (
    <main className="container-for-user">
      <h1>Users List (SSR with Axios)</h1>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
export default UsersPage