import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const signInSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5153/api/User/login/",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        navigate("/DashboardPage");
      } else {
      }
    } catch (error) {
      // setError(error.message);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">
          Sign in to access Community Lab Alliance
        </h1>
        <form onSubmit={signInSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <Link to="/SignUpPage" className="text-blue-500 hover:underline">
                Don't have an account? Sign Up
              </Link>
              <Link
                to="/reset-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={signInSubmit}
          >
            Next
          </button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
