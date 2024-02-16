import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SolutionsPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  // const handleEmailChange = (event) => {
  //   event.preventDefault();
  // };

  const signInSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5153/login/", {
        email,
      });
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/ContributePage");
      } else {
        console.log(response.data);
        console.log("LogIn failed");
      }
    } catch (error) {
      setError("Something's wrong");
    }
    // Handle form submission here
  };

  useEffect(() => {
    const imagen = document.getElementById("logo");
    if (imagen) {
      imagen.style.width = "65%";
      imagen.style.height = "auto";
      imagen.style.marginLeft = "auto";
      imagen.style.marginRight = "auto";
      imagen.style.marginBottom = "20px";
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <a href="/HomePage">
          <img id="logo" src="/src/images/logoCLA.png" alt="Community Lab Alliance Logo" />
        </a>
        <h1 className="text-2xl font-bold -mb-1">Sign In</h1>
        <h2 className="text-lg font-semibold mb-4">
          to access Community Lab Alliance
        </h2>
        <form onSubmit={signInSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mt-2 mb-2"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-lg mb-2"
            />
          </div>
          <button
            type="submit"
            className="w-full 
            bg-[#4CB5AB]
            hover:bg-[#389389]  
            text-white 
            mb-3 py-2 rounded-lg"
          >
            Sign In
          </button>

          <div className="mb-1">
            <div className="  flex justify-center">
              <label>
                Don't have an account?{" "}
                <Link to="/SignUp" className="hover:underline text-base text-[#4CB5AB] hover:text-[#389389]">
                  Sign Up
                </Link>
              </label>
            </div>
          </div>
          <div className="mb-0">
            <div className="flex justify-center">
              <Link
                to="/ForgotPassword"
                className="text-[#4CB5AB] hover:text-[#389389] hover:underline text-base"
              >
                Forgot Password
              </Link>
            </div>
          </div>
          
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SolutionsPage;