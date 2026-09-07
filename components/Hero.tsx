'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { personalData } from '@/data';
import { ArrowDown, Download } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Hero = () => {
    const [lang, setLang] = useState<'js' | 'python' | 'go' | 'ts' | 'rust' | 'java' | 'csharp' | 'c' | 'cpp' | 'cobol' | 'sql' | 'haskell' | 'nim' | 'binary'>('python');
    const { locale } = useLanguage();

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
        summary: locale === 'de' ? personalData.summaryDe : personalData.summary,
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
                <span className="ml-6 text-blue-400">const</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&apos;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&apos;</span><span className="text-white">;</span>
            </>
        ),
        python: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span>
            </>
        ),
        go: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">var</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span>
            </>
        ),
        ts: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">const</span> <span className="text-green-400">name</span><span className="text-blue-300">: string</span> <span className="text-white">=</span> <span className="text-rose-300">&apos;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&apos;</span><span className="text-white">;</span>
            </>
        ),
        rust: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-purple-400">let</span> <span className="text-green-400">name</span><span className="text-blue-300">: &amp;str</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span><span className="text-white">;</span>
            </>
        ),
        java: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-red-400">String</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span><span className="text-white">;</span>
            </>
        ),
        csharp: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">string</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span><span className="text-white">;</span>
            </>
        ),
        c: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">char</span><span className="text-white">*</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span><span className="text-white">;</span>
            </>
        ),
        cpp: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">std::string</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span><span className="text-white">;</span>
            </>
        ),
        cobol: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">000001</span>
                <span className="ml-6 text-blue-400">01</span> <span className="text-green-400">NAME</span> <span className="text-purple-400">PIC X(12)</span> <span className="text-blue-400">VALUE</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span><span className="text-white">.</span>
            </>
        ),
        sql: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-blue-400">SELECT</span> <span className="text-rose-300">&apos;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&apos;</span> <span className="text-blue-400">AS</span> <span className="text-green-400">name</span><span className="text-white">;</span>
            </>
        ),
        haskell: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span>
            </>
        ),
        nim: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-purple-400">let</span> <span className="text-green-400">name</span> <span className="text-white">=</span> <span className="text-rose-300">&quot;</span><span className="text-red-300">Alan Norcott</span><span className="text-rose-300">&quot;</span>
            </>
        ),
        binary: (
            <>
                <span className="absolute left-2 top-1 text-gray-500 text-sm">1</span>
                <span className="ml-6 text-green-400">01000001 01101100 01100001 01101110 00100000 01001110 01101111 01110010 01100011 01101111 01110100 01110100</span>
            </>
        ),
    };

    const languageOptions = [
        ['js', 'JS'], ['python', 'Python'], ['go', 'Go'], ['ts', 'TS'],
        ['rust', 'Rust'], ['java', 'Java'], ['csharp', 'C#'], ['c', 'C'],
        ['cpp', 'C++'], ['cobol', 'COBOL'], ['sql', 'SQL'], ['haskell', 'Haskell'],
        ['nim', 'Nim'], ['binary', 'Binary'],
    ] as const;

    const copy = locale === 'de' ? {
        cta: 'Meine Arbeit ansehen',
        download: 'Laden als',
        route: 'Salt Lake City → München',
    } : {
        cta: 'See what I ship',
        download: 'Download as',
        route: 'Salt Lake City → Munich',
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center border-b-2 border-stone-900 px-6 py-28 text-stone-950 dark:border-stone-100 dark:text-stone-50 md:px-12">
            <div className="relative z-10 mx-auto w-full min-w-0 max-w-3xl">
                <div className="float-soft min-w-0">
                    <div className="glass-panel relative min-w-0 p-3 sm:p-5 md:p-7">
                        <div className="absolute -right-3 -top-3 -z-10 h-24 w-24 bg-[#c51f2d]" />
                        <div className="overflow-hidden border-2 border-stone-950 bg-[#151412] text-stone-100">
                            <div className="flex items-center justify-between border-b-2 border-stone-700 px-4 py-3">
                                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">identity.{lang}</span>
                            </div>
                            <div className="relative min-h-24 overflow-x-auto px-4 py-8 font-mono text-sm sm:text-base">
                                <div className="min-w-max">{codeSnippets[lang]}</div>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
                            {languageOptions.map(([value, label]) => (
                                <button key={value} onClick={() => setLang(value)} aria-pressed={lang === value} className={`shrink-0 border px-3 py-1.5 font-mono text-xs font-bold transition ${lang === value ? 'border-stone-950 bg-[#c51f2d] text-white dark:border-stone-100' : 'border-stone-400 bg-transparent text-stone-700 hover:bg-[#c51f2d] hover:text-white dark:border-stone-600 dark:text-stone-300'}`}>
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className="mt-5 flex items-center gap-3 px-1">
                            <Image src="/profilePicPurple.png" alt="Alan Norcott" width={52} height={52} className="border-2 border-stone-950" priority />
                            <div><p className="font-serif text-lg font-bold text-stone-950 dark:text-stone-50">Alan Norcott</p><p className="font-mono text-xs uppercase text-stone-600 dark:text-stone-400">{copy.route}</p></div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                    <a href="#experience" className="inline-flex items-center gap-2 border-2 border-stone-950 bg-stone-950 px-6 py-3 font-mono text-sm font-bold uppercase text-[#f8f1e5] shadow-[5px_5px_0_#c51f2d] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#c51f2d] dark:border-stone-50 dark:bg-stone-50 dark:text-stone-950">
                        {copy.cta} <ArrowDown size={16} />
                    </a>
                    <button onClick={downloadResume} className="inline-flex items-center gap-2 px-2 py-3 font-mono text-xs font-bold uppercase text-stone-700 underline decoration-2 underline-offset-4 transition hover:text-[#c51f2d] dark:text-stone-200 dark:hover:text-[#ff5c68]">
                        <Download size={16} /> {copy.download} {lang.toUpperCase()}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
