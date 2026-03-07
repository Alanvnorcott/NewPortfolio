'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    const [lang, setLang] = useState<'js' | 'python' | 'go' | 'ts' | 'rust' | 'java' | 'csharp' | 'c' | 'cpp' | 'cobol' | 'sql' | 'haskell' | 'nim' | 'binary'>('js');

    const codeSnippets = {
        js: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">const</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&apos;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&apos;</span><span className="text-white">;</span>
            </>
        ),
        python: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span>
            </>
        ),
        go: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">var</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span>
            </>
        ),
        ts: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">const</span> <span className="text-green-400">name</span><span className="text-blue-300">: string</span> <span className="text-white">=</span> <span className="text-yellow-400">&apos;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&apos;</span><span className="text-white">;</span>
            </>
        ),
        rust: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-purple-400">let</span> <span className="text-green-400">name</span><span className="text-blue-300">: &amp;str</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span><span className="text-white">;</span>
            </>
        ),
        java: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-red-400">String</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span><span className="text-white">;</span>
            </>
        ),
        csharp: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">string</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span><span className="text-white">;</span>
            </>
        ),
        c: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">char</span><span className="text-white">*</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span><span className="text-white">;</span>
            </>
        ),
        cpp: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">std::string</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span><span className="text-white">;</span>
            </>
        ),
        cobol: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">000001</span>
                <span className="ml-6 text-blue-400">01</span> <span className="text-green-400">NAME</span> <span className="text-purple-400">PIC X(12)</span> <span className="text-blue-400">VALUE</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span><span className="text-white">.</span>
            </>
        ),
        sql: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">SELECT</span> <span className="text-yellow-400">&apos;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&apos;</span> <span className="text-blue-400">AS</span> <span className="text-green-400">name</span><span className="text-white">;</span>
            </>
        ),
        haskell: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span>
            </>
        ),
        nim: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-purple-400">let</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-yellow-400">&quot;</span><span className="text-orange-400">Alan Norcott</span><span className="text-yellow-400">&quot;</span>
            </>
        ),
        binary: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-green-400">01000001 01101100 01100001 01101110 00100000 01001110 01101111 01110010 01100011 01101111 01110100 01110100</span>
            </>
        ),
    };

    return (
        <div className="pb-20 pt-36 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
                    Software Engineer
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    <span className="bg-gray-900 text-white px-4 py-3 rounded-lg font-mono text-2xl md:text-4xl shadow-xl border border-gray-700 inline-block relative">
                        {codeSnippets[lang]}
                    </span>
                </h1>
                <div className="flex justify-center space-x-2 mb-8 flex-wrap">
                    <button onClick={() => setLang('js')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'js' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>JS</button>
                    <button onClick={() => setLang('python')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'python' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Python</button>
                    <button onClick={() => setLang('go')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'go' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Go</button>
                    <button onClick={() => setLang('ts')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'ts' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>TS</button>
                    <button onClick={() => setLang('rust')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'rust' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Rust</button>
                    <button onClick={() => setLang('java')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'java' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Java</button>
                    <button onClick={() => setLang('csharp')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'csharp' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>C#</button>
                    <button onClick={() => setLang('c')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'c' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>C</button>
                    <button onClick={() => setLang('cpp')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'cpp' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>C++</button>
                    <button onClick={() => setLang('cobol')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'cobol' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>COBOL</button>
                    <button onClick={() => setLang('sql')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'sql' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>SQL</button>
                    <button onClick={() => setLang('haskell')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'haskell' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Haskell</button>
                    <button onClick={() => setLang('nim')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'nim' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Nim</button>
                    <button onClick={() => setLang('binary')} className={`px-3 py-1 rounded text-sm font-mono ${lang === 'binary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Binary</button>
                </div>
                <Image src="/profilePicPurple.png" alt="Alan Norcott" width={128} height={128} className="rounded-full mx-auto shadow-lg" />
                <a href="#experience" className="group relative inline-block text-black font-medium hover:text-gray-700 transition-colors">
                  View My Work
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
            </div>
        </div>
    );
};

export default Hero;
