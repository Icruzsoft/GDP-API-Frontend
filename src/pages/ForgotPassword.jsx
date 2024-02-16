import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isOtpButtonDisabled, setIsOtpButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isValidNewPassword, setIsValidNewPassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const handleNewPasswordChange = (event) => {
    const newPasswordValue = event.target.value;
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPasswordValue);
    setIsValidNewPassword(isValidPassword);
    setNewPassword(newPasswordValue);
  };
  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setPasswordsMatch(confirmPasswordValue === newPassword);
    setConfirmPassword(confirmPasswordValue);
  };
  const handleOtpCodeChange = (event) => {
    setOtpCode(event.target.value);
  };
  const handleSubmitStep1 = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
      setStep(2);
    }
  };
  const handleSubmitStep2 = (event) => {
    event.preventDefault();
    // Realizar validaciones necesarias para el paso 2
    // Si las validaciones son exitosas, establecer el paso en 3
    setStep(3);
  };
  const handleSubmitStep3 = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    };
    setPasswordsMatch(true);
    // Continuar con el envío del formulario si las contraseñas coinciden
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
  const handleSendOtp = () => {
    // Simulate sending OTP message
    console.log("OTP sent!");
    setIsOtpButtonDisabled(true); // Disable the button
    setCountdown(60); // Reset countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval); // Stop countdown when it reaches 0
          setIsOtpButtonDisabled(false); // Enable the button
        }
        return prevCountdown - 1; // Decrement countdown
      });
    }, 1000); // Update countdown every second
  };
  useEffect(() => {
    // Clean up interval on component unmount
    return () => clearInterval();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <a href="/HomePage">
          <img id="logo" src="/src/images/logoCLA.png" alt="Community Lab Alliance Logo" />
        </a>

        {step === 1 && (
          <form onSubmit={handleSubmitStep1}>
            <h1 className="text-xl font-bold mb-4">Forgot Password</h1>
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
              Send OTP
              <FontAwesomeIcon icon={faArrowRight} className="ml-1 align-middle" />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmitStep2}>
            <h1 className="text-xl font-bold mb-4">Forgot Password</h1>
            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">
                  Entered email
                </label>
                <div className="border border-gray-300 p-2 rounded-lg">
                  {email}
                  <button
                    className="ml-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-400"
                    onClick={prevStep}
                  >
                    Change
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="otpCode" className="block text-gray-700 text-sm font-semibold mb-1">
                  Enter the one-time password sent to your email address. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="otpCode"
                  value={otpCode}
                  onChange={handleOtpCodeChange}
                  placeholder="• • • • • •"
                  required
                  className="border border-gray-300 p-2 rounded-lg w-1/2"
                />
                <button
                  onClick={handleSendOtp}
                  disabled={isOtpButtonDisabled}
                  className={`bg-[#4CB5AB] hover:bg-[#389389] text-white ml-4 py-2 px-3 rounded-lg ${isOtpButtonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  {isOtpButtonDisabled ? `Resend OTP (${countdown}s)` : "Resend OTP"}
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#4CB5AB] text-white py-2 rounded-lg w-full hover:bg-[#389389]"
                >
                  Verify
                </button>
              </div>

            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmitStep3}>
            <h1 className="text-xl font-bold mb-4">Create New Password</h1>
            <div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-semibold mb-1">
                  New Password <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    required
                    className={`w-full border ${!isValidNewPassword ? "border-red-500" : "border-gray-300"} p-2 rounded-lg`}
                  />
                  {!isValidNewPassword && (
                    <p className="text-red-500 text-sm mt-1">Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>
                  )}
                </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-1">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    className={`w-full border ${!passwordsMatch ? "border-red-500" : "border-gray-300"} p-2 rounded-lg`}
                  />
                  {!passwordsMatch && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                  )}
                </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#4CB5AB] text-white py-2 rounded-lg w-full hover:bg-[#389389]"
                >
                  Change Password
                </button>
                <div className="flex items-center justify-center mt-4">
                </div>
              </div>
            </div>
          </form>
        )}
        <div className="mt-4 flex items-center justify-center">
          <Link to="/LoginPage" className="ml-1 text-[#4CB5AB] hover:text-[#389389] hover:underline">
            Back to LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;