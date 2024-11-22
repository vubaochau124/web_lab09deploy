// /src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.username === username)) {
      alert('Username already exists');
      return;
    }

    const token = btoa(`${username}:${password}`);
    const newUser = { username, password, token };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert(`Registration successful. Token: ${token}`);
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold">Register</h2>
      <form onSubmit={handleRegister} className="mt-4">
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Register
        </button>
      </form>
      <button
        onClick={() => navigate('/login')}
        className="w-full bg-gray-500 text-white py-2 rounded mt-4"
      >
        Already have an account? Login
      </button>
    </div>
  );
};

export default Register;