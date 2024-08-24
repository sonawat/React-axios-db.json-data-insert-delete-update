import React, { useState } from 'react';
import axios from 'axios';
import './ins.css'

const Insert = () => {


  const pageStyle = {
    backgroundColor: ' rgb(2, 2, 72)', // Light blue background
    minHeight: '90vh',
    padding: '20px',
  };


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3452/user', {
        name,
        email
      });
      alert('Data added successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Failed to add data.');
    }
  };

  return (
    <div style={pageStyle}>
    <div className="form-container">
        <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input id='name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input id='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    </div>
  );
};
export default Insert