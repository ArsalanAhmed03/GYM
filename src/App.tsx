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
import FAQPage from "./screens/FaqsPage/FAQPage";
import WorkoutProgram from "./screens/WorkOutPage/WorkOutPage";
import GymEquipmentPage from "./screens/GymEquipment/GymEquipmentPage";
import { AuthProvider } from "./context/AuthContext";
import ContactUsPage from "./screens/ContactUs/ContactUsPage";
import DietPage from "./screens/Diet/DietPage";
import EventsPage from "./screens/Events/EventsPage";

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
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main App Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<AuthBox />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/price-range" element={<PriceRangePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/Faq" element={<FAQPage />} />
          <Route path="/Equipment" element={<GymEquipmentPage />} />
          <Route path="/Services" element={<WorkoutProgram />} />
          <Route path="/Contact" element={<ContactUsPage />} />
          <Route path="/Diet" element={<DietPage />} />
          <Route path="/Events" element={<EventsPage />} />



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
    </AuthProvider>
  );
};

export default App;
