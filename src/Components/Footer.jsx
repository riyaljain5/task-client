// import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-[#286181] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0">
        
        {/* Terms Link */}
        <div className="text-sm md:text-base">
          <a href="/terms" className="hover:text-black transition-colors duration-300">
            Terms and Conditions
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
