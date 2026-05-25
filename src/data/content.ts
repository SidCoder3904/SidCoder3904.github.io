export const personalInfo = {
  name: 'Siddharth Verma',
  title: 'Software Engineer & AI/ML Researcher',
  subtitle: 'B.Tech CSE (Specialization in AI & ML) · IIT Ropar, 2026',
  email: 'siddharthverma3904@gmail.com',
  github: 'https://github.com/SidCoder3904',
  linkedin: 'https://www.linkedin.com/in/siddharth-verma-186396259',
  scholar: 'https://scholar.google.com/citations?user=QROdQWIAAAAJ&hl=en',
  resumeUrl: 'https://drive.google.com/file/d/1hdXRaft-r1h6qufrny4xCyTeo3bR86lK/view?usp=sharing',
  about: `I'm a Computer Science and Engineering student at IIT Ropar, specializing in Artificial Intelligence and Machine Learning. With a CGPA of 9.50 and GATE DA 2026 AIR 46, I combine strong academic foundations with hands-on engineering experience spanning full-stack development, AI research, and systems engineering. Currently building integrations infrastructure at Pattern, and actively publishing research work in Reinforcement Learning.`,
};

export const education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science and Engineering (Specialization in AI & ML)',
  institution: 'Indian Institute of Technology, Ropar',
  cgpa: '9.50',
  years: '2022-2026',
};

export const experiences = [
  {
    company: 'Pattern',
    companyUrl: 'https://www.pattern.com/',
    role: 'Software Development Engineer - 1',
    period: 'July 2026 - Present',
    description:
      'Just Joining!',
    skills: [],
    current: true,
  },
  {
    company: 'Pattern',
    companyUrl: 'https://www.pattern.com/',
    role: 'Software Development Engineer Intern',
    period: 'May 2025 - July 2025',
    description:
      'Working in Integrations Team involving migration and unification of marketplace connector services built in NodeJS and TypeScript, transitioning AWS Lambda-based systems into AWS ECS infrastructure.',
    skills: ['NodeJS', 'TypeScript', 'AWS', 'Backend Systems'],
    current: false,
  },
  {
    company: 'AARK Global',
    companyUrl: 'https://aarkglobalinc.com/',
    role: 'Software Development Engineer Intern',
    period: 'May 2024 - July 2024',
    description:
      'Built a Windows OS Hardening Tool with PyQt5 GUI implementing security features aligned with Windows standards.',
    skills: ['Python', 'PyQt', 'Security', 'Windows'],
    current: false,
  },
];

export const research = [
  {
    title: 'CAPSULE',
    fullTitle:
      'Control-Theoretic Action Perturbations for Safe Uncertainty-Aware Reinforcement Learning',
    conference: 'AAMAS ALA 2026',
    description:
      'Research on control-theoretic approaches to ensure safety in reinforcement learning through action perturbation strategies under uncertainty.',
    paperUrl:
      'https://www.researchgate.net/publication/404249137_CAPSULE_Control-Theoretic_Action_Perturbations_for_Safe_Uncertainty-Aware_Reinforcement_Learning',
    authors: [
      {
        name: 'Dr. Shashi S Jha',
        url: 'https://sites.google.com/view/shashi-iitrpr/',
      },
      {
        name: 'Mayank S Jha',
        url: 'http://w3.cran.univ-lorraine.fr/mayank-shekhar.jha/?q=content/mayank-shekhar-jha',
      },
    ],
  },
  {
    title: 'SFANet',
    fullTitle: 'Spatial-Frequency Attention Network for Deepfake Detection',
    conference: 'IEEE SP Cup 2025',
    description:
      'Developed a spatial-frequency attention network architecture for robust deepfake detection leveraging multi-domain feature analysis.',
    paperUrl:
      'https://www.researchgate.net/publication/396249548_SFANet_Spatial-Frequency_Attention_Network_for_Deepfake_Detection',
    authors: [
      {
        name: 'Dr. Abhinav Dhall',
        url: 'https://sites.google.com/site/dhallabhinav/abhinav-dhall-phd',
      },
    ],
  },
];

export const projects = [
  {
    title: 'CDPC Portal',
    description:
      'Developed Placement & Internship Management Portal for IIT Ropar focused on personalization, confidentiality, and integrity.',
    skills: ['Next.js', 'Flask', 'MongoDB', 'Cloudinary'],
    link: 'https://github.com/SidCoder3904/DEP25-G03-CDPC-portal',
  },
  {
    title: 'Chandra Rachna',
    description:
      'Elemental mapping of lunar surface using Chandrayaan-2 CLASS XRF data for ISRO.',
    skills: ['Python', 'Astropy', 'GeoPandas', 'GIS'],
    link: 'https://github.com/SidCoder3904/ISRO_InterIIT13',
  },
  {
    title: 'VideoQuery',
    description:
      'Multimodal video question-answering system with context retention using Video-LLaVA and Gemini.',
    skills: ['Video-LLaVA', 'Gemini', 'Whisper', 'Gradio'],
    link: 'https://github.com/Samarthsinghal28/Video_Question_Answering',
  },
  {
    title: 'BlockAcademy',
    description:
      'Blockchain-based decentralized learning management system built on Ethereum.',
    skills: ['Solidity', 'Ganache', 'Web3', 'React'],
    link: 'https://github.com/SidCoder3904/BlockAcademy',
  },
  {
    title: 'Gene Classification',
    description:
      'Leukemia type classification using machine learning techniques for medical diagnostics.',
    skills: ['Python', 'Scikit-Learn', 'ML', 'Bioinformatics'],
    link: 'https://github.com/SidCoder3904/Leukemia-Type-Classification',
  },
  {
    title: 'TrackBot',
    description:
      'Robot that locates, tracks, and follows a target using OpenCV and MediaPipe with monocular depth perception and 3D trajectory computation.',
    skills: ['OpenCV', 'MediaPipe', 'Python', 'Robotics'],
    link: 'https://github.com/SidCoder3904/TrackBot',
  },
  {
    title: 'N-Body Simulation',
    description:
      'Gravitational N-body simulation using the Fast Multipole Method for efficient computation.',
    skills: ['C++', 'FMM', 'Physics', 'Simulation'],
    link: 'https://github.com/SidCoder3904/N-Body-Simulation-using-FMM',
  },
];

export const skills = {
  languages: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  web: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'MongoDB', 'PostgreSQL'],
  aiml: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'MediaPipe', 'Gymnasium'],
  core: ['DSA', 'OS', 'DBMS', 'Computer Networks', 'Computer Architecture'],
};

export const achievements = [
  { metric: 'AIR 46', label: 'GATE DA 2026' },
  { metric: 'Rank 5', label: 'Institute Merit — 10 SGPA' },
  { metric: '99.66%', label: 'JEE Mains Percentile' },
  { metric: 'AIR 1510', label: 'JEE Advanced' },
  { metric: 'Finalist', label: 'Smart India Hackathon' },
  { metric: '9th', label: 'Inter IIT — ISRO' },
];

export const positions = [
  { role: 'Contingent Leader', organization: 'Inter IIT Tech Meet 14.0' },
  { role: 'Organizing Lead', organization: 'Google Developer Group IIT Ropar' },
  { role: 'Secretary', organization: 'Software Community IIT Ropar' },
  { role: 'Representative', organization: 'Zenith Astronomy Club' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
