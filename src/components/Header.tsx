import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Store", path: "/store" },
  { name: "Membership", path: "/price-range" },
  { name: "Diet Plans", path: "/diet-plans" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsLoggedIn(true);
      const userData = JSON.parse(user);
      setUserName(userData.name || "User");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 z-50">
      <div className="flex justify-between items-center px-8 py-5">
        <img
          src="/logo-no-background-1.png"
          alt="Logo"
          className="w-[162px] h-12 object-contain"
        />
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => navigate(item.path)}
              className="text-white text-lg font-semibold cursor-pointer hover:underline"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span className="text-white text-lg font-semibold">
                Welcome, {userName}
              </span>
              <Button className="bg-gray-700 text-white" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="bg-gray-700 text-white"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                className="bg-gray-700 text-white"
                onClick={() => navigate("/signup")}
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
