import {
    mobile,
    ux,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    lagcloud,
    Barbers,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UX Designer",
      icon: ux,
    },
    {
      title: "Next.js Developer",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Lagcloud Solution",
      icon: lagcloud,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Built and maintained dynamic web applications using React.js, enhancing user experience and performance.",
        "Optimized application performance, reducing load times by 30% through code refactoring and efficient state management.",
        "Collaborated with UI/UX designers to implement engaging, pixel-perfect interfaces.",
        "Conducted comprehensive unit and integration testing to ensure software quality and reliability.",
      ],
    },
    
    {
      title: "UX Design",
      company_name: "Barbers Limited",
      icon: Barbers,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Redesigned user interfaces for Barber Limied web applications, improving customer satisfaction by 20%.",
        "Conducted user research and usability testing to gather insights for design improvements.",
        "Created wireframes, prototypes, and design documentation to streamline development processes.",
        "Collaborated with developers to ensure accurate implementation of design concepts.",

      ],
    },
    {
      title: "Next.js Developer",
      company_name: "V-ent",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed server-rendered web applications using Next.js, improving performance and SEO.",
    "Integrated APIs and implemented dynamic routing to create a seamless user experience.",
    "Optimized application performance, achieving a 25% reduction in load times through advanced caching techniques.",
    "Collaborated with design and product teams to implement scalable and reusable components.",
    "Conducted code reviews and maintained high standards for code quality and best practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Peter proved me wrong.",
      name: "Sarah Smith",
      designation: "Managing Director",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Peter does.",
      name: "Folarin Odeyemi",
      designation: "CEO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Peter optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Manager",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Lagcloud Webisite",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      
    },
    
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
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
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };