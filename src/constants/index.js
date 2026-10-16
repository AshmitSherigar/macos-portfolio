const navLinks = [
  {
    id: 1,
    name: 'Projects',
    type: 'finder',
  },
  {
    id: 3,
    name: 'Contact',
    type: 'contact',
  },
  {
    id: 4,
    name: 'Resume',
    type: 'resume',
  },
];

const navIcons = [
  {
    id: 1,
    img: '/icons/wifi.svg',
  },
  {
    id: 2,
    img: '/icons/search.svg',
  },
  {
    id: 3,
    img: '/icons/user.svg',
  },
  {
    id: 4,
    img: '/icons/mode.svg',
  },
];

const dockApps = [
  {
    id: 'finder',
    name: 'Portfolio', // was "Finder"
    icon: 'finder.png',
    canOpen: true,
  },
  {
    id: 'safari',
    name: 'Articles', // was "Safari"
    icon: 'safari.png',
    canOpen: true,
  },
  {
    id: 'photos',
    name: 'Gallery', // was "Photos"
    icon: 'photos.png',
    canOpen: true,
  },
  {
    id: 'camera',
    name: 'Camera', // was "Camera"
    icon: 'camera.png',
    canOpen: true,
  },
  {
    id: 'contact',
    name: 'Contact', // or "Get in touch"
    icon: 'contact.png',
    canOpen: true,
  },
  {
    id: 'terminal',
    name: 'Skills', // was "Terminal"
    icon: 'terminal.png',
    canOpen: true,
  },
  {
    id: 'trash',
    name: 'Archive', // was "Trash"
    icon: 'trash.png',
    canOpen: true,
  },
];

