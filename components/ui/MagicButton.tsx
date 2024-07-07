import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`p-[3px] relative w-full rounded-lg md:w-60 md:mt-10 ${otherClasses}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r dark:from-indigo-500 dark:to-blue-300 from-blue to-blue-300 rounded-lg transition-all duration-500 ease-in-out group-hover:from-purple-500 group-hover:to-indigo-500" />
      <div className="px-8 py-2 bg-blue-300 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center space-x-2">
        {position === 'left' && icon}
        <span>{title}</span>
        {position === 'right' && icon}
      </div>
    </button>
  );
};

export default MagicButton;
