import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Spring Boot",
    image: "spring.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "REST API",
    image: "api.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Socket.io",
    image: "socket.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const DEVOPS_SKILL = [
  
] as const; 

export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "CI/CD",
    image: "cicd.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub Actions",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  
] as const;

export const PROJECTS = [
  {
    title: "Yoga Pose Detection & Correction System",
    description:
      "Developed a real-time yoga pose detection and correction system using MediaPipe Pose and machine learning models (CNN, XGBoost, SVM). The application analyzes body posture through webcam input and provides accuracy feedback and corrections. Integrated frontend visualization with backend ML models for an interactive user experience.",
    image: "/projects/yoga.png",
    link: "https://github.com/YOUR_USERNAME/yoga-pose-detection",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Built a full-stack real-time chat application using Node.js, Express, and WebSockets. Implemented features such as user authentication, group chats, message status (seen/delivered), and dynamic UI updates. Designed scalable backend APIs and ensured efficient real-time communication.",
    image: "/projects/chat.png",
    link: "https://github.com/SYEDMDSAAD/Chat-S.io",
  },
  {
    title: "Food Reservation System",
    description:
      "Developed a full-stack food reservation system that allows users to browse restaurants, view menus, and reserve tables in real time. Implemented secure user authentication, booking management, and RESTful APIs using Node.js and Express. Designed an efficient database schema with MongoDB to handle reservations and user data, ensuring a smooth and responsive user experience.",
    image: "/projects/food.png",
    link: "https://github.com/YOUR_USERNAME/food-reservation-system",
  },
  {
    title: "E-Commerce Backend System",
    description:
      "Designed and developed a scalable backend for an e-commerce platform using Node.js and Express. Implemented product management, user authentication, and payment integration using Razorpay. Ensured secure API handling and efficient database operations.",
    image: "/projects/ecommerce.png",
    link: "https://github.com/YOUR_USERNAME/ecommerce-backend",
  },
  {
    title: "Spring Boot Feedback Collector System",
    description:
      "Built a feedback collection system using Spring Boot with features like sentiment analysis, rate limiting, CSV export, and admin dashboard. Integrated AWS Comprehend via a microservice for sentiment detection and implemented secure backend architecture.",
    image: "/projects/feedback.png",
    link: "https://github.com/YOUR_USERNAME/feedback-app",
  },
  {
    title: "Hospital Management System",
    description:
      "Developed a full-stack Hospital Management System to streamline patient, doctor, and appointment management. Implemented features such as patient registration, appointment scheduling, medical record management, and secure authentication using Node.js, Express, and PostgreSQL. Designed RESTful APIs and optimized database queries to ensure efficient data handling and system performance.",
    image: "/projects/hospital.png",
    link: "https://github.com/YOUR_USERNAME/hospital-management-system",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
