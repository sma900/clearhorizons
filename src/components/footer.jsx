import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo.jpeg'; // Replace with the correct path to your logo

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-4 md:px-8 flex flex-col items-center md:flex-row md:justify-between">
      {/* Left Section - Social Media Links */}
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        <div className="flex gap-6 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Center Section - Logo and Text */}
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <img src={logo} alt="Logo" className="h-20 w-auto object-contain mb-2" />
        <span className="text-2xl font-semibold text-center">Clear Horizons</span> {/* Centered Text */}
      </div>

      {/* Right Section - Terms and Privacy Links */}
      <div className="flex flex-col items-center md:items-end">
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/terms-and-conditions"
            className="text-gray-400 hover:text-white text-sm"
          >
            Terms and Conditions
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white text-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
