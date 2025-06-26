// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.


import React, { use } from 'react'
import UserCard from '../../../component/UserCard';
import '../../styles/home.css'

const User = () => {

  const users = [
    {
      name: 'Anany More',
      email: 'ananymore7523@gmail.com',
      imageUrl: '/anany.png'
    },
    {
      name: 'Aryan Thapak',
      email: 'aryanthapak3232@gmail.com',
      imageUrl: '/aryan.png'
    },
    {
      name: 'Yash Tripathi',
      email: 'yashtripathi2567@gmail.com',
      imageUrl: '/yash.png'
    },
    {
      name: 'Manoj Kumar',
      email:'manojkumar3443@gmail.com',
      imageUrl: '/manoj.png'
    }
  ]

  return (
    <div>
      <p style={{ textAlign: 'center', margin:'2rem'}}>
    2. Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.
      </p>
      <div className='container'>
        {users.map((user, index) => {
          return (<UserCard
              key={index}
              name={user.name}
              email={user.email}
              imageUrl={user.imageUrl}
          />)
        })}
      </div>
    </div>
  );
}

export default User
