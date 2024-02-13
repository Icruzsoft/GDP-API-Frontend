import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Sign in to access Community Lab Alliance</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <Link to="/SignUp" className="text-blue-500 hover:underline">Don't have an account? Sign Up</Link>
              <Link to="/reset-password" className="text-blue-500 hover:underline">Forgot Password</Link>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Next</button>
        </form>
      </div>
    </div>
  );
};

export default SolutionsPage;
