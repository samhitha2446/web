import React, { useState } from 'react';
import Output from './Output';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setMessage('Please fill all fields');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === formData.username && u.password === formData.password);
    if (user) {
      setLoggedInUser(user);
      setMessage('');
    } else {
      setMessage('Invalid username or password');
    }
  };

  if (loggedInUser) {
    return <Output user={loggedInUser} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        <div>
          <label>Username:</label><br />
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
