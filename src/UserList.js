import React, { useState, useEffect } from 'react';
import User from './User';
import './UserList.css';

const UserList = ({ users, onDelete }) => {
  const [editUserId, setEditUserId] = useState(null);
  const [editedEmail, setEditedEmail] = useState('');
  const [editedName, setEditedName] = useState('');
  const [usersList, setUsers] = useState([]);

  useEffect(() => {
    setUsers(users);
  }, [users]);

  const handleDelete = (userId) => {
    onDelete(userId);
  };

  const handleEdit = (userId, email, name) => {
    setEditUserId(userId);
    setEditedEmail(email);
    setEditedName(name);
  };

  const handleSave = (userId) => {
    const updatedUsers = usersList.map((user) => {
      if (user.id === userId) {
        return { ...user, email: editedEmail,name: editedName };
      }
      return user;
    });

    setUsers(updatedUsers);
    setEditUserId(null);
    setEditedEmail('');
    setEditedName('');
  };

  return (
    <div className="user-list">
      <h2 className="user-list-title">User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                {editUserId === user.id ? (
                  <input
                    type="text"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editUserId === user.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editUserId === user.id ? (
                  <button
                    className="save-button"
                    onClick={() => handleSave(user.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user.id, user.email)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
