import axios from 'axios';
import UserList from '@/app/assignment-5/question-6/userList'
import '@/app/styles/a5q6.css'

const fetchUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return { users: res.data, error: null };
  } catch (err) {
    return { users: null, error: 'Failed to load users. Please try again.' };
  }
};

const UsersPage = async () => {
  const { users, error } = await fetchUsers();

  return (
    <div className="a6q6-container">
      <h1 className="a6q6-title">Users List</h1>
      <UserList initialUsers={users} initialError={error} />
    </div>
  );
};

export default UsersPage;
