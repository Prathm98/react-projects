import React from 'react';
import UserItem from './UserItem';

const Users = () => {
  const users = [
    {
      id: 1,
      login: "mojombo",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    },
    {
      id: 2,
      login: "defunkt",
      avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      html_url: "https://github.com/defunkt"
    },
    {
      id: 3,
      login: "pjhyett",
      avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      html_url: "https://github.com/pjhyett"
    },
  ];
  
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )  
}
const userStyle = {
  display: 'Grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users
