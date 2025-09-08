import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaSubscript } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/Alanvnorcott', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alan-norcott-31161523b/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Alanvnorcott', label: 'GitHub' },
    { icon: () => <img src="/substack.png" alt="Substack" className="w-5 h-5" />, href: 'https://alanvnorcott.substack.com/?utm_campaign=profile_chips', label: 'Substack' },
    { icon: () => <img src="/mediumLogo.png" alt="Medium" className="w-5 h-5" />, href: 'https://medium.com/@alanvnorcott', label: 'Medium' }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700"
          aria-label={label}
        >
          <Icon className="text-gray-700 dark:text-gray-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;