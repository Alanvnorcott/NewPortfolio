export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "References", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am a hardworking and motivated developer",
    description: "Hello!",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptops.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Connecting all over the world!",
    description: "flexible with timezones",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "I am a",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working at Dismas Charities!",
    description: "Right now:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to connect?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TrueBirdy",
    des: "An AI job board, cover letter builder and resume reviewer.",
    img: "/tb.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg", "/python.svg"],
    link: "https://www.truebirdy.com/",
  },
  {
    id: 2,
    title: "Securify",
    des: "A Chrome extension that utilizes VirusTotal's public API.",
    img: "/securify.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg", "/ts.svg"],
    link: "https://chromewebstore.google.com/detail/securify/geafkmapmejjfnbkhgggefahiknhmjpd",
  },
  {
    id: 3,
    title: "Roll Again",
    des: "I built a website to help out those who enjoy RPGs when they find themselves stumped on what character to make next. If you are someone who enjoys RPGs and character customization.",
    img: "/wow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/JS.svg", "/re.svg"],
    link: "https://www.roll-again.com/",
  },
  {
    id: 4,
    title: "ClickCount",
    des: "This is my first deployed web app; a web stats tracker.",
    img: "/iconLarge.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg", "/ts.svg"],
    link: "https://chromewebstore.google.com/detail/clickcount/peeggfpbhaipfbipleajhbolbhjfifhp",
  },
];

export const testimonials = [
  {
    quote: "Alan was one of the best employees I've ever had the pleasure of working with. I say employee because he proved to be much more than &quot;just&quot; a software engineer. Alan's ability to communicate clearly and succinctly with all levels of leadership, his ability to grasp complex requirements and translate those into results, and his passion for providing quality results were impressive. I've led software development teams for many years, and Alan proved to be a breath of fresh air on our team. His presence and poise in difficult situations is admirable. Given the opportunity, I would rehire this young man in an instant.",
    name: "Doug Hamilton",
    title: "Director of Information Technology @ Dismas Charities Inc.",
  },
  {
    quote: "Mr. Norcott demonstrated the ability to think critically, superb problem solving, and technical skills. He successfully mastered and applied new concepts and technologies taught in classes. Depending on the setting, he could either productively work on his own or operate effectively as a member of a team. Additionally, Alan showed excellent analytical skills.",
    name: "Alex Rudniy, PhD",
    title: "Associate Professor, Department of Mathematics and Computer Science @ Drew University",
  },
  {
    quote: "Alan's work with Continuum GRC as an intern on the GRC Analysts and product development team was meticulous. He was a team player and provided good customer support. We wish him well on his career trajectory.",
    name: "Michael Peters",
    title: "CEO @ Lazarus Alliance (Continuum GRC)",
  },
  {
    quote: "Passionate, dedicated, and focused. These are all the aspects that Mr. Norcott embodies and is an outstanding resource for any institution or business. He puts effort into delivering quality work in a timely manner, and I was never in doubt that he would deliver upstanding product. I would highly recommend him for any institution or business; they would be extremely fortunate to have him on their team!",
    name: "Lazarus Peters",
    title: "Manager of Customer Success @ Lazarus Alliance (Continuum GRC)",
  },
  {
    quote: "In my Algorithms course, Alan did what every student should do -- He asked good questions. I really appreciate having a student who wants to learn. And, in that",
    name: "Barry Burd",
    title: "Algorithms and Computer Science Professor @ Drew University & Author of &ldquo;Java For Dummies&rdquo;",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const skills = {
  languages: ["C#", "Python", "TypeScript", "JavaScript"],
  frontend: ["React", "Angular"],
  backendFrameworks: [".NET", "ASP.NET Core", "FastAPI", "Flask", "Razor", "Blazor"],
  cloudDevops: ["AWS", "Azure", "Docker", "CI/CD pipelines", "Infrastructure as Code"],
  data: ["SQL Server", "schema design", "indexing strategy", "query optimization"],
  aiLlm: ["OpenAI/Claude/Gemini API integration", "RAG", "PyTorch", "TensorFlow", "vector embeddings"],
  languageProficiency: ["English (Native)", "German (B1)"],
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Drew University",
    location: "Madison, NJ",
    period: "Aug 2020 - May 2024",
  },
];

export const personalInfo = {
  name: "Alan Norcott",
  location: "Salt Lake City, Utah, 84119, United States",
  nationality: "American",
  dob: "03 April 2002",
  phone: "+1 609 915 2436",
  email: "Alanvnorcott@gmail.com",
  github: "https://github.com/Alanvnorcott",
  website: "alanvnorcott.com",
};

export const professionalSummary = "Software Engineer building production-grade full-stack systems across media streaming, backend services, and AI-driven internal platforms. Experienced in Python, C#, React, and TypeScript with a focus on distributed architectures and structured data pipelines, delivering measurable operational impact, including a 60 percent reduction in onboarding time through RAG-based knowledge systems. Relocating to Munich with a deliberate long-term plan already underway. Actively advancing German language proficiency and working with government integration programs, including Make it in Munich, to ensure sustained professional and cultural integration. Committed to building a long-term career within the Munich technology ecosystem.";

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "NBCUniversal - Versant Media",
    location: "Remote - Los Angeles, CA, USA",
    period: "Dec 2025 – Present",
    desc: "Designed modular software components for large-scale production media playback systems supporting high-volume streaming environments. Built a Python log processing and validation system to analyze production telemetry, reducing manual debugging time and increasing system reliability. Contributed to asynchronous event-driven workflows, improving playback stability and failure handling. Authored technical documentation describing component behavior, configuration, and failure modes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Dismas Charities Inc.",
    location: "Remote - Louisville, KY, USA",
    period: "Dec 2024 – Dec 2025",
    desc: "Built and deployed REST APIs in C# and ASP.NET Core, supporting internal operational systems. Designed and deployed Retrieval Augmented Generation tools using Python, vector embeddings, and LLM APIs to automate knowledge retrieval, which reduced onboarding time by 60%. Optimized SQL Server schema design and indexing strategy, improving query performance and reducing report generation time by 50%. Wrote functional specifications and internal design documentation for new features and services.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Security Development Intern",
    company: "Continuum GRC, Inc.",
    location: "Remote - Scottsdale, AZ, USA",
    period: "May 2023 – Aug 2023",
    desc: "Automated compliance spreadsheet normalization using Python, reducing manual processing time by 90%. Leveraged AI-assisted document analysis to validate regulatory compliance artifacts. Built C# automation tools to reduce manual compliance review and documentation overhead. Mapped security controls across ISO, StateRAMP, FedRAMP, and ENS frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "DIGICLIPS",
    location: "Remote",
    period: "Jun 2022 – Sep 2022",
    desc: "Contributed to the development of a client and employee notification system application, utilizing Angular for the frontend and Python, JavaScript, and C# for backend functionalities. Collaborated effectively with a team of five to deliver a robust and user-friendly application. Used Angular to build the required single-page application, demonstrating adaptability and a commitment to skill development. Leveraged Python, JavaScript, and C# to implement and optimize backend functionalities, ensuring seamless performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Fullstack Engineer Intern",
    company: "Drew University",
    location: "Madison, NJ, USA",
    period: "Jan 2022 – May 2022",
    desc: "Developed a web application for sorting cross-listed courses using React, JavaScript, HTML, and CSS, enhancing course organization and accessibility. Collaborated with a team of five to ensure seamless integration and functionality. Designed and configured an SQL database to store and parse course offerings, improving data management and retrieval efficiency.",
    className: "md:col-span-2",
    thumbnail: "/fullstack.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];