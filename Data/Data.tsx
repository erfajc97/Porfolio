import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 9,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 178,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 742,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  // {
  //   id: 1,
  //   img: "/project5.png",
  //   name: "Portfolio",
  //   tools: ["Nextjs", "Tailwind", " Typescript"],
  //   git: "https://github.com/erfajc97/Porfolio",
  //   link: "https://erickjimenezcruz.netlify.app/",
  // },
  {
    id: 2,
    img: "/project1.png",
    name: "E-commers",
    detail: "This e-commerce project is a modern web application developed using advanced technologies such as React, Bootstrap, and Redux. It is designed to provide users with a smooth and engaging shopping experience while offering administrators a robust platform to manage inventory and orders.",
    tools: ["React", "Sass", "Bootstrap", "CSS", "Redux"],
    git: "https://github.com/erfajc97/e-commers",
    link: "https://iridescent-starlight-6f63da.netlify.app/",
  },
  {
    id: 4,
    img: "/project3.png",
    name: "App to exchange things or services, Cambialo",
    detail:"",
    tools: ["React Native", "Redux-Toolkit", "Tailwind CSS", "Expo"],
    git: "https://github.com/No-Country/c10-28-ft-reactchallenge-rn",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7056738971061485568/",
  },
  {
    id: 9,
    img: "/inventory.png",
    name: "Inventory",
    detail:"",
    tools: ["React", " CSS", "Redux", "Ant D"],
    git: "https://github.com/erfajc97/inventory",
    link: "https://store-inventorya-app.netlify.app/",
  },
   {
    id: 6,
    img: "/tickets.png",
    name: "Ticket creation and management",
    detail:"",
    tools: ["React", " Ant D", "Redux"],
    git: "https://github.com/erfajc97/Ticket",
    link: "https://ticketsflow.netlify.app/",
  },
   {
    id: 7,
    img: "/detail.png",
    name: "Detail Tickets",
    detail:"",
    tools: ["React", " CSS", "Redux", "Ant D"],
    git: "",
    link: "https://www.loom.com/share/f101d1f7f1bb4842aa37c00466e11533",
  },
   {
    id: 8,
    img: "/spaces.png",
    name: "Recreation of folder management like windows",
    detail:"",
    tools: ["React", " CSS", "Redux", "Ant D"],
    git: "",
    link: "https://www.loom.com/share/23fbe712f3b742c58d48a295ccd790d6",
  },
  // {
  //   id: 3,
  //   img: "/project2.png",
  //   name: "React Pokedex",
  //   tools: ["React", " CSS", "Redux"],
  //   git: "https://github.com/erfajc97/pokedex",
  //   link: "https://moonlit-biscochitos-61e833.netlify.app/",
  // },
  // {
  //   id: 5,
  //   img: "/project4.png",
  //   name: "Api Rick and Morty",
  //   tools: ["React", "Sass", " CSS"],
  //   git: "https://github.com/erfajc97/apiRickandMorty",
  //   link: "https://neon-eclair-9386f3.netlify.app/",
  // },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "ReactJS", level: 75 },
  { name: "NextJS", level: 65 },
  { name: "React Native", level: 70 },
  { name: "Tailwind", level: 70 },
  { name: "Bootstrap", level: 70 },
  { name: "Nodejs", level: 70 },
  { name: "Express", level: 70 },
  { name: "Sequelize", level: 70 },
  { name: "PostgreSQL", level: 70 },
  { name: "Redux", level: 70 },
  { name: "GitHub", level: 70 },
  { name: "Ant D", level: 70 },
  { name: "Zustand", level: 70 },
  { name: "Zustand", level: 70 },
  { name: "Zod", level: 70 },
  { name: "Radix U", level: 70 },
  { name: "CI/CD", level: 70 },
  { name: "Linux", level: 70 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "AR BS, EC GYE" },
  { id: 2, title: "Phones", text: "+5491176325093 +593978842711" },
  { id: 3, title: "Email", text: "erfajc97@gmail.com" },
];

export {navLinks, projects, countUpItems, services, skills, contacts };
