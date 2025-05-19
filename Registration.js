import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    gender: '',
    firstname: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (!formData.username || !formData.email || !formData.gender || !formData.firstname || !formData.dob || !formData.password) {
      setMessage('Please fill all fields');
      return;
    }
    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      username: formData.username,
      email: formData.email,
      gender: formData.gender,
      firstname: formData.firstname,
      dob: formData.dob,
      password: formData.password
    });
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Registration successful!');
    setFormData({
      username: '',
      email: '',
      gender: '',
      firstname: '',
      dob: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>First Name:</label>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Registration;
