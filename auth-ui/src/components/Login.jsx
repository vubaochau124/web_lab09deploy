// /src/components/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputToken, setInputToken] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.token === inputToken);

    if (validUser) {
      dispatch(setToken(inputToken));
      navigate('/');
    } else {
      alert('Invalid token');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block mb-1">Token</label>
          <input
            type="text"
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>
      <button
        onClick={() => navigate('/register')}
        className="w-full bg-gray-500 text-white py-2 rounded mt-4"
      >
        Don't have an account? Register
      </button>
    </div>
  );
};

export default Login;