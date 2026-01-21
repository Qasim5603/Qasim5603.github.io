// gitprofile.config.ts - YOUR 4 BEST PROJECTS FEATURED
// Perfect showcase for Web Dev/DevOps jobs 🚀

const CONFIG = {
  github: {
    username: 'Qasim5603', 
  },
  base: '/', 
  
  projects: {
    github: {
      display: false,  // ← DISABLE automatic GitHub repos
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
    external: {  // ← YOUR HAND-PICKED PROJECTS
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
  
  // ... rest of your config stays SAME (internship, certs, skills, etc)
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
  
  experiences: [  // ← Your TechNest internship (unchanged)
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
  
  // ... your 5 certs stay the same
  certifications: [
    // Git, Docker, SQL, MongoDB, AWS (unchanged)
  ],
  
  educations: [
    {
      institution: 'Riphah International University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2022',
      to: '2026',
    },
  ],
  
  // ... rest unchanged
  publications: [],
  blog: { source: 'dev', username: '', limit: 0 },
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
