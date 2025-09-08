import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Want to connect with me? <span className="text-blue-400">Click below!</span>
          </h1>
          <a href="https://www.linkedin.com/in/alan-norcott-31161523b/">
            <MagicButton
                title="Connect with me on LinkedIn!"
                icon={<FaLocationArrow />}
                position="right"
            />
          </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light dark:text-white-200 text-black-200">
            Copyright © 2025 Alan Norcott
          </p>

          {/* Use SocialIcons here instead of socialMedia */}
          <SocialIcons />
        </div>
      </footer>
  );
};

export default Footer;
