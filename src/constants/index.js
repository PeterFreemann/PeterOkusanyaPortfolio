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

  import winner from "../assets/company/winner.jpg";
  import folarin from "../assets/company/folarin.jpg";

  
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
      date: "Aug 2021 - April 2023",
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
      date: "Aug 2022 - June 2023",
      points: [
        "Redesigned user interfaces for Barber Limied web applications, improving customer satisfaction by 20%.",
        "Conducted user research and usability testing to gather insights for design improvements.",
        "Created wireframes, prototypes, and design documentation to streamline development processes.",
        "Collaborated with developers to ensure accurate implementation of design concepts.",

      ],
    },
    {
      title: "React Developer",
      company_name: "Barbers Limited",
      icon: Barbers,
      iconBg: "#383E56",
      date: "Aug 2022 - Dec 2024",
      points: [
        "Revamped the UI/UX of Barbers Limited web applications using React and Material UI, leading to a 20% increase in user satisfaction and engagement.",
        "Integrated customer feedback loops, conducting user research and usability tests to drive data-informed design decisions.",
        "Developed interactive wireframes and high-fidelity prototypes using Figma, enhancing collaboration between design and development teams.",
        "Worked closely with backend developers and QA engineers to ensure seamless translation of design specs into fully responsive web interfaces.",
      ]
    },
    {
      title: "Next.js Developer",
      company_name: "V-ent",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2025 - Present",
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
      name: "Winner Coca",
      designation: "Managing Director",
      company: "V-ent",
      image: winner,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Peter does.",
      name: "Folarin Odeyemi",
      designation: "CEO",
      company: "Obaela",
      image: folarin,
    },
    {
      testimonial:
        "After Peter optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lekan Oshipitan",
      designation: "Manager",
      company: "Lagcloud-solutions",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Lagcloud Webisite",
      description:
        "Cloud-based platform delivering web and mobile solutions for businesses, focused on scalability and user experience.",
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
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      
    },
    {
      name: "V-ent",
      description:
        "Web platform for discovering, booking, and managing gaming events and venues, supporting titles like PUBG, FIFA, and more.",
      tags: [
        {
          name: "Nexjjs",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
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