'use client';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { FaArrowPointer } from 'react-icons/fa6';
import { BackgroundBeams } from './ui/background-beams';
import { Boxes } from './ui/background-boxes';
import { HeroHighlight } from './ui/hero-highlight';
import { Highlight } from './ui/hero-highlight';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="pb-10 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="pink"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="pink"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            
            
            <div className="h-screen w-full dark:bg-black-100 bg-white-300 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white-200 dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(circle at center, transparent 0%, white 50%, black 100%)]"></div>
            </div>
            <div className="flex justify-center relative my-20 z-10">
            <BackgroundBeams />
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue max-w-80">
                        Alan Norcott
                    </h2>


                     <HeroHighlight>
                    <motion.h1
                        initial={{
                        opacity: 0,
                        y: 20,
                        }}
                        animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                        }}
                        transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        Alan Norcott
                    </motion.h1>
                    </HeroHighlight>


                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black-200 dark:text-white-200">
                      Hello, I&apos;m a .NET Developer and Python Specialist with expertise in enterprise solutions and cloud technologies, based in NYC Metropolitan Area and open to relocation
                    </p>
                    <a href="#about" aria-label="Navigate to about section to learn more about my background and experience">
                        <MagicButton
                          title="Explore My Portfolio"
                          icon={<FaArrowPointer />}
                          position="right"
                          
                        />
                      </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
