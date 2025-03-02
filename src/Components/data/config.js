// hero section
const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        duration: 0.5,
        delay: animationDuration - 1,
      },
      fillOpacity: {
        duration: 0.5,
        delay: animationDuration - 1,
      },
    },
  },
};
export const socialIcons = [
  {
    id: 1,
    path: `M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2v-3h2V9.5C10 7 11.5 6 13.29 6c1.07 0 1.99.08 2.26.12v2.62H14.5c-1.25 0-1.5.6-1.5 1.47V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8Z`,
    viewBox: "0 0 24 24",
  },
  {
    id: 2,
    path: `M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.113.793-.263.793-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.303 3.492.996.108-.775.417-1.303.762-1.602-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.135-.303-.54-1.52.105-3.165 0 0 1.007-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.648 1.645.243 2.862.12 3.165.765.84 1.233 1.91 1.233 3.22 0 4.608-2.805 5.625-5.475 5.922.432.372.816 1.102.816 2.222v3.293c0 .315.192.694.798.577C20.565 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12z`,
    viewBox: "0 0 24 24",
  },
  {
    id: 3,
    path: `M23.643 4.937c-.835.37-1.732.62-2.675.733a4.694 4.694 0 002.057-2.59 9.345 9.345 0 01-2.972 1.136 4.677 4.677 0 00-7.958 4.265A13.265 13.265 0 011.671 3.15a4.683 4.683 0 001.448 6.244 4.656 4.656 0 01-2.118-.583v.058a4.675 4.675 0 003.748 4.584 4.702 4.702 0 01-2.112.08 4.682 4.682 0 004.366 3.243 9.384 9.384 0 01-5.81 2.006A9.45 9.45 0 010 19.54a13.237 13.237 0 007.17 2.1c8.59 0 13.29-7.118 13.29-13.29 0-.202-.005-.404-.014-.605a9.484 9.484 0 002.326-2.408z`,

    viewBox: "0 0 24 24",
  },
  {
    id: 4,
    path: `M4.98 3.5C4.98 2.12 6.1 1 7.5 1s2.5 1.12 2.5 2.5S8.9 6 7.5 6 4.98 4.88 4.98 3.5ZM2 9h5v12H2V9Zm7.5 0H14v1.75h-.06c-.58-1.1-2-2.25-4.19-2.25C8.8 8.5 6 10.25 6 13.94V21h5v-4.5c0-1.53.3-2.72 1.85-2.72 1.82 0 2.6 1.3 2.6 2.72V21h5V13.94c0-3.69-2.2-5.44-6.25-5.44-2.19 0-3.61 1.15-4.19 2.25H9.5V9Z`,
    viewBox: "0 0 24 24",
  },
];
// Numbers Sections
export const Numbers = [
  {
    id: 1,
    number: 11,
    title: "Created Projects",
  },
  {
    id: 2,
    number: 50,
    title: "Projects",
  },
  {
    id: 3,
    number: 2,
    title: "Happy Clients",
  },
  {
    id: 4,
    number: 2,
    title: "Years",
  },
];

// services section

export const services = [
  {
    id: 1,
    title: "JUNIOR FRONTEND DEVELOPER",
    description:
      "I’m a Junior Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, focused on building responsive, user-friendly websites. I’m passionate about learning new technologies and improving my skills.",
  },
  {
    id: 2,
    title: "MERN STACK DEVELOPER",
    description:
      "I’m a passionate MERN Stack Developer with experience in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I focus on creating high-performance, secure, and user-friendly solutions tailored to client needs.",
  },
  {
    id: 3,
    title: "JUNIOR WEB DEVELOPER",
    description:
      "I’m a Junior Web Developer skilled in HTML, CSS, JavaScript, and React.js, with a focus on building responsive and user-friendly websites. Eager to learn and grow, I strive to enhance my skills and deliver high-quality web solutions.",
  },
  {
    id: 4,
    title: "JUNIOR FULLSTACK DEVELOPER",
    description:
      "I’m a Junior Fullstack Developer with experience in both frontend and backend technologies, including React.js, Node.js, Express.js, and MongoDB. Passionate about creating dynamic and scalable web applications, I focus on delivering seamless user experiences and high-quality code.",
  },
];
// skills sections
export const skills = [
  {
    id: 1,
    skill: "React",
    percentage: 70,
    icon: "https://img.icons8.com/office/40/react.png",
  },
  // {
  //   id:2,
  //   skill: "JavaScript",
  //   percentage: 55,
  //   icon: "https://img.icons8.com/office/40/javascript.png",
  // },
  {
    id: 2,
    skill: "Node.js",
    percentage: 30,
    icon: "https://img.icons8.com/color/48/nodejs.png",
  },
  {
    id: 3,
    skill: "Tailwind.CSS",
    percentage: 90,
    icon: "https://img.icons8.com/color/48/tailwindcss.png",
  },
  {
    id: 4,
    skill: "Html",
    percentage: 95,
    icon: "https://img.icons8.com/color/48/html-5.png",
  },
  {
    id: 5,
    skill: "CSS",
    percentage: 95,
    icon: "https://img.icons8.com/color/48/css3.png",
  },
];

