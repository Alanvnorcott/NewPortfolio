'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { personalData } from '@/data';

const Hero = () => {
    const [lang, setLang] = useState<'js' | 'python' | 'go' | 'ts' | 'rust' | 'java' | 'csharp' | 'c' | 'cpp' | 'cobol' | 'sql' | 'haskell' | 'nim' | 'binary'>('js');

    const resumeData = {
        name: personalData.name,
        location: `${personalData.city}, ${personalData.zipCode}, ${personalData.country}`,
        email: personalData.email,
        github: personalData.github,
        website: personalData.website,
        linkedin: personalData.linkedin,
        phone: personalData.phone,
        dob: personalData.dob,
        yearsOfExperience: personalData.yearsOfExperience,
        summary: personalData.summary,
    };

    const generateResumeCode = (language: string) => {
        switch (language) {
            case 'js':
                return `// Resume for ${resumeData.name}
const resume = {
    name: '${resumeData.name}',
    location: '${resumeData.location}',
    email: '${resumeData.email}',
    github: '${resumeData.github}',
    website: '${resumeData.website}',
    linkedin: '${resumeData.linkedin}',
    phone: '${resumeData.phone}',
    dob: '${resumeData.dob}',
    yearsOfExperience: ${resumeData.yearsOfExperience},
    summary: '${resumeData.summary}',
};

console.log(resume);`;
            case 'python':
                return `# Resume for ${resumeData.name}
resume = {
    'name': '${resumeData.name}',
    'location': '${resumeData.location}',
    'email': '${resumeData.email}',
    'github': '${resumeData.github}',
    'website': '${resumeData.website}',
    'linkedin': '${resumeData.linkedin}',
    'phone': '${resumeData.phone}',
    'dob': '${resumeData.dob}',
    'yearsOfExperience': ${resumeData.yearsOfExperience},
    'summary': '${resumeData.summary}',
}

print(resume)`;
            case 'go':
                return `// Resume for ${resumeData.name}
package main

import "fmt"

type Resume struct {
    Name               string
    Location           string
    Email              string
    GitHub             string
    Website            string
    LinkedIn           string
    Phone              string
    Dob                string
    YearsOfExperience  int
    Summary            string
}

func main() {
    resume := Resume{
        Name:              "${resumeData.name}",
        Location:          "${resumeData.location}",
        Email:             "${resumeData.email}",
        GitHub:            "${resumeData.github}",
        Website:           "${resumeData.website}",
        LinkedIn:          "${resumeData.linkedin}",
        Phone:             "${resumeData.phone}",
        Dob:               "${resumeData.dob}",
        YearsOfExperience: ${resumeData.yearsOfExperience},
        Summary:           "${resumeData.summary}",
    }

    fmt.Printf("%+v\\n", resume)
}`;
            case 'ts':
                return `// Resume for ${resumeData.name}
interface Resume {
    name: string;
    location: string;
    email: string;
    github: string;
    website: string;
    linkedin: string;
    phone: string;
    dob: string;
    yearsOfExperience: number;
    summary: string;
}

const resume: Resume = {
    name: '${resumeData.name}',
    location: '${resumeData.location}',
    email: '${resumeData.email}',
    github: '${resumeData.github}',
    website: '${resumeData.website}',
    linkedin: '${resumeData.linkedin}',
    phone: '${resumeData.phone}',
    dob: '${resumeData.dob}',
    yearsOfExperience: ${resumeData.yearsOfExperience},
    summary: '${resumeData.summary}',
};

console.log(resume);`;
            case 'rust':
                return `// Resume for ${resumeData.name}
#[derive(Debug)]
struct Resume {
    name: String,
    location: String,
    email: String,
    github: String,
    website: String,
    linkedin: String,
    phone: String,
    dob: String,
    years_of_experience: i32,
    summary: String,
}

fn main() {
    let resume = Resume {
        name: String::from("${resumeData.name}"),
        location: String::from("${resumeData.location}"),
        email: String::from("${resumeData.email}"),
        github: String::from("${resumeData.github}"),
        website: String::from("${resumeData.website}"),
        linkedin: String::from("${resumeData.linkedin}"),
        phone: String::from("${resumeData.phone}"),
        dob: String::from("${resumeData.dob}"),
        years_of_experience: ${resumeData.yearsOfExperience},
        summary: String::from("${resumeData.summary}"),
    };

    println!("{:?}", resume);
}`;
            case 'java':
                return `// Resume for ${resumeData.name}
public class Resume {
    public static void main(String[] args) {
        String name = "${resumeData.name}";
        String location = "${resumeData.location}";
        String email = "${resumeData.email}";
        String github = "${resumeData.github}";
        String website = "${resumeData.website}";
        String linkedin = "${resumeData.linkedin}";
        String phone = "${resumeData.phone}";
        String dob = "${resumeData.dob}";
        int yearsOfExperience = ${resumeData.yearsOfExperience};
        String summary = "${resumeData.summary}";

        System.out.println("Name: " + name);
        System.out.println("Location: " + location);
        System.out.println("Email: " + email);
        System.out.println("GitHub: " + github);
        System.out.println("Website: " + website);
        System.out.println("LinkedIn: " + linkedin);
        System.out.println("Phone: " + phone);
        System.out.println("DOB: " + dob);
        System.out.println("Years of Experience: " + yearsOfExperience);
        System.out.println("Summary: " + summary);
    }
}`;
            case 'csharp':
                return `// Resume for ${resumeData.name}
using System;

class Resume {
    static void Main() {
        string name = "${resumeData.name}";
        string location = "${resumeData.location}";
        string email = "${resumeData.email}";
        string github = "${resumeData.github}";
        string website = "${resumeData.website}";
        string linkedin = "${resumeData.linkedin}";
        string phone = "${resumeData.phone}";
        string dob = "${resumeData.dob}";
        int yearsOfExperience = ${resumeData.yearsOfExperience};
        string summary = "${resumeData.summary}";

        Console.WriteLine("Name: " + name);
        Console.WriteLine("Location: " + location);
        Console.WriteLine("Email: " + email);
        Console.WriteLine("GitHub: " + github);
        Console.WriteLine("Website: " + website);
        Console.WriteLine("LinkedIn: " + linkedin);
        Console.WriteLine("Phone: " + phone);
        Console.WriteLine("DOB: " + dob);
        Console.WriteLine("Years of Experience: " + yearsOfExperience);
        Console.WriteLine("Summary: " + summary);
    }
}`;
            case 'c':
                return `// Resume for ${resumeData.name}
#include <stdio.h>

int main() {
    char* name = "${resumeData.name}";
    char* location = "${resumeData.location}";
    char* email = "${resumeData.email}";
    char* github = "${resumeData.github}";
    char* website = "${resumeData.website}";
    char* linkedin = "${resumeData.linkedin}";
    char* phone = "${resumeData.phone}";
    char* dob = "${resumeData.dob}";
    int yearsOfExperience = ${resumeData.yearsOfExperience};
    char* summary = "${resumeData.summary}";

    printf("Name: %s\\n", name);
    printf("Location: %s\\n", location);
    printf("Email: %s\\n", email);
    printf("GitHub: %s\\n", github);
    printf("Website: %s\\n", website);
    printf("LinkedIn: %s\\n", linkedin);
    printf("Phone: %s\\n", phone);
    printf("DOB: %s\\n", dob);
    printf("Years of Experience: %d\\n", yearsOfExperience);
    printf("Summary: %s\\n", summary);

    return 0;
}`;
            case 'cpp':
                return `// Resume for ${resumeData.name}
#include <iostream>
#include <string>

int main() {
    std::string name = "${resumeData.name}";
    std::string location = "${resumeData.location}";
    std::string email = "${resumeData.email}";
    std::string github = "${resumeData.github}";
    std::string website = "${resumeData.website}";
    std::string linkedin = "${resumeData.linkedin}";
    std::string phone = "${resumeData.phone}";
    std::string dob = "${resumeData.dob}";
    int yearsOfExperience = ${resumeData.yearsOfExperience};
    std::string summary = "${resumeData.summary}";

    std::cout << "Name: " << name << std::endl;
    std::cout << "Location: " << location << std::endl;
    std::cout << "Email: " << email << std::endl;
    std::cout << "GitHub: " << github << std::endl;
    std::cout << "Website: " << website << std::endl;
    std::cout << "LinkedIn: " << linkedin << std::endl;
    std::cout << "Phone: " << phone << std::endl;
    std::cout << "DOB: " << dob << std::endl;
    std::cout << "Years of Experience: " << yearsOfExperience << std::endl;
    std::cout << "Summary: " << summary << std::endl;

    return 0;
}`;
            case 'cobol':
                return `000001 IDENTIFICATION DIVISION.
000002 PROGRAM-ID. RESUME.
000003 DATA DIVISION.
000004 WORKING-STORAGE SECTION.
000005 01 NAME PIC X(12) VALUE "${resumeData.name}".
000006 01 LOCATION PIC X(50) VALUE "${resumeData.location}".
000007 01 EMAIL PIC X(20) VALUE "${resumeData.email}".
000008 01 GITHUB PIC X(50) VALUE "${resumeData.github}".
000009 01 WEBSITE PIC X(20) VALUE "${resumeData.website}".
000010 01 LINKEDIN PIC X(50) VALUE "${resumeData.linkedin}".
000011 01 PHONE PIC X(15) VALUE "${resumeData.phone}".
000012 01 DOB PIC X(10) VALUE "${resumeData.dob}".
000013 01 YEARS-OF-EXPERIENCE PIC 9(2) VALUE ${resumeData.yearsOfExperience}.
000014 01 SUMMARY PIC X(200) VALUE "${resumeData.summary}".
000015 PROCEDURE DIVISION.
000016     DISPLAY "Name: " NAME.
000017     DISPLAY "Location: " LOCATION.
000018     DISPLAY "Email: " EMAIL.
000019     DISPLAY "GitHub: " GITHUB.
000020     DISPLAY "Website: " WEBSITE.
000021     DISPLAY "LinkedIn: " LINKEDIN.
000022     DISPLAY "Phone: " PHONE.
000023     DISPLAY "DOB: " DOB.
000024     DISPLAY "Years of Experience: " YEARS-OF-EXPERIENCE.
000025     DISPLAY "Summary: " SUMMARY.
000026     STOP RUN.`;
            case 'sql':
                return `-- Resume for ${resumeData.name}
CREATE TABLE resume (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    location TEXT,
    email VARCHAR(255),
    github VARCHAR(255),
    website VARCHAR(255),
    linkedin VARCHAR(255),
    phone VARCHAR(255),
    dob VARCHAR(255),
    years_of_experience INT,
    summary TEXT
);

INSERT INTO resume (id, name, location, email, github, website, linkedin, phone, dob, years_of_experience, summary) VALUES
(1, '${resumeData.name}', '${resumeData.location}', '${resumeData.email}', '${resumeData.github}', '${resumeData.website}', '${resumeData.linkedin}', '${resumeData.phone}', '${resumeData.dob}', ${resumeData.yearsOfExperience}, '${resumeData.summary}');

SELECT * FROM resume;`;
            case 'haskell':
                return `-- Resume for ${resumeData.name}
data Resume = Resume {
    name :: String,
    location :: String,
    email :: String,
    github :: String,
    website :: String,
    linkedin :: String,
    phone :: String,
    dob :: String,
    yearsOfExperience :: Int,
    summary :: String
}

main :: IO ()
main = do
    let resume = Resume {
        name = "${resumeData.name}",
        location = "${resumeData.location}",
        email = "${resumeData.email}",
        github = "${resumeData.github}",
        website = "${resumeData.website}",
        linkedin = "${resumeData.linkedin}",
        phone = "${resumeData.phone}",
        dob = "${resumeData.dob}",
        yearsOfExperience = ${resumeData.yearsOfExperience},
        summary = "${resumeData.summary}"
    }
    print resume`;
            case 'nim':
                return `# Resume for ${resumeData.name}
type Resume = object
  name: string
  location: string
  email: string
  github: string
  website: string
  linkedin: string
  phone: string
  dob: string
  yearsOfExperience: int
  summary: string

let resume = Resume(
  name: "${resumeData.name}",
  location: "${resumeData.location}",
  email: "${resumeData.email}",
  github: "${resumeData.github}",
  website: "${resumeData.website}",
  linkedin: "${resumeData.linkedin}",
  phone: "${resumeData.phone}",
  dob: "${resumeData.dob}",
  yearsOfExperience: ${resumeData.yearsOfExperience},
  summary: "${resumeData.summary}"
)

echo "Name: ", resume.name
echo "Location: ", resume.location
echo "Email: ", resume.email
echo "GitHub: ", resume.github
echo "Website: ", resume.website
echo "LinkedIn: ", resume.linkedin
echo "Phone: ", resume.phone
echo "DOB: ", resume.dob
echo "Years of Experience: ", resume.yearsOfExperience
echo "Summary: ", resume.summary`;
            case 'binary':
                // For binary, just a comment since it's not really code
                return `# Resume for ${resumeData.name} - Binary representation would be too long, but here's ASCII`;
            default:
                return '';
        }
    };

    const downloadResume = () => {
        const code = generateResumeCode(lang);
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resume.${lang === 'csharp' ? 'cs' : lang === 'cpp' ? 'cpp' : lang === 'js' ? 'js' : lang === 'ts' ? 'ts' : lang === 'python' ? 'py' : lang === 'go' ? 'go' : lang === 'rust' ? 'rs' : lang === 'java' ? 'java' : lang === 'c' ? 'c' : lang === 'cobol' ? 'cob' : lang === 'sql' ? 'sql' : lang === 'haskell' ? 'hs' : lang === 'nim' ? 'nim' : 'txt'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

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
                <button onClick={downloadResume} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-mono text-sm mb-8">
                    Download Summary as {lang.toUpperCase()} Code
                </button>
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
