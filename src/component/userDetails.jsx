import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css'; 

const UserDetails = ({ selectedUser }) => (
  <div className="userDetailsContainer">
    {selectedUser ? (
      <div>
        {selectedUser.avatar ? (
          <div className="loader"><CircularProgress size={30} /></div>
        ) : (
          <img src={selectedUser.avatar} alt={selectedUser.profile.username} className="avatar" />
        )}
        <h2>{selectedUser.profile.firstName} {selectedUser.profile.lastName}</h2>
        <div className="userInfo">
          <p><strong>Bio:</strong> {selectedUser.Bio}</p>
          <p><strong>Job Title:</strong> {selectedUser.jobTitle}</p>
          <p><strong>Username:</strong> {selectedUser.profile.username}</p>
          <p><strong>Email:</strong> {selectedUser.profile.email}</p>
        </div>
      </div>
    ) : (
      <p>No user selected</p>
    )}
  </div>
);

export default UserDetails;
