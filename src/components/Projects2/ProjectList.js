import {
  opportunityboard,
  projectOne,
  projectThree,
  projectTwo,
  eazzidoc,
  glucoai,
  opportunityboard,
} from "../../assets/index";
export const projectList = [
  {
    _id: 900,
    title: "EazziDoc Telemedicine Platform",
    img: eazzidoc,
    category: "ML Powered Web App",
    date: "November 2024",
    github_link: "https://github.com/Makuo67/iCatch",
    description:
      "The Eazzi Doc Telemedicine Dashboard web app is designed to enhance healthcare accessibility across underserved regions by providing a platform where patients and healthcare providers can engage in remote medical consultations and services. This user-friendly dashboard facilitates online appointments, medical consultations, and health monitoring, and AI diagnosis aiming to bridge the healthcare service gap in regions with geographical barriers, limited medical personnel, and infrastructure constraints.",
    tech: [
      "Densenet201 model",
      "Groq Llama3.1b versatile model",
      "Javascript, Supabase API, FASTAPI",
    ],
  },
  {
    _id: 901,
    title: "GlucoAI",
    img: glucoai,
    category: "Web Application",
    date: "April 2024",
    github_link: "https://github.com/Makuo67/GlucoAI",
    description:
      "An advanced machine learning model that predicts your risk of developing diabetes based on comprehensive health data. ",
    tech: ["Reactjs", "CNN", "FastAPI"],
  },
  {
    _id: 999,
    title: "ChatHub",
    img: projectOne,
    category: "Mobile App",
    date: "October 2023",
    github_link: "https://github.com/vassa33/ChatHub",
    description:
      "ChatHub is a dynamic and user-friendly chatting application that connects people through various groups. With ChatHub, users can join diverse conversation rooms or create their own groups to interact with others who share similar interests, passions, or objectives.",
    tech: ["Flutter", "GPT-3.5_turbo", "Firebase"],
  },
  {
    _id: 1000,
    title: "NISR DashBoard",
    img: projectThree,
    category: "Data Visualization ",
    date: "November 2023",
    github_link: "https://github.com/Makuo67/NISR_Datathon",
    description:
      "This project presents an interactive dashboard that provides in-depth insights into GDP (Gross Domestic Product) and CPI (Consumer Price Index) trends. Designed to aid economic analysts, policymakers, and business strategists, the dashboard offers a comprehensive view of crucial economic indicators and their implications.",
    tech: ["Streamlit"],
  },

  {
    _id: 1001,
    img: opportunityboard,
    title: "ALU Opprotunities Board",
    category: "Fullstack development",
    date: "Mar - Apr 2023",
    live_link:
      "https://drive.google.com/file/d/1D914g0HxjDLMQM0KmBGRbfIxjBf69rZj/view?usp=share_link",
    github_link: "https://github.com/ALU-Opportunity-Board/opportunity-board",
    description:
      "ALU opportunities board is a platform that allows  African Leadership University students and staff to post opportunities they have come across. It also allows students to view opprotunities posted by other students. It has google authentication which allows ALU students to access the platform.",
    tech: ["Python", "Flask", "React", "Postgres"],
  },

  {
    _id: 1002,
    title: "AirBnB clone",
    img: projectOne,
    category: "Backend Cloning",
    date: "Feb - Apr 2023",
    live_link: "",
    github_link: "https://github.com/Makuo67/alu-AirBnB_clone_v4",
    description:
      "This project is a replica of how the backend of AirBnb might looks like. It provides an adminstrative console to manage the backend and database for a website like AirBnb. Currently the frontend is under development which will allow users to create an account, login, logout, create a new place, update a place, delete a place, view all places, places by city, etc.",
    tech: ["Python", "Flask", "MySql"],
  },

  {
    _id: 1003,
    title: "ToDO App",
    img: projectTwo,
    category: "Full Stack Development",
    date: "November 2023",
    live_link: "",
    github_link: "https://github.com/Makuo67/today",
    description:
      "This is my final project for my BAG Junior Software Development Program. A simple, yet powerful React-based TODO application for managing your daily tasks efficiently.",
    tech: ["React"],
  },

  {
    _id: 1004,
    title: "Portfolio Website",
    category: "Web Developement",
    date: "December 2023",
    live_link: "",
    github_link: "https://github.com/Makuo67/portfolio",
    description:
      "If you are reading this, you are already on my portfolio website. I built this website using React and Tailwindcss. If you enjoy the look, have also a look at the source code and let me know what you think.",
    tech: ["React", "Tailwindcss"],
  },
  {
    _id: 1004,
    title: "Biocycle",
    category: "Full StackDevelopement",
    date: "June 2023",
    live_link: "",
    github_link: "https://github.com/Makuo67/Biocycle",
    description:
      "A calculator for composting to improve environmental sustainability built with HTML/CSS, Javascript and Flask",
    tech: ["React", "Tailwindcss"],
  },
];
