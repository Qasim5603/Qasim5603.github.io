// gitprofile.config.ts - FIXED: FULL CERTS + NO PROFILE IMAGE
// Perfect for https://qasim5603.github.io 🚀

const CONFIG = {
  github: {
    username: 'Qasim5603', 
  },
  base: '/', 
  
  projects: {
    github: {
      display: false,
      header: 'Featured Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 6,
        exclude: {
          forks: true,
          projects: [], 
        },
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'MicroVision',
          description: 'Histopathology image classification using CNNs (ResNet, DenseNet, VGG16). Full-stack medical AI platform.',
          imageUrl: 'https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=MicroVision',
          link: 'https://github.com/Qasim5603/microvision'
        },
        {
          title: 'Gemini Chatbot 1.1',
          description: 'Real-time AI chatbot with Node.js/Python backend, responsive React frontend, and Docker deployment.',
          imageUrl: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=Gemini+Chatbot',
          link: 'https://github.com/Qasim5603/gemini-chatbot-1.1'
        },
        {
          title: 'Auto Dockerfile Generator',
          description: 'AI-powered tool that automatically generates optimized Dockerfiles from any codebase.',
          imageUrl: 'https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=Docker+Gen',
          link: 'https://github.com/Qasim5603/auto-dockerfile-generator'
        },
        {
          title: 'Mill Khata',
          description: 'Full-stack accounting app for small businesses (private repo - contact for demo).',
          imageUrl: 'https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Mill+Khata',
          link: 'https://github.com/Qasim5603/mill-khata'
        }
      ],
    },
  },
  
  seo: { 
    title: 'Qasim Ali - Full-Stack Developer | MicroVision AI & DevOps Tools',
    description: 'TechNest intern skilled in React, Docker, Node.js. Creator of MicroVision AI and Auto Dockerfile Generator.',
    imageURL: '' 
  },
  
  social: {
    linkedin: 'qasim-ali-a5666b235',
    x: '',
    email: 'qk777027@gmail.com',
    website: 'https://qasim5603.github.io',
    phone: '+92-333-5750240',
  },
  
  resume: {
    fileUrl: 'https://github.com/Qasim5603/Qasim5603.github.io/raw/main/resume.pdf', 
  },
  
  skills: [
    'Docker', 'Kubernetes', 'React', 'Node.js', 'JavaScript',
    'Python', 'CNNs/ML', 'AWS Cloud', 'GitHub Actions', 'MongoDB', 'SQL'
  ],
  
  experiences: [
    {
      company: 'TechNest Solutions',
      position: 'Web Development Intern',
      from: 'Jun 2024',
      to: 'Aug 2024',
      companyLink: 'https://github.com/Qasim5603',
    },
    {
      company: 'Personal Projects',
      position: 'Full-Stack Developer & DevOps',
      from: '2024',
      to: 'Present',
      companyLink: 'https://github.com/Qasim5603',
    },
  ],
  
  // ✅ ALL 5 CERTIFICATES ADDED
  certifications: [
    {
      name: 'Getting Started with Git and GitHub',
      body: 'Coursera',
      year: '2025',
      link: 'https://github.com/Qasim5603/Certificates/blob/main/devops/Coursera%20RBDDX1WFW1RN.pdf',
    },
    {
      name: 'Docker for Absolute Beginners',
      body: 'Coursera',
      year: '2025',
      link: 'https://github.com/Qasim5603/Certificates/blob/main/devops/Coursera%20HH4PAFA78HPY.pdf',
    },
    {
      name: 'Introduction to Relational Database and SQL',
      body: 'Coursera',
      year: '2025',
      link: 'https://github.com/Qasim5603/Certificates/blob/main/databases/Coursera%20G8X8BYN772UU.pdf',
    },
    {
      name: 'CRUD Operations using MongoDB NoSQL',
      body: 'Coursera',
      year: '2025',
      link: 'https://github.com/Qasim5603/Certificates/blob/main/databases/Coursera%20N5SHY848YVZV.pdf',
    },
    {
      name: 'AWS Educate Cloud 101',
      body: 'AWS Cloud Practitioner Foundations',
      year: 'Jan 2026',
      link: 'https://github.com/Qasim5603/Certificates',
    }
  ],
  
  educations: [
    {
      institution: 'Riphah International University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2022',
      to: '2026',
    },
  ],
  
  publications: [],
  blog: { source: 'dev', username: '', limit: 0 },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },
  
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: false,  // ✅ NO PROFILE IMAGE
    themes: ['light', 'dark', 'emerald', 'corporate'],
  },
  
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
