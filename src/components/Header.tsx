import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Store", path: "/store" },
  { name: "Membership", path: "/price-range" },
  { name: "Diet Plans", path: "/diet" },
  { name: "Contact", path: "/contact" },
  { name: "Events", path: "/Events" },

];

const containerVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10, color: "#ffffff" },
  visible: { opacity: 1, y: 0, color: "#ffffff" },
};

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center px-8 py-5">
        <motion.img
          src="/logo-no-background-1.png"
          alt="Logo"
          className="w-[162px] h-12 object-contain cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="flex items-center gap-8"
          variants={containerVariants}
        >
          {navItems.map((item, index) => (
            <motion.span
              key={index}
              onClick={() => navigate(item.path)}
              className="text-lg font-semibold cursor-pointer hover:underline"
              variants={itemVariants}
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.name}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          variants={containerVariants}
        >
          {isAuthenticated ? (
            <>
              <motion.span
                className="text-lg font-semibold"
                variants={itemVariants}
              >
                Welcome, {user?.username || user?.email || "User"}
              </motion.span>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button className="bg-gray-700 text-white" onClick={handleLogout}>
                  Logout
                </Button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button className="bg-gray-700 text-white" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button className="bg-gray-700 text-white" onClick={() => navigate("/signup")}>
                  Register
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
