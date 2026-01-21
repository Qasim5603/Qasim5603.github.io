// gitprofile.config.ts - UPDATED WITH INTERNSHIP EXPERIENCE
// Perfect for https://qasim5603.github.io 🚀

const CONFIG = {
  github: {
    username: 'Qasim5603', 
  },
  base: '/', 
  
  projects: {
    github: {
      display: true,
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
      header: 'Key Projects',
      projects: [
        {
          title: 'MicroVision',
          description: 'Full-stack medical imaging platform with React frontend, Node.js REST APIs, and Docker deployment.',
          imageUrl: 'https://via.placeholder.com/400x200/007BFF/FFFFFF?text=MicroVision',
          link: 'https://github.com/Qasim5603/microvision',
        },
        {
          title: 'Gemini Chatbot',
          description: 'Real-time Node.js/Python chatbot web app with load balancer and responsive design.',
          imageUrl: 'https://via.placeholder.com/400x200/28A745/FFFFFF?text=Chatbot',
          link: 'https://github.com/Qasim5603/gemini-chatbot',
        },
      ],
    },
  },
  
  seo: { 
    title: 'Qasim Ali - Cloud/DevOps & Web Developer Portfolio',
    description: 'CS graduate with TechNest Solutions internship. Skilled in React, Node.js, Docker, AWS Cloud. MicroVision ML project.',
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
    'Linux', 'AWS Cloud', 'GitHub Actions', 'Python', 'MongoDB', 'SQL'
  ],
  
  // ✅ UPDATED WITH TECHNET INTERNSHIP
  experiences: [
    {
      company: 'TechNest Solutions',
      position: 'Web Development Intern',
      from: 'Jun 2024',
      to: 'Aug 2024',
      companyLink: 'https://github.com/Qasim5603',
      isCurrentCompany: false
    },
    {
      company: 'Personal Projects',
      position: 'Full-Stack Developer & DevOps',
      from: '2024',
      to: 'Present',
      companyLink: 'https://github.com/Qasim5603',
      isCurrentCompany: true
    },
  ],
  
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
  
  blog: {
    source: 'dev',
    username: '',
    limit: 0,
  },
  
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },
  
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'emerald', 'corporate'],
  },
  
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  
  enablePWA: true,
};

export default CONFIG;
