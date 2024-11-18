import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Replace with the correct path to your logo

const Footer = () => {
  return (
    <footer className="w-full bg-gray-300 text-black py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section - Logo and Brand Name */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src={logo}
          alt="Logo"
          className="h-20 w-auto object-contain mb-2"
          style={{ background: "transparent" }}
        />
        <span className="text-2xl font-semibold">Clear Horizons</span>
      </div>

      {/* Center Section - Contact Us */}
      <div className="flex flex-col items-center text-center md:text-left mt-6 md:mt-0">
        <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
        <p className="text-sm">
          Email:{' '}
          <a
            href="mailto:info@clearhorizons.com"
            className="text-gray-600 hover:text-black"
          >
            info@clearhorizons.com
          </a>
        </p>
        <p className="text-sm">
          Phone:{' '}
          <a
            href="tel:+919717433853"
            className="text-gray-600 hover:text-black"
          >
            +91 9717433853
          </a>
        </p>
        <p className="text-sm">
          Phone:{' '}
          <a
            href="tel:+919931512282"
            className="text-gray-600 hover:text-black"
          >
            +91 9931512282
          </a>
        </p>
        <div className="mt-4">
          <a
            href="/terms-and-conditions"
            className="text-gray-600 hover:text-black text-sm"
          >
            Terms and Conditions
          </a>{' '}
          |{' '}
          <a
            href="/privacy-policy"
            className="text-gray-600 hover:text-black text-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Right Section - Social Media Links */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right mt-6 md:mt-0">
        <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
