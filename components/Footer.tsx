import React from 'react';
import { socialMedia } from "@/data";

const Footer = () => {
  const socialLinks = [
    { href: 'https://twitter.com/Alanvnorcott', label: 'Twitter' },
    { href: 'https://linkedin.com/alan-norcott-31161523b/', label: 'LinkedIn' },
    { href: 'https://github.com/Alanvnorcott', label: 'GitHub' },
  ];

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full dark:opacity-50 opacity-30 "
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light dark:text-white-200 text-black-200">
          Copyright © 2024 Alan Norcott
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info, index) => (
            <a
              key={info.id}
              href={socialLinks[index].href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 dark:bg-black-200 rounded-lg shadow-xl border dark:border-black-300 border-white"
              aria-label={socialLinks[index].label}
            >
              <img src={info.img} alt={socialLinks[index].label} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;