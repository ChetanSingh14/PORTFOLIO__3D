import {
    backend,
    creator,
    css,
    git,
    html,
    javascript,
    mobile,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
    web,
    Devquery,
    HAMS,
    carrent,
    jobit,
    tripguide,
} from "../components/assets";

export const personalInfo = {
  name: "Chetan Singh",
  title: "Full Stack & Mobile Engineer",
  email: "siradhanachetan14@gmail.com",
  phone: "+91-9354864420",
  linkedin: "https://www.linkedin.com/in/chetan-singh-6022b1298/",
  github: "https://github.com/ChetanSingh14",
  location: "Noida / Gurugram, India",
  summary:
    "Full Stack and Mobile Engineer with expertise across the MERN stack, TypeScript, Next.js, and high-performance Android development. Proven track record at Insanger Pvt Ltd and Times Internet delivering scalable cross-platform mobile architectures, real-time ranking algorithms, and virtual economy integrations. Adept at optimizing server infrastructure with Nginx and AWS, managing cloud-to-mobile data pipelines, and writing efficient, production-ready code backed by strong Data Structures and Algorithms (DSA) foundations."
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack MERN Developer",
    icon: web,
    description: "Building scalable web apps using React, Next.js, Express & Node.js."
  },
  {
    title: "Mobile Engineer (React Native & Android)",
    icon: mobile,
    description: "Architecting high-performance iOS and Android mobile ecosystems."
  },
  {
    title: "Backend & Cloud Architect",
    icon: backend,
    description: "Optimizing PostgreSQL, MongoDB, AWS, Redis & Nginx server performance."
  },
  {
    title: "DevSecOps & AI Engineer",
    icon: creator,
    description: "Integrating Gemini LLM, Pinecone vector RAG, AST scanners & automated workflows."
  },
];

const technologyCategories = [
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Supabase"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "React Native (Expo/CLI)", "TypeScript", "Angular", "Tailwind CSS", "Zustand", "Material UI"]
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "GCP", "Vercel", "Nginx", "Docker", "Git/GitHub", "GitHub Actions", "BullMQ", "Linux"]
  },
  {
    category: "Realtime & Integrations",
    skills: ["Socket.IO", "Stripe", "PayU", "Cashfree", "Razorpay", "REST APIs", "Server-Sent Events"]
  }
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Full Stack MERN | Android Developer",
    company_name: "Insanger Technologies Private Limited",
    company_url: "https://www.linkedin.com/company/insanger-technologies",
    company_icon: "insanger",
    iconBg: "#6366F1",
    date: "March 2025 – Present",
    location: "Noida, India",
    points: [
      "Virtual Economy Architecture: Spearheaded the design of a secure transactional system ('Backpack Store'), enabling users to trade items with virtual currency, increasing user retention by 20%.",
      "High-Performance Ranking System: Constructed a live leaderboard using optimized PostgreSQL transactional integrity, reducing query latency to under 50ms for real-time user earning updates.",
      "Infrastructure Optimization: Orchestrated the deployment of production servers on AWS with Nginx load balancing, handling concurrent traffic spikes while maintaining 99.9% uptime.",
      "Admin Dashboard Efficiency: Revamped internal Admin Panel for content moderation, delivering real-time analytics that reduced manual administrative workload by 30%.",
      "Scalable Social Features: Engineered robust backend logic for high-volume social interactions (Posts, Likes, Comments), optimizing database schemas to handle 10k+ daily write operations."
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Times Internet",
    company_url: "https://timesinternet.in",
    company_icon: "times",
    iconBg: "#E11D48",
    date: "July 2024 – August 2024",
    location: "Noida, India",
    points: [
      "Dynamic Interface Engineering: Enhanced the SPOG portal (times.spog.ai) by building dynamic issue creation modules, standardizing complex forms for Incidents, Problems, and IT Helpdesk tickets.",
      "Frontend Performance: Implemented responsive UI components using Angular (v14+) and Python FastAPI, improving page load speeds and cross-device compatibility.",
      "Agile Workflow Integration: Collaborated within an Agile environment using Atlassian JIRA, contributing to daily standups and ensuring timely sprint task completion."
    ],
  },
  {
    title: "Frontend Web Developer (Internship)",
    company_name: "FnMafia Technologies",
    company_icon: "fnmafia",
    iconBg: "#0F172A",
    date: "March 2024 – April 2025",
    location: "Remote, India",
    points: [
      "Interactive Client Solutions: Contributed to creating custom client websites focusing on rich visual interfaces and cross-browser responsiveness.",
      "Modern Web Stack: Utilized HTML5, CSS3, JavaScript, React.js, and Tailwind CSS to build user-centric web applications.",
      "Team Collaboration: Worked closely with senior developers to integrate APIs and maintain clean component architecture."
    ],
  },
  {
    title: "Software Developer (Internship)",
    company_name: "AY Tech",
    company_icon: "aytech",
    iconBg: "#0284C7",
    date: "May 2024 – July 2024",
    location: "Remote, India",
    points: [
      "Full SDLC Engagement: Hands-on contribution across requirements gathering, system architecture design, and full-stack coding.",
      "Agile Methodology: Participated in Scrum sprints, daily standups, and retrospectives to improve feature delivery velocity."
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Summer of Bitcoin | GSSoC | Hacktoberfest",
    company_icon: "opensource",
    iconBg: "#F59E0B",
    date: "October 2024 – Present",
    location: "Remote",
    points: [
      "Summer of Bitcoin: Contributed to open-source Bitcoin developer ecosystems and developer tools.",
      "GirlScript Summer of Code (GSSoC): Actively enhanced codebases, resolved open issues, and submitted verified PRs across multi-language projects.",
      "Hacktoberfest: Successfully submitted quality open-source contributions across community repositories."
    ],
  }
];

