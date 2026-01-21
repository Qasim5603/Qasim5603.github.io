// gitprofile.config.ts - FULLY FIXED FOR QASIM5603.GITHUB.IO

const CONFIG = {
  github: {
    username: 'Qasim5603', // ← YOUR GitHub username
  },
  /**
   * FIXED: Since repo is Qasim5603.github.io, base must be '/'
   */
  base: '/', // ← CRITICAL: Changed from '/gitprofile/'
  
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
    description: 'Recent CS graduate skilled in Docker, Kubernetes, React, Node.js, AWS Cloud.',
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
    fileUrl: 'https://github.com/Qasim5603/Qasim5603.github.io/raw/main/resume.pdf', // Upload your resume here
  },
  
  skills: [
    'Docker', 'Kubernetes', 'React', 'Node.js', 'JavaScript',
    'Linux', 'AWS Cloud', 'GitHub Actions', 'Python', 'CI/CD'
  ],
  
  experiences: [
    {
      company: 'Personal Projects',
      position: 'Full-Stack Developer & DevOps',
      from: '2024',
      to: 'Present',
      companyLink: 'https://github.com/Qasim5603',
    },
  ],
  
  certifications: [
    {
      name: 'AWS Educate Cloud 101',
      body: 'AWS Cloud Practitioner Foundations',
      year: 'Jan 2026',
      link: 'https://github.com/Qasim5603',
    },
  ],
  
  educations: [
    {
      institution: 'Riphah International University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2022',
      to: '2026',
    },
  ],
  
  publications: [], // Empty = hidden
  
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
