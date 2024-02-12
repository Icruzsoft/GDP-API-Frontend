import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
//import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./components/SignUp";
import ContributePage from "./pages/ContributePage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ContributePage" element={<ContributePage />} />
          {/* ... Otras rutas ... */}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
