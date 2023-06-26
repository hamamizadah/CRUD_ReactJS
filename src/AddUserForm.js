import React, { useState } from 'react';
import './AddUserForm.css';

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const newUser = {
        id: Date.now(),
        name,
        email,
      };
      onUserAdded(newUser);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="add-user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUserForm;
