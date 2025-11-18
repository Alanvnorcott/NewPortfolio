'use client'

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";



export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode; }) => {
  return (
   
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full max-w-7xl", 
      className
    )}>
      {children}
    </div>
  
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "NextJs", "Typescript"];
  const rightLists = ["MongoDB", "Python", "CSS Tailwind"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "Alanvnorcott@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className={cn(
      "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4 shadow-xl",
      className
    )}
    
    style={{
      background: "linear-gradient(180deg, rgba(13,16,39,0.9) 0%, rgba(8,10,25,0.9) 100%)",
    }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
          
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 5 && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-transparent" />
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center 
            text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-10"
        )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-slate-600 dark:text-slate-300 z-10">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 2 && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <GridGlobe />
            </div>
          )}

          {id === 3 && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
              <div className="relative flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 top-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-90 lg:opacity-100 rounded-lg text-center bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-md border border-white/20 text-white font-medium shadow-lg shadow-purple-500/20 transition-all hover:scale-105 hover:shadow-purple-500/40"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/10"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/10"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-90 lg:opacity-100 rounded-lg text-center bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-white/20 text-white font-medium shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-blue-500/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="mt-4 flex flex-wrap gap-2 z-10">
              {["C#", ".NET", "ASP.NET Core", "React", "MS SQL", "Azure"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20 text-white/90 backdrop-blur shadow-sm shadow-cyan-500/10">
                  {t}
                </span>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
