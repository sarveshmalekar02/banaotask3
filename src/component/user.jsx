import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import UserDetails from './userDetails';
import UserList from './userList';
import './style.css'; 

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="userListContainer">
        <h3>User</h3>
        <br />
        {loading ? (
          <div className="loadingContainer">
            <CircularProgress color="secondary" />
          </div>
        ) : users.length > 0 ? (
          <UserList users={users} setSelectedUser={setSelectedUser} />
        ) : (
          <p>No data to show</p>
        )}
      </div>
      <div>
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default User;
