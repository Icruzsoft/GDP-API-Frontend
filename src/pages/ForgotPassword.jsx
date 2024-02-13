import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleAddressLine1Change = (event) => {
    setAddressLine1(event.target.value);
  };

  const handleAddressLine2Change = (event) => {
    setAddressLine2(event.target.value);
  };

  const handleSubmitStep1 = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
      setStep(step + 1);
    }
  };

  const handleSubmitStep2 = (event) => {
    event.preventDefault();
    // Handle submission for step 2
  };

  const nextStep = () => {
    if (step === 1) {
      handleSubmitStep1();
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <a href="/HomePage">
          <img id="logo" src="/src/images/logoCLA.png" alt="Community Lab Alliance Logo" />
        </a>
        <h1 className="text-xl font-bold mb-4">Forgot Password</h1>

        {step === 1 && (
          <form onSubmit={handleSubmitStep1}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className={`w-full border ${emailError ? "border-red-500" : "border-gray-300"} p-2 rounded-lg`}
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#4CB5AB] text-white py-2 rounded-lg hover:bg-[#389389]"
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} className="ml-1 align-middle" />
            </button>
          </form>
        )}

        {step === 2 && (
          <div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Entered email
              </label>
              <div className="border border-gray-300 p-2 rounded-lg">
                {email}
                <button
                  className="ml-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
                  onClick={prevStep}
                >
                  Change
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmitStep2}>
              <div className="mb-4">
                <label
                  htmlFor="addressLine1"
                  className="block text-gray-700 text-sm font-bold mb-1"
                >
                  Address Line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  value={addressLine1}
                  onChange={handleAddressLine1Change}
                  placeholder="Enter CAPTCHA"
                  required
                  className=" border border-gray-300 p-2 rounded-lg"
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 mr-2"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#4CB5AB] text-white py-2 rounded-lg w-full hover:bg-[#389389]"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-4 flex items-center justify-center">
          <Link to="/SolutionsPage" className="ml-1 text-[#4CB5AB] hover:text-[#389389] hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
