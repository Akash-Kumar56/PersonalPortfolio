import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const ProjectInfo = [
  {
    title: "HomeRent App",
    desc: "A full-stack home rental platform built with the MERN stack, featuring JWT authentication with Bcrypt for secure user access. Users can sign up, log in, create, edit, and delete property listings with detailed information. The app allows image uploads, deletion, and drag & drop functionality, storing photos in MongoDB. It includes a booking system with a calendar, property feed filtering by category, and keyword search. Users can also add and remove wishlist items. Built with Redux for state management and styled using Material UI and Sass (SCSS) for a modern, responsive UI.",
    image: "Homepagerent.png",
    live: "Deployed",
    technologies: ["React", "Redux", "MUI", "Express.js", "Node.js", "MongoDB", "JWT"],
    link: "https://homyrentalclient3.onrender.com/",
    github: "https://github.com/Akash-Kumar56/HomyRental"
},
  {
    title: "E-comm App",
    desc: "Developed a full-featured e-commerce platform with a seamless user experience from product browsing to checkout. Integrated core functionalities like product search, filtering, and sorting to enhance user navigation. Implemented secure user authentication and role-based access to manage customer and admin accounts. Leveraged Redux for efficient state management, ensuring smooth and responsive interactions throughout the site. Incorporated Razorpay to handle secure online payments, enhancing trust and convenience for users.",
    image: "Ekart.png",
    live: "Not yet deployed",
    technologies: ["React", "Tailwind", "Redux", "MUI", "Razorpay", "Express.js", "Node.js", "MongoDB"],
    link: "",
    github: ""
},
{
  title: "YouTube Clone",
  desc: "A full-featured video streaming platform built using the MERN stack, replicating core YouTube functionality. This project includes video uploading, playback, commenting, and search features, providing a seamless user experience. Developed with MongoDB, Express.js, React.js, Node.js and Integrating the YouTube V3 API to fetch video data. it incorporates Redux for state management and optimized API integration for smooth, real-time interactions. This project demonstrates expertise in full-stack development, frontend design, and efficient data handling.",
  image: "Youtube.png",
  live: "Not deployed",
  technologies: ["React", "Youtube API", "Tailwind", "Node.js", "express.js"],
  link: "",
  github: ""
},
{
  title: "Insta Clone",
  desc: "Developed a full-featured Instagram clone using the MERN stack, Redux for state management, and Socket.io for real-time communication. This project replicates core Instagram functionalities, including user authentication, post creation, likes, comments, and live chat.",
  image: "Instagram.png",
  live: "Not yet deployed",
  technologies: ["React", "Express.js", "Tailwind", "Node.js", "Socket.io", "MongoDB", "Redux"],
  link: "https://github.com/Code-Mars/Instagram-Clone",
  github: "https://github.com/Code-Mars/Instagram-Clone"
},
]

const SkillInfo = [
  {
      title: "Frontend",
      skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
      ]
  },
  {
      title: "Backend",
      skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
  },
  {
      title: "Languages",
      skills: ["JavaScript", "TypeScript"]
  },
  {
      title: "Tools",
      skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
  }
]

const ExperienceInfo = [
  {
      role: "System Associate",
      company: "Infosys",
      date: "Jan 2023 - Present",
      desc: "I am horning my skills in the MERN stack. I've taken on increasingly complex projects, progressing from an Operations Executive Trainee to a System Associate. My work includes creating dynamic web applications, optimizing user interfaces, and building scalable backend systems. With a strong command of frontend technologies like React and backend development with Node.js, I thrive in collaborative environments and enjoy tackling new challenges to deliver high-quality, efficient solutions.",
      skills: ["React JS", "JavaScript", "Node JS", "MySQL", "MongoDB", "Express.js", "TypeScript", "Material UI", "Bootstrap", "REST APIs"]
  },
  {
      role: "Operation Executive",
      company: "Infosys",
      date: "Nov 2021 - Dec 2022",
      desc: "I specialize in building responsive and user-friendly interfaces using React. My role involves collaborating with cross-functional teams to deliver optimized and visually appealing web applications. With a strong foundation in JavaScript, CSS frameworks like Tailwind, and UI libraries, I’m dedicated to enhancing user experiences and crafting efficient solutions for complex business requirements.",
      skills: ["React.js", "JavaScript", "Tailwind", "Bootstrap", "MySQL", "Redux", "HTML5", "Git", "AI Tools"]
  },
  {
    role: "Operation executive trainee",
    company: "Infosys",
    date: "Jul 2021 - Oct 2021",
    desc: "I am focusing on enhancing my skills in frontend development. My work involves learning and applying modern frontend technologies to create responsive and user-friendly web applications. I am continuously developing my skills in JavaScript, React, and other frontend tools to build professional-grade applications that deliver great user experiences.",
    skills: ["HTML", "CSS", "JavaScript", "DBMS", "UI/UX", "Comunication"]
},
 
]

const Mypdf = [{
  image:"My_resume.png"
}]

const socialLinks = [
  { link: "https://github.com/Code-Mars", icon: IconBrandGithub },
  { link: "https://www.linkedin.com/in/chandrabhan-maurya", icon: IconBrandLinkedin },
  { link: "https://www.instagram.com/code.marshal_", icon: IconBrandInstagram }, 
  { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
  { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode }
];

export {ProjectInfo, SkillInfo, ExperienceInfo, socialLinks, Mypdf};
