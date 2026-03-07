import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/alan-norcott-31161523b/" className="group relative inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors">
            <FaLinkedin className="mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
            Connect with me on LinkedIn!
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          {/* Use SocialIcons here instead of socialMedia */}
          <SocialIcons />
        </div>
      </footer>
  );
};

export default Footer;
