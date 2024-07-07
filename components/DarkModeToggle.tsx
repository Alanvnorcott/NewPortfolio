"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;