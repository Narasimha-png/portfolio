// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import django from "./assets/techstack/django.png";
import colab from "./assets/techstack/colab.jpeg";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import nodejs from "./assets/techstack/nodejs.png";
import java from "./assets/techstack/java.jpeg";
import python from "./assets/techstack/python.jpeg";
import cpp from "./assets/techstack/cpp.webp";
import sql from "./assets/techstack/sql.jpeg";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
//codingplatforms images
import leetcode from "./assets/techstack/leetcode.jpeg";
import codeforces from "./assets/techstack/codeforces.png";
import gfg from "./assets/techstack/gfg.png";
import codechef from "./assets/techstack/codechef.jpeg";
import codingninjas from "./assets/techstack/codingninjas.jpeg";
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sri Lakshmi Narasimha S",
  tagline: "Competitive programming || Web Dev || MERN",
  img: profile,
  about: `I'm a 3rd-year B.Tech student at Sree Vidyanikethan Engineering College, Tirupati, studying Computer Science CSE. I'm passionate about competitive programming and skilled in solving problems. Additionally, I enjoy web development using the MERN stack, where I create dynamic and user-friendly applications.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/slnarasimha/",
  github: "https://github.com/Narasimha-png",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/narasimha_tiger_/",
};



// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Technology in Computer Science & Engineering",
    Company: "Sree Vidyanikethan Engineering College",
    Location: "Tirupati , Andhra Pradesh",
    Type: "Full Time",
    Duration: "DEC 2021 - MAY 2025",
  },
  {
    Position: "Intermediate",
    Company: "SUGM Junior College",
    Location: "B.KothaKota , Annamayya[dist] , Andhra Pradesh",
    Type: "Full Time",
    Duration: "JUN 2019 - MAR 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  nodejs: nodejs,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  colab:colab,
  github: github,
  java:java,
  python:python,
  cpp:cpp,
  sq:sql ,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "YouTube Creators AutoReply",
    image: projectImage1,
    description: `•It auto suggest a comment based on previous comments of the video using sentiment analysis.`,
    techstack: "HTML/CSS, JavaScript, Node.js, Python ",
    previewLink: "/",
    githubLink: "https://github.com/Narasimha-png/YouTube-Creators-AutoReply",
  },
  {
    title: "Contest Notifier ",
    image: projectImage2,
    description: `•	Developed a real time contest notifier which notifies the timings of contests everyday @ 1:00AM.`,
    techstack: "HTML/CSS, JavaScript, FireBase , CRON jobs , Node.js",
    previewLink: "https://contesttoday.onrender.com/",
    githubLink: "https://github.com/Narasimha-png/ContestToday",
  },
  {
    title: "Photon eLearning Platform",
    image: projectImage3,
    description: `	Developed a platform with tests , instant results and bunch of resources.`,
    techstack: "NodeJs (backend) and HTML, CSS, JavaScript, Bootstrap (frontend).",
    previewLink: "/",
    githubLink: "https://github.com/sree9398/Simple-Mail-Clone-Application",
  },
  
];

export const codingplatforms=[
    {
      title:'leetcode',
      image: leetcode,
      link:"https://leetcode.com/u/Narasimha-png/"
    },
    {
      title:'codeforces',
      image: codeforces,
      link:"https://codeforces.com/profile/NarasimhaTiger"
    },
    {
      title:'geeks for geeks',
      image: gfg,
      link:"https://www.geeksforgeeks.org/user/narasimhas/"
    },
    {
      title:'coding ninjas',
      image: codingninjas,
      link:"https://www.naukri.com/code360/profile/9ea7aa4f-14e9-47d7-814a-2a0b2a0929eb"
    },
    {
      title:'codechef',
      image: codechef,
      link:"https://www.codechef.com/users/narasimhas"
    }
];
// Enter your Contact Details here
export const contactDetails = {
  email: "narasimhas9490@gmail.com",
  phone: "+91 8008130603",
};
