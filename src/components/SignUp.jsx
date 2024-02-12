import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const signUpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5153/api/User/register",
        {
          firstName,
          surName,
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
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/Dashboard");
      } else {
        console.log(response.data);
        console.log("LogIn failed");
      }
    } catch (error) {
      setError("Something's wrong");
    }
    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={signUpSubmit}>
          {/* contenedor para nombre */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name *
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para apellido */}
          <div className="mb-4">
            <label
              htmlFor="surName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Sur Name *
            </label>
            <input
              type="text"
              value={surName}
              onChange={(event) => setSurName(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para telefono */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number *
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para contraseña */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para linea de calle 1 */}
          <div className="mb-4">
            <label
              htmlFor="addressLine1"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address Line 1 *
            </label>
            <input
              type="text"
              value={addressLine1}
              onChange={(event) => setAddressLine1(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para linea de calle 2 */}
          <div className="mb-4">
            <label
              htmlFor="addressLine2"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address Line 2 *
            </label>
            <input
              type="text"
              value={addressLine1}
              onChange={(event) => setAddressLine2(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* contenedor para codigo postal */}
          <div className="mb-4">
            <label
              htmlFor="zipCode"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              zip Code *
            </label>
            <input
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* botón para asignar valores a backend */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <Link
          to="/SolutionsPage"
          className="mt-4 block text-blue-500 hover:underline"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
