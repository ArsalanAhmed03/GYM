import React from "react";

const footerItems = [
  "Home",
  "About",
  "Services",
  "Membership",
  "Diet Plans",
  "Contact",
];

const Footer: React.FC = () => (
  <footer className="w-full bg-[#06090dcc] text-white px-12 py-8">
    <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-start md:items-center flex-wrap">
        <div className="flex items-start gap-4">
          <img
            src="/logo-no-background-1.png"
            alt="CaloryCut"
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="flex flex-col text-sm leading-6">
            <span>123 Fitness St, Gym City, 12345</span>
            <span>(123) 456-7890</span>
            <span>info@gymportal.com</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img src="/FB.svg" alt="Instagram" className="w-4 h-4" />
          <img src="/Instagram.svg" alt="Facebook" className="w-4 h-4" />
          <img src="/twitter.svg" alt="Twitter" className="w-4 h-4" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8 text-sm text-gray-400">
        {footerItems.map((item, index) => (
          <span key={index} className="hover:text-white cursor-pointer">
            {item}
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-6 text-sm text-gray-400">
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">
          Terms of Service
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;