import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
//import './App.css';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SolutionsPage" element={<SolutionsPage />} />
          <Route path="/SignUp" element={<SignUp />}  />
          {/* ... Otras rutas ... */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