const education = [
  {
    institution: "Polaris School of Technology",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    period: "2023 – 2027",
    location: "Gurugram, India",
    highlights: [
      "Core focus on Data Structures & Algorithms, System Architecture, and Software Development.",
      "Active leader in college tech hackathons and open-source initiatives."
    ]
  }
];

const achievements = [
  {
    title: "100+ Algorithmic Problems Solved",
    category: "Problem Solving",
    description: "Solved 100+ complex Data Structures and Algorithms problems on LeetCode and GeeksForGeeks, focusing heavily on Graph Theory.",
    iconName: "Code2"
  },
  {
    title: "Open Source Programs",
    category: "Open Source",
    description: "Actively contributed to prestigious programs including Summer of Bitcoin and GirlScript Summer of Code (GSSoC).",
    iconName: "GitPullRequest"
  },
  {
    title: "Hackathon Top Rank Winner",
    category: "Competitions",
    description: "Secured top rank in college 24-hour hackathon for building an innovative production-ready tech solution under tight deadlines.",
    iconName: "Trophy"
  }
];

const projects = [
  {
    name: "DevSecOps AI Code Reviewer",
    category: "AI & DevSecOps",
    description:
      "Architected an end-to-end DevSecOps platform integrating a local AST scanner (< 5ms), Gemini SSE streaming (< 1s), and Pinecone vector caching (<= 50ms) with RAG-based repository rule enforcement. Features HMAC-verified GitHub App for inline PR comments, Monaco IDE diff previews, and Socket.io real-time chat sessions.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Gemini 2.5 Flash", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Pinecone Vector DB", color: "purple-cyan-gradient" },
      { name: "Monaco Editor", color: "orange-text-gradient" },
    ],
    image: Devquery,
    source_code_link: "https://github.com/ChetanSingh14/DevSecOps-AI-Code-Reviewer",
    demo_link: "",
  },
  {
    name: "UecoHub - Influencer Content Platform",
    category: "Full Stack & Mobile",
    description:
      "Spearheaded end-to-end development as Tech Lead, managing 2 interns to architect and deploy a production-ready influencer content delivery ecosystem across an Android app and Next.js admin console. Engineered low-latency AWS infrastructure featuring PayU payments, real-time chat, and automated notifications.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React Native", color: "green-text-gradient" },
      { name: "AWS", color: "amber-pink-gradient" },
      { name: "PayU Gateway", color: "purple-cyan-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/ChetanSingh14",
    demo_link: "https://play.google.com/store",
  },
  {
    name: "Cab Booking Application Clone",
    category: "Mobile Apps",
    description:
      "Delivered a full-featured mobile application with real-time tracking, utilizing geospatial queries to achieve accurate driver-user matching and complex fare calculation algorithms based on distance and time metrics.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Geospatial Queries", color: "emerald-cyan-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/ChetanSingh14/Cab-Booking-App",
    demo_link: "",
  },
  {
    name: "DEV_QUERY - Developer Q&A Platform",
    category: "Full Stack",
    description:
      "A developer Q&A community platform where coders ask technical questions, share code snippets, vote on solutions, and collaborate with the community.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express.js", color: "purple-cyan-gradient" },
    ],
    image: Devquery,
    source_code_link: "https://github.com/ChetanSingh14/DEV_QUERY",
    demo_link: "",
  },
  {
    name: "Hospital Appointment Management System (HAMS)",
    category: "Full Stack",
    description:
      "Comprehensive full-stack medical appointment management platform designed to streamline doctor appointment booking, patient histories, and administrative workflows.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "amber-pink-gradient" },
    ],
    image: HAMS,
    source_code_link: "https://github.com/ChetanSingh14/Management-System",
    demo_link: "",
  },
];

export {
  experiences,
  projects,
  services,
  technologies,
  technologyCategories,
  education,
  achievements
};