// Experience And Education
// Corrected icon URLs
export const experience = [
  {
    id: 1,
    title: "Junior Full Stack Developer",
    company: "Stelleronix",
    year: "2024-11-22 - 2025-02-10",
    description:
      "At Stelleronix, I completed my first real-world project as a Junior Full Stack Developer. I built a dynamic web application using MongoDB, Express.js, React.js, and Node.js, focusing on user-friendly design, security, and performance. This project boosted my skills in both front-end and back-end development.",
    icon: "https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Stelleronix",
    year: "22-01-2025 - 10-02-2025",
    description:
      "As a Frontend Developer, I created a dynamic website focusing on a seamless user experience. Using HTML, CSS, JavaScript, and React.js, I ensured the website is responsive, interactive, and visually appealing across devices. The project helped me enhance my skills in frontend technologies and UI/UX design.",
    icon: "https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png",
  },
  // Add other experiences
];

export const education = [
  {
    id: 1,
    degree: "HSC(Humanities)",
    institution: "Chandona High School and College",
    year: "10-2-2018 to 15-12-2021",
    details:
      "Chandona High School and College provided a wonderful environment for student life. I had a beautiful and memorable experience during my time there, with a focus on learning and personal growth. My first college life was truly special and enriching.",
    icon: "https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v2.png",
  },
  {
    id: 2,
    degree: "BSS(Political Science)",
    institution: "Bhawal Mirzapur College",
    year: "12-3-2023 to present",
    details:
      "I study at Mirzapur College, where the environment is beautiful and supportive of both academic and personal growth. I'm enjoying my time here and look forward to learning more.",
    icon: "https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v2.png",
  },

  // Add other education entries
];

// Project section
export const projects = [
  // {
  //   id: 1,
  //   title: "Project 1",
  //   description:
  //     "A CRM (Customer Relationship Management) system is a software solution designed to help businesses manage interactions with customers, streamline processes, and improve customer relationships. It typically includes features for managing sales, marketing, customer support, and data analysis. By centralizing customer data, a CRM system allows businesses to improve communication, track customer activity, and make informed decisions",
  //   imageUrl: "/src/assets/Screenshot - 2025-02-22T193226.693.png",
  //   link: "https://my-art-craft-project.web.app/",
  //   clientRepo: "",
  //   serverRepo: "",
  // },
  {
    id: 2,
    title: "Art & Craft ",
    description:
      "It was my first experience in the real world It was my first experience in the real world",
    images: [
      "/src/assets/Screenshot 2025-03-03 110156.png",
      "/src/assets/Screenshot 2025-03-03 124400.png",
      "/src/assets/Screenshot 2025-03-03 124508.png",
      "/src/assets/Screenshot 2025-03-03 124620.png",
      "/src/assets/Screenshot 2025-03-03 124717.png",
    ],
    link: "https://my-art-craft-project.web.app/",
    clientRepo:
      "https://github.com/Abusayem99133/art-craft-client-site-project",
    serverRepo:
      "https://github.com/Abusayem99133/art---craft-server-site-project",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "It was my first experience in the real world It was my first experience in the real time",
    imageUrl: "/src/assets/WhatsApp Image 2025-02-04 at 21.40.47_9232240d.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "It was my first experience in the real world It was my first experience in the real world time",
    imageUrl: "/src/assets/Photo-59439169-eb20-102b-811a-b16f182a8c3f.jpg",
  },
];

// Contact Us

export const contactData = [
  {
    id: 1,
    title: "Address",
    description: "Sirajganj Sadar(6700), Rajshahi,Dhaka, Bangladesh",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/address--v1.png",
  },
  {
    id: 2,
    title: "Phone Number",
    description: "+8801765199133/+8801814082602(whatsapp)",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/phone.png",
  },
  {
    id: 3,
    title: "Email",
    description: "sayem99133@gmail.com",
    icon: "https://img.icons8.com/pastel-glyph/50/ffffff/new-post--v1.png",
  },
];
