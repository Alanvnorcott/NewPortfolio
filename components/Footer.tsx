import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to Build Something Amazing? <span className="text-blue-400">Let&apos;s Connect!</span>
          </h1>
          <p className="text-center text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl">
            .NET Developer and Python Specialist with expertise in enterprise solutions and cloud technologies.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <a href="https://www.linkedin.com/in/alan-norcott-31161523b/" 
               className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
              <FaLocationArrow />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:alannorcott@example.com" 
               className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a href="https://github.com/alannorcott" 
               className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
              <FaLocationArrow />
              <span>GitHub</span>
            </a>
          </div>

          <a href="https://www.linkedin.com/in/alan-norcott-31161523b/">
            <MagicButton
                title="Connect with me on LinkedIn!"
                icon={<FaLocationArrow />}
                position="right"
            />
          </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="md:text-base text-sm md:font-normal font-light dark:text-white-200 text-black-200">
              Copyright © 2025 Alan Norcott
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-500">
              <FaMapMarkerAlt />
              <span>NYC Metropolitan Area • Open to Relocation</span>
            </div>
          </div>

          {/* Use SocialIcons here instead of socialMedia */}
          <SocialIcons />
        </div>
      </footer>
  );
};

export default Footer;
