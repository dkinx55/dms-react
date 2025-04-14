import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-black text-black rounded">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <span>Don't have an account?</span>
          <button
            onClick={goToSignup}
            className="ml-2 text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
