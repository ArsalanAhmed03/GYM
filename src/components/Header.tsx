import React from "react";
import { Button } from "./ui/button";

const navItems = [
  "Home",
  "About",
  "Services",
  "Membership",
  "Diet Plans",
  "Contact",
];

const Header: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
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
            className="text-white text-lg font-semibold cursor-pointer hover:underline"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button className="bg-gray-700 text-white">Login</Button>
        <Button className="bg-gray-700 text-white">Register</Button>
      </div>
    </div>
  </nav>
);

export default Header;
