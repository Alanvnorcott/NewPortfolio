export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Writing", link: "#writing" },
  { name: "References", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: ".NET Developer & Python Specialist with Enterprise Focus",
    description: "Specializing in .NET and Python for reliability and scalability. Focused on current growth in AI and cloud technologies.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptops.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to Relocation & Remote Opportunities",
    description: "Flexible with timezones and ready to relocate for the right opportunity",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technical Skills & Continuous Learning",
    description: "Constantly improving in .NET, React, Cloud, and AI technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about Full-Stack Development & Innovation",
    description: "Building scalable applications with modern technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Full-Stack Developer at Dismas Charities",
    description: "Building enterprise solutions with C#, ASP.NET Core, and React",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Connect & Discuss Opportunities",
    description: "Let's build something amazing together",
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
    des: "Built an AI-powered job board with automated cover letter generation and resume optimization using machine learning algorithms.",
    img: "/tb.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg",  "/python.svg"],
    link: "https://www.truebirdy.com/",
    
  },
  {
    id: 2,
    title: "Securify",
    des: "Developed a Chrome extension integrating VirusTotal's API for real-time malware detection, providing instant security analysis for web resources with 99.9% uptime.",
    img: "/securify.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg",  "/ts.svg"],
    link: "https://chromewebstore.google.com/detail/securify/geafkmapmejjfnbkhgggefahiknhmjpd",
    
  },
  {
    id: 3,
    title: "Roll Again",
    des: "Built a Next.js + TypeScript web app for procedural RPG character generation, enabling 500+ customizations per session.",
    img: "/wow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/JS.svg", "/re.svg"],
    link: "https://www.roll-again.com/",
    
  },
  {
    id: 4,
    title: "ClickCount",
    des: "Engineered a web analytics platform with real-time data processing, tracking user interactions with sub-second response times.",
    img: "/iconLarge.svg", 
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg",  "/ts.svg"],
    link: "https://chromewebstore.google.com/detail/clickcount/peeggfpbhaipfbipleajhbolbhjfifhp",
  },
];

export const testimonials = [
  {
    quote:
      "Alan's work with Continuum GRC as an intern on the GRC Analysts and product development team was meticulous. He was a team player and provided good customer support. We wish him well on his carreer trajectory.",
    name: "Michael Peters",
    title: "CEO of Lazarus Alliance, and Continuum GRC",
  },
  {
    quote:
      "Mr. Norcott demonstrated the ability to think critically, superb problem solving and technical skills. He successfully mastered and applied new concepts and technologies taught in classes. Depending on the setting, he could either productively work on his own or operate effectively as a member of a team. Additionally, Alan showed excellent analytical skills.",
    name: "Alex Rudniy, Ph.D.",
    title: "Associate Professor, Department of Mathematics and Computer Science, Drew University",
  },
  {
    quote:
      "Passionate, dedicated, and focused. These are all the aspects that Mr. Norcott embodies and is an outstanding resource for any institution or business. He puts effort into delivering quality work in a timely manner, and I was never in doubt that he would deliver upstanding product. I would highly recommend him for any institution or business, they would be extremely fortunate to have him on their team!",
    name: "Lazarus Peters",
    title: "Manager of Customer Success at Lazarus Alliance, and Continuum GRC",
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

export const workExperience = [
  {
    id: 4,
    title: "Fullstack Developer - Dismas Charities",
    desc: "I create backend solutions in C# and ASP.NET, integrating business logic and RESTful APIs to improve data processing. On the front end, I create interfaces with Razor and TypeScript, leveraging libraries like React and Tailwind CSS, and connecting seamlessly with .NET backend services for efficient asynchronous data handling. On the data layer, I work with Microsoft SQL Server, building sophisticated stored procedures, implementing indexing strategies, and optimizing queries to improve scalability and performance.",
    className: "md:col-span-2",
    thumbnail: "/solo.svg",
  },
  {
    id: 3,
    title: "Cybersecurity Intern - Continuum GRC, INC.",
    desc: "Implemented documentation for diverse security standards (ISO, StateRAMP, FedRAMP, ENS, etc.), adeptly mapping controls across frameworks. Developed client and auditor modules for utility and data collection, demonstrating full stack proficiency. Collaborated closely with a team of two senior-level colleagues, leveraging custom scripts for spreadsheets and creating automation scripts to enhance data flow efficiency.",
    className: "md:col-span-2",
    thumbnail: "/cyber.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - DIGICLIPS",
    desc: "Contributed to the development of a client and employee notification system application, utilizing Angular for the front end and Python, JavaScript, and C# for backend functionalities. Collaborated effectively with a team of five to deliver a robust and user-friendly application. Used Angular to build the required single-page application, demonstrating adaptability and a commitment to skill development. Leveraged Python, JavaScript, and C# to implement and optimize backend functionalities, ensuring seamless performance.",
    className: "md:col-span-2",
    thumbnail: "/software.svg",
  },
  {
    id: 1,
    title: "Fullstack Engineer Intern - Drew University",
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