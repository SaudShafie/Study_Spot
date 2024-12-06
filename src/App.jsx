import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import StudySpotsList from "./pages/StudySpotsList";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/spots"
          element={
            <ProtectedRoute>
              <StudySpotsList />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
