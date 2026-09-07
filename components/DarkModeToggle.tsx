"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="border-2 border-stone-900 bg-[#f8f1e5] p-3 text-stone-950 shadow-[4px_4px_0_#c51f2d] transition hover:-translate-y-1 dark:border-stone-100"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === 'dark' ? <FaSun className="text-stone-950" /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
