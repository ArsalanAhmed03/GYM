import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import LoginPage from "./screens/LogIn/LogIn";
import { AuthBox } from "./components/AuthBox";
import AboutUsPage from "./screens/AboutUs/AboutUsPage";
import PriceRangePage from "./screens/PricePage/PriceRangePage";
import StorePage from "./screens/StorePageGym/StorePage";

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main App Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<AuthBox />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/price-range" element={<PriceRangePage />} />
        <Route path="/store" element={<StorePage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div>Dashboard</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
