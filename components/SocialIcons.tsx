import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/Alanvnorcott', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alan-norcott-31161523b/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Alanvnorcott', label: 'GitHub' },
    { icon: () => <Image src="/substack.png" alt="" width={16} height={16} className="rounded-sm" />, href: 'https://alanvnorcott.substack.com/?utm_campaign=profile_chips', label: 'Substack' },
    { icon: () => <Image src="/mediumLogo.png" alt="" width={16} height={16} className="rounded-full bg-white" />, href: 'https://medium.com/@alanvnorcott', label: 'Medium' }
  ];

  return (
    <div className="flex gap-2">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-stone-900 bg-[#f8f1e5] p-2.5 text-stone-800 shadow-[3px_3px_0_#c51f2d] transition duration-200 hover:-translate-y-1 hover:bg-[#c51f2d] hover:text-white dark:border-stone-100 dark:bg-[#24211d] dark:text-stone-100"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
