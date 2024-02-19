import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [userType, setUserType] = useState(""); // Almacena el tipo de usuario seleccionado
  const [userTypeError, setUserTypeError] = useState(""); // Mnsaje de error de selección de usuario

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleAddressLine1Change = (event) => {
    setAddressLine1(event.target.value);
  };
  const handleAddressLine2Change = (event) => {
    setAddressLine2(event.target.value);
  };
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 1) {
      if (!userType) {
        setUserTypeError("Please select a user type."); // Mensaje de error si no se ha seleccionado ninguna opción
        return;
      } if (!isValidEmail(email)) {
        setEmailError("Invalid email address");
        return;
      }
      setStep(step + 1);
    } else {

    }
  };

  /*const nextStep = () => {
    setStep(step + 1);
  };*/
  const prevStep = () => {
    setStep(step - 1);
  };
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setUserTypeError(""); // Restablecer el mensaje de error cuando se selecciona una opción
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
        <h1 className="text-xl font-bold mb-4 text-[#2c3441]">Sign Up</h1>

        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="userType" className="block text-[#2c3441] text-sm font-bold mb-1">
                Select User Type <span className="text-red-500">*</span>
              </label>
              <div id="userType" className="flex items-center mb-2">
                <input type="radio" id="client" name="userType" value="client" onChange={handleUserTypeChange} checked={userType === "client"} className="mr-2" />
                <label htmlFor="client" className="mr-4">I'm a customer</label>
                <input type="radio" id="expert" name="userType" value="expert" onChange={handleUserTypeChange} checked={userType === "expert"} className="mr-2" />
                <label htmlFor="expert">I'm an expert</label>
              </div>
              {userTypeError && <p className="text-red-500 text-sm font-extrabold -mt-2 mb-2">{userTypeError}</p>} {/* Ésye es el mensaje de error en caso de que no se seleccione alguna de las opciones */}
              <label htmlFor="firstName" className="block text-[#2c3441] text-sm font-bold mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-[#2c3441] text-sm font-bold mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-[#2c3441] text-sm font-bold mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#2c3441] text-sm font-bold mb-1">
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-[#2c3441] text-sm font-bold mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="addressLine1"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={handleAddressLine1Change}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="addressLine2"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                Address Line 2 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="addressLine2"
                value={addressLine2}
                onChange={handleAddressLine2Change}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipCode"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={handleZipCodeChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={handleCountryChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={handleStateChange}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex mb-3 items-center justify-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-1 mb-1">
              </input>
              <label
                htmlFor="state"
                className="block text-[#2c3441] text-sm font-bold mb-1 ">
                I agree terms and conditions <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={prevStep}
                className=" bg-[#dadde2]
                text-black 
                 py-2 px-4 
                 rounded-lg
                 hover:bg-gray-400 mr-2"
              >
                Back
              </button>
              <button
                type="submit"
                className=" bg-[#4CB5AB]
                 text-white py-2 
                 rounded-lg 
                 w-full
                 hover:bg-[#389389]"
              >
                Sign Up
              </button></div>
          </form>
        )}

        <div className="mt-4 flex items-center justify-center">
          <span className="text-[#2c3441]">Already have an account?</span>
          <Link to="/SolutionsPage" className="ml-1 text-[#4CB5AB] hover:text-[#389389] hover:underline">
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Signup;