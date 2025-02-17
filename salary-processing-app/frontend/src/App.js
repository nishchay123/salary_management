import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import EmployeeDashboard from './components/EmployeeDashboard';
import SalaryPage from './components/SalaryPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Updated the Route components */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/salary" element={<SalaryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;