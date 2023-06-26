import React, { useState } from 'react';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserAdded = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleUserDeleted = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <h1>CRUD Web</h1>
      <div className="user-list-container">
        <UserList users={users} onDelete={handleUserDeleted} />
      </div>
      <div className="add-user-form-container">
        <AddUserForm onUserAdded={handleUserAdded} />
      </div>
    </div>
  );
};

export default App;
