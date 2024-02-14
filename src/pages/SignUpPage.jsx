import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [checked, handleChange] = useState(false);

  const signUpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5153/api/User/register",
        {
          name,
          surname,
          email,
          phoneNumber,
          password,
          addressLine1,
          addressLine2,
          zipCode,
          city,
          state,
          country,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        navigate("/LoginPage");
      } else {
      }
    } catch (error) {
      setError("Something's not working");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <a href="/HomePage">
          <img
            id="logo"
            src="/src/images/logoCLA.png"
            alt="Community Lab Alliance Logo"
          />
        </a>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={signUpSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="surName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sur Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="surName"
              value={surname}
              onChange={(event) => setSurName(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="addressLine1"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="addressLine1"
              value={addressLine1}
              onChange={(event) => setAddressLine1(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="addressLine2"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address Line 2 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="addressLine2"
              value={addressLine2}
              onChange={(event) => setAddressLine2(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="zipCode"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(event) => setzipCode(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* checkbox para validar terminos y condiciones */}
          <div className="mb-4">
            <label
              htmlFor="checkbox"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Acepto terminos y condiciones
              <input
                id="cbox1"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                required
              ></input>
            </label>
          </div>
          <button
            type="submit"
            onClick={signUpSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <Link
          to="/LoginPage"
          className="mt-4 block text-blue-500 hover:underline"
        >
          Already have an account? Sign In
        </Link>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
