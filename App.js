import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Output from './components/Output';

function App() {
  return (
    
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/output" element={<Output />} />
        <Route path="*" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