const techStack = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript'],
  },
  // {
  //   category: 'Mobile',
  //   items: ['React Native', 'Expo'],
  // },
  {
    category: 'Styling',
    items: ['TailwindCSS', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'SpringBoot'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Dev Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
];

const socials = [
  {
    id: 1,
    text: 'Github',
    icon: '/icons/github.svg',
    bg: '#24292e',
    link: 'https://github.com/AshmitSherigar',
  },
  // {
  //   id: 2,
  //   text: 'Platform',
  //   icon: '/icons/atom.svg',
  //   bg: '#4bcb63',
  //   link: 'https://jsmastery.com/',
  // },
  {
    id: 3,
    text: 'Twitter/X',
    icon: '/icons/twitter.svg',
    bg: '#ff866b',
    link: 'https://x.com/AshmitSherigar',
  },
  {
    id: 4,
    text: 'LinkedIn',
    icon: '/icons/linkedin.svg',
    bg: '#05b6f6',
    link: 'https://www.linkedin.com/in/ashmitsherigar/',
  },
];

const photosLinks = [
  {
    id: 1,
    icon: '/icons/gicon1.svg',
    title: 'Library',
  },
  {
    id: 2,
    icon: '/icons/gicon2.svg',
    title: 'Memories',
  },
  {
    id: 3,
    icon: '/icons/file.svg',
    title: 'Places',
  },
  {
    id: 4,
    icon: '/icons/gicon4.svg',
    title: 'People',
  },
  {
    id: 5,
    icon: '/icons/gicon5.svg',
    title: 'Favorites',
  },
];

const gallery = [
  {
    id: 1,
    img: '/images/gal1.jpeg',
  },
  {
    id: 2,
    img: '/images/gal2.jpg',
  },
  {
    id: 3,
    img: '/images/gal3.jpeg',
  },
  {
    id: 4,
    img: '/images/gal2.jpg',
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  // blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: 'work',
  name: 'Work',
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: 'ATLAS — The Titan Who Carried the Heavens',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5',
      windowPosition: 'top-[4vh] left-50',
      children: [
        {
          id: 1,
          name: 'Atlas Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'ATLAS is a scroll-based interactive 3D web experience inspired by the Greek Titan Atlas, condemned to carry the heavens upon his shoulders.',
            'The experience combines cinematic 3D visuals, atmospheric lighting, HDR environments, and scroll-driven animations to tell the story of Atlas across multiple immersive scenes.',
            'Three.js powers the 3D experience, while GSAP and ScrollTrigger control the cinematic transitions and interactions as the user scrolls.',
            'The project uses GLTF models, HDRI environments, mouse-driven lighting, animated typography, and custom visual effects to create an immersive storytelling experience.',
          ],
        },
        {
          id: 2,
          name: 'rtj4d.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://ashmitsherigar.github.io/rtj4d/',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'atlas.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-1.png',
        },
        {
          id: 5,
          name: 'Tech Stack.txt',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-60 right-20',
          description: [
            'Three.js — 3D rendering and scene management',
            'GSAP — Animation engine',
            'GSAP ScrollTrigger — Scroll-based animation',
            'GLTFLoader — 3D model loading',
            'RGBELoader — HDR environment loading',
            'Vite — Development and build tooling',
            'HTML, CSS and JavaScript — Structure, styling and interaction',
          ],
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: 'Notakto — Reverse Tic-Tac-Toe',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-52 right-80',
      windowPosition: 'top-[40vh] left-17',
      children: [
        {
          id: 1,
          name: 'Notakto Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 right-10',
          description: [
            'Notakto is a misère and impartial variant of tic-tac-toe where completing a row, column, or diagonal causes the current board to become inactive.',
            'Players can compete across one to five boards, with the player who completes the final active board losing the game.',
            'The project features Play vs Computer with five AI difficulty levels, local multiplayer, and an interactive retro 8-bit experience.',
            'As a maintainer of Notakto, I contribute to the open-source project by implementing features, improving the UI and user experience, fixing issues, and maintaining the codebase.',
            'The application is built with Next.js and TypeScript, using Zustand for state management and Firebase for authentication and persistent game data.',
          ],
        },
        {
          id: 2,
          name: 'notakto.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://github.com/notakto/notakto-website',
          position: 'top-20 left-20',
        },
        {
          id: 4,
          name: 'notakto.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 left-80',
          imageUrl: '/images/project-2.png',
        },
        {
          id: 5,
          name: 'Tech Stack.txt',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-60 left-5',
          description: [
            'Next.js — React framework for the web application',
            'TypeScript — Type-safe application development',
            'Zustand — Client-side state management',
            'Firebase Authentication — Google authentication',
            'Cloud Firestore — Persistent user data, coins and XP',
            'Socket.IO — Real-time multiplayer communication',
            'Vitest — Automated testing',
            'Docker — Containerized development and deployment',
          ],
        },
      ],
    }
    ,

    // ▶ Project 3

    {
      id: 7,
      name: 'Solono — Social Dining Platform',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-32 left-72',
      windowPosition: 'top-[12vh] left-10',
      children: [
        {
          id: 1,
          name: 'Solono Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'Solono is a social dining application designed to connect people through shared meals.',
            'I worked on the Solono website as a freelancer, building a production-ready marketing and information platform for the product.',
            'The website presents the product, explains how Solono works, publishes blogs and documentation, provides FAQs and legal resources, and handles contact enquiries.',
            'It is built with React, TypeScript, and Vite, with GSAP powering interactive animations and React Router handling navigation.',
            'The contact system uses Cloudflare Turnstile for bot protection, Google Apps Script as a serverless API, and Google Sheets for storing enquiries.',
          ],
        },
        {
          id: 2,
          name: 'solono.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://gubbi-dev.github.io/solono-website/',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'solono.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-3.png',
        },
        {
          id: 5,
          name: 'Tech Stack.txt',
          icon: '/images/plain.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-60 right-20',
          description: [
            'React — Frontend UI',
            'TypeScript — Type-safe development',
            'Vite — Build tooling',
            'React Router — Client-side routing',
            'GSAP — Interactive animations',
            'Cloudflare Turnstile — Bot protection',
            'Google Apps Script — Contact API',
            'Google Sheets — Contact submission storage',
            'GitHub Actions — Continuous integration',
            'Cloudflare — Production hosting',
          ],
        },
      ],
    }
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: 'about',
  name: 'About me',
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-5',
      imageUrl: '/images/ashmit.jpeg',
    },
    {
      id: 2,
      name: 'casual-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-18 right-22',
      imageUrl: '/images/casual-me.jpg',
    },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: 'about-me.txt',
      icon: '/images/txt.png',
      kind: 'file',
      fileType: 'txt',
      position: 'top-60 left-5',
      subtitle: 'Meet the Developer Behind the Code',
      image: '/images/about-me-ashmit.jpeg',
      description: [
        "Hey! I'm Ashmit 👋, a passionate Computer Science student and full-stack developer driven by curiosity and a love for building meaningful digital experiences.",
        'My interests span frontend development, backend engineering, system design, and artificial intelligence, where I enjoy transforming complex ideas into intuitive products.',
        "I believe great software combines clean architecture, thoughtful design, and seamless user experiences, and that's what I strive for in every project I build.",
        "When I'm not coding, I'm learning new technologies, contributing to personal projects, preparing for hackathons, or exploring the latest innovations in software engineering.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: 'resume',
  name: 'Resume',
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf',
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: 'trash',
  name: 'Trash',
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'trash1.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-10',
      imageUrl: '/images/trash-1.png',
    },
    {
      id: 2,
      name: 'trash2.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-40 left-80',
      imageUrl: '/images/trash-2.png',
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  camera: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
