import React, { useState } from 'react';
import './User.css';

const User = ({ id, name, email, onDelete }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleSave = () => {
    console.log(`Name: ${editedName}, Email: ${editedEmail}`);
  };

  return (
    <div className="user">
      <div className="user-info">
        <label htmlFor={`name-${id}`}>Name:</label>
        <input
          id={`name-${id}`}
          type="text"
          value={editedName}
          onChange={handleNameChange}
        />
        <label htmlFor={`email-${id}`}>Email:</label>
        <input
          id={`email-${id}`}
          type="email"
          value={editedEmail}
          onChange={handleEmailChange}
        />
      </div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default User;

