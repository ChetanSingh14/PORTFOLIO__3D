import {
    backend,
    carrent,
    creator,
    css,
    git,
    html,
    javascript,
    meta,
    mobile,
    mongodb,
    nodejs,
    reactjs,
    redux,
    shopify,
    tailwind,
    tesla,
    threejs,
    tripguide,
    typescript,
    web,
    // HAMS,
} from "../components/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      "title": "Software Development Intern",
      "company_name": "Times Internet",
      "icon": "times_internet_icon", // Replace with the actual icon file
      "iconBg": "#E6DEDD",
      "date": "July 2024 - Aug 2024",
      points: [
        "Developed dynamic, user-friendly interfaces for various issue types, including Incident, Problem, Postmortem, Task, HR Helpdesk, and IT Helpdesk, to streamline the user experience on Times Internet’s SPOG platform.",
    "Contributed to creating a cost-effective in-house solution inspired by Atlassian JIRA, reducing dependency on external tools and improving team efficiency.",
    "Focused on UI development using Angular (v12) for the frontend, ensuring smooth and interactive user experiences."
      ],
    },
    {
      "title": "Software Development Intern",
      "company_name": "AYTECH",
      "icon": 'aytech_icon', // Replace with the actual icon file
      "iconBg": "#E6DEDD",
      "date": "May 2024 - July 2024",
      "points": [
        "Gained hands-on experience in various phases of the Software Development Life Cycle (SDLC), including requirements gathering, analysis, design, architecture, implementation, and coding, ensuring a comprehensive approach to software development.",
        "Contributed to Agile development processes, utilizing Scrum methodology for sprint planning, daily stand-ups, and retrospectives to enhance project delivery and team collaboration."
      ]
    }
    ,
    {
      "title": "Web Development Intern",
      "company_name": "FN Mafia",
      "icon": 'fn_mafia_icon', // Replace with the actual icon file
      "iconBg": "#E6DEDD",
      "date": "March 2024 - August 2024",
      "points": [
        "As a member of FN Mafia Technologies, contributed to creating websites for clients, focusing on completing specific portions of the projects.",
        "Utilized a range of technologies including HTML, CSS, JavaScript, and frameworks like React or Angular to develop user-friendly and visually appealing web solutions.",
        "Worked with relevant coursework including HTML/CSS, MERN stack, JavaScript, React, and Tailwind to enhance my development skills and contribute effectively to team projects."
      ]
    }
    ,
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dev_Query",
      description:
        "Dev_Query is a Q&A platform where developers ask coding questions, share knowledge, and collaborate with the community",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDb",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://github.com/ChetanSingh14/DEV_QUERY",
    },
    {
      name: "Management System",
      description:
        "Hospital Appointment Management System (HAMS), a full-stack web application designed to streamline the process of booking medical appointments and managing patient interactions",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      // image: ,
      source_code_link: "https://github.com/ChetanSingh14/Management-System",
    },
    {
      name: "DNS Server",
      description:
        "DNS is a protocol used to resolve domain names to IP addresses. I build a DNS server that's capable of responding to basic DNS queries.Along the way dived deep into the DNS protocol, DNS packet format, DNS record types, UDP servers and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/anish877/dns-server/tree/master",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };
