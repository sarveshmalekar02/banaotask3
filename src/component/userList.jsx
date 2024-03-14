import React from 'react';
import './style.css'; 

const UserList = ({ users, setSelectedUser }) => (
  <div className="userListContainer">
    {users.map(user => (
      <div key={user.id} onClick={() => setSelectedUser(user)} className="userItem">
        {user.avatar ? (
          <div className="loader"></div>
        ) : (
          <img src={user.avatar} alt="" className="userAvatar" />
        )}
        {user.profile.firstName} {user.profile.lastName}
      </div>
    ))}
  </div>
);

export default UserList;
