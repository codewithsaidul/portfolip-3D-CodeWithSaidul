import spotlight1 from "../assets/spotlight1.png"
// import spotlight2 from "../assets/spotlight2.png"
import spotlight3 from "../assets/spotlight3.png"
// import spotlight4 from "../assets/spotlight4.png"
import spotlight5 from "../assets/spotlight5.png"
import reactLogo from "../assets/react.svg"
import tailwindcss from "../assets/tailwindcss.png"
// import typescriptLogo from "../assets/typescript.png"
import framer from "../assets/framer.png"
import logo1 from "../assets/project-logo1.png"
// import logo2 from "../assets/project-logo2.png"
import logo3 from "../assets/project-logo3.png"
// import logo4 from "../assets/project-logo4.png"
import logo5 from "../assets/project-logo5.png"

import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
import review4 from "../assets/review4.png"



export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: review1,
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: review2,
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: review3,
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: review4,
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'GizmoMart - a E-commerce Platform',
      desc: 'Gizmomart is your one-stop online store for cutting-edge electronics. From high-performance PCs to premium cameras and headphones, we bring the latest tech to your fingertips, offering unbeatable quality and exceptional value for tech enthusiasts and everyday users alike.',
      subdesc:
        'Gizmomart offers top-quality PCs, cameras, and headphones, combining cutting-edge technology with unbeatable value for tech enthusiasts and everyday users',
      href: 'https://gizmo-mart-client.vercel.app',
      texture: '/textures/project/project1.mp4',
      logo: logo1,
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: spotlight1,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindcss,
        },
        {
          id: 3,
          name: 'Framer Motion',
          path: framer,
        },
      ],
    },


    {
      title: 'Saku Estates - Real Estate Management',
      desc: 'Saku Estates is a comprehensive real estate platform built with Next.js and Tailwind CSS. It simplifies property buying, selling, and renting with modern design, powerful search tools, and a seamless user experience tailored for homeowners and renters alike.',
      subdesc:
        'Saku Estates makes property transactions simple with intuitive tools and a modern design, perfect for buying, selling, or renting your dream home.',
      href: 'https://saku-estates.web.app',
      texture: '/textures/project/project2.mp4',
      logo: logo3,
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: spotlight3,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindcss,
        },
      ],
    },


    {
      title: 'Personal Portfolio - Bringing Ideas to Life in 3D',
      desc: 'Explore a captivating 3D portfolio showcasing my expertise in front-end development, UI/UX design, and interactive web experiences. Built with cutting-edge technologies, it offers a dynamic journey through my skills, projects, and creative solutions.',
      subdesc:
        'Dive into my 3D portfolio to discover interactive designs, innovative projects, and a showcase of my front-end development and UI/UX skills',
      href: 'https://codewithsaidul.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: logo5,
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: spotlight5,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindcss,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: framer,
        },
      ],
    },
  ];
  // export const myProjects = [
  //   {
  //     title: 'Podcastr - AI Podcast Platform',
  //     desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
  //     subdesc:
  //       'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
  //     href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
  //     texture: '/textures/project/project1.mp4',
  //     logo: logo1,
  //     logoStyle: {
  //       backgroundColor: '#2A1816',
  //       border: '0.2px solid #36201D',
  //       boxShadow: '0px 0px 60px 0px #AA3C304D',
  //     },
  //     spotlight: spotlight1,
  //     tags: [
  //       {
  //         id: 1,
  //         name: 'React.js',
  //         path: reactLogo,
  //       },
  //       {
  //         id: 2,
  //         name: 'TailwindCSS',
  //         path: tailwindcss,
  //       },
  //       {
  //         id: 3,
  //         name: 'TypeScript',
  //         path: typescriptLogo,
  //       },
  //       {
  //         id: 4,
  //         name: 'Framer Motion',
  //         path: framer,
  //       },
  //     ],
  //   },

  //   {
  //     title: 'LiveDoc - Real-Time Google Docs Clone',
  //     desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
  //     subdesc:
  //       'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
  //     href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
  //     texture: '/textures/project/project2.mp4',
  //     logo: logo2,
  //     logoStyle: {
  //       backgroundColor: '#13202F',
  //       border: '0.2px solid #17293E',
  //       boxShadow: '0px 0px 60px 0px #2F6DB54D',
  //     },
  //     spotlight: spotlight2,
  //     tags: [
  //       {
  //         id: 1,
  //         name: 'React.js',
  //         path: reactLogo,
  //       },
  //       {
  //         id: 2,
  //         name: 'TailwindCSS',
  //         path: tailwindcss,
  //       },
  //       {
  //         id: 3,
  //         name: 'TypeScript',
  //         path: typescriptLogo,
  //       },
  //       {
  //         id: 4,
  //         name: 'Framer Motion',
  //         path: framer,
  //       },
  //     ],
  //   },

  //   {
  //     title: 'CarePulse - Health Management System',
  //     desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //     subdesc:
  //       'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //     href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //     texture: '/textures/project/project3.mp4',
  //     logo: logo3,
  //     logoStyle: {
  //       backgroundColor: '#60f5a1',
  //       background:
  //         'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //       border: '0.2px solid rgba(208, 213, 221, 1)',
  //       boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //     },
  //     spotlight: spotlight3,
  //     tags: [
  //       {
  //         id: 1,
  //         name: 'React.js',
  //         path: reactLogo,
  //       },
  //       {
  //         id: 2,
  //         name: 'TailwindCSS',
  //         path: tailwindcss,
  //       },
  //       {
  //         id: 3,
  //         name: 'TypeScript',
  //         path: typescriptLogo,
  //       },
  //       {
  //         id: 4,
  //         name: 'Framer Motion',
  //         path: framer,
  //       },
  //     ],
  //   },

  //   {
  //     title: 'Horizon - Online Banking Platform',
  //     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //     subdesc:
  //       'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //     texture: '/textures/project/project4.mp4',
  //     logo: logo4,
  //     logoStyle: {
  //       backgroundColor: '#0E1F38',
  //       border: '0.2px solid #0E2D58',
  //       boxShadow: '0px 0px 60px 0px #2F67B64D',
  //     },
  //     spotlight: spotlight4,
  //     tags: [
  //       {
  //         id: 1,
  //         name: 'React.js',
  //         path: reactLogo,
  //       },
  //       {
  //         id: 2,
  //         name: 'TailwindCSS',
  //         path: tailwindcss,
  //       },
  //       {
  //         id: 3,
  //         name: 'TypeScript',
  //         path: typescriptLogo,
  //       },
  //       {
  //         id: 4,
  //         name: 'Framer Motion',
  //         path: framer,
  //       },
  //     ],
  //   },

  //   {
  //     title: 'Imaginify - AI Photo Manipulation App',
  //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //     subdesc:
  //       'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //     texture: '/textures/project/project5.mp4',
  //     logo: logo5,
  //     logoStyle: {
  //       backgroundColor: '#1C1A43',
  //       border: '0.2px solid #252262',
  //       boxShadow: '0px 0px 60px 0px #635BFF4D',
  //     },
  //     spotlight: spotlight5,
  //     tags: [
  //       {
  //         id: 1,
  //         name: 'React.js',
  //         path: reactLogo,
  //       },
  //       {
  //         id: 2,
  //         name: 'TailwindCSS',
  //         path: tailwindcss,
  //       },
  //       {
  //         id: 3,
  //         name: 'TypeScript',
  //         path: typescriptLogo,
  //       },
  //       {
  //         id: 4,
  //         name: 'Framer Motion',
  //         path: framer,
  //       },
  //     ],
  //   },
  // ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      // deskScale: isSmall ? 0.06 : isMobile ? 0.065 : isTablet ? 0.07 : 0.065,
      // deskPosition: isMobile ? [0.5, -4.5, 0] : isTablet ? [0.25, -5, 0] : [0.25, -10, 0] ,
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -7, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [4, 6, 0] : isMobile ? [5, 6, 0] : isTablet ? [5, 4, 0] : [12, 1, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-35, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];