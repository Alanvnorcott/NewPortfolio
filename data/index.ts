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
    description: "Hi!",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptop.svg",
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
    title: "Currently building a new NextJS project",
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
    title: "Securify",
    des: "A Chrome extension that utilizes VirusTotal's public API and allows users to scan the safety of any website they are currently on.",
    img: "/securify.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg",  "/ts.svg"],
    link: "https://chromewebstore.google.com/detail/securify/geafkmapmejjfnbkhgggefahiknhmjpd",
  },
  {
    id: 2,
    title: "This Portfolio Website",
    des: "This portfolio was designed and developed by me.",
    img: "/reGif.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/JS.svg", "/re.svg"],
    link: "https://alanvnorcott.com/",
  },
  {
    id: 3,
    title: "ClickCount",
    des: "This is my first deployed web app; It is a web stats tracker formatted much like a video game.",
    img: "/iconLarge.svg",
    iconLists: ["/css3.svg", "/html5.svg", "/JS.svg",  "/ts.svg"],
    link: "https://chromewebstore.google.com/detail/clickcount/peeggfpbhaipfbipleajhbolbhjfifhp",
  },
  {
    id: 4,
    title: "GymTrack",
    des: "A workout tracking app developed with Flutter!",
    img: "/GT.svg",
    iconLists: ["/flutter.svg", "/apple.svg", "/android.svg", "/swift.svg", "/gsap.svg"],
    link: "https://github.com/Alanvnorcott/GymTrack",
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
      "Collaborating with Alan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Alan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Alan is the ideal developer. (THIS IS A PLACEHOLDER)",
    name: "Michael Phillips",
    title: "Director of Placeholder Technologies, Inc.",
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
    id: 1,
    title: "Fullstack Engineer Intern - Drew University",
    desc: "Developed a web application for sorting cross-listed courses using React, JavaScript, HTML, and CSS, enhancing course organization and accessibility. Collaborated with a team of five to ensure seamless integration and functionality. Designed and configured an SQL database to store and parse course offerings, improving data management and retrieval efficiency.",
    className: "md:col-span-2",
    thumbnail: "/fullstack.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - DIGICLIPS",
    desc: "Contributed to the development of a client and employee notification system application, utilizing Angular for the front end and Python, JavaScript, and C# for backend functionalities. Collaborated effectively with a team of five to deliver a robust and user-friendly application. Used Angular to build the required single-page application, demonstrating adaptability and a commitment to skill development. Leveraged Python, JavaScript, and C# to implement and optimize backend functionalities, ensuring seamless performance.",
    className: "md:col-span-2", 
    thumbnail: "/software.svg",
  },
  {
    id: 3,
    title: "Cybersecurity Intern - Continuum GRC, INC.",
    desc: "Implemented documentation for diverse security standards (ISO, StateRAMP, FedRAMP, ENS, etc.), adeptly mapping controls across frameworks. Developed client and auditor modules for utility and data collection, demonstrating full stack proficiency. Collaborated closely with a team of two senior-level colleagues, leveraging custom scripts for spreadsheets and creating automation scripts to enhance data flow efficiency.",
    className: "md:col-span-2",
    thumbnail: "/cyber.svg",
  },
  {
    id: 4,
    title: "Fullstack Developer - Personal",
    desc: "Developed and maintained user-facing features using modern frontend technologies. Deployed various applications to the chrome store and developed / mantained efficient code.",
    className: "md:col-span-2",
    thumbnail: "/solo.svg",
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