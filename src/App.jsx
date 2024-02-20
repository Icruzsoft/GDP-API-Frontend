import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
//import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ContributePage from "./pages/ContributePage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassword from './pages/ForgotPassword'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/ContributePage" element={<ContributePage />} />
          <Route path="/SolutionsPage" element={<SolutionsPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />}  />
          {/* ... Otras rutas ... */}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
