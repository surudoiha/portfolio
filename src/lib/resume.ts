// src/lib/resume.ts
// Structured resume data for Suren Tumasyan

export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  period: string;
  details?: string;
};

export type Project = {
  name: string;
  period: string;
  bullets: string[];
};

export type ResumeData = {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    other: string[];
  };
};

export const resume: ResumeData = {
  name: "Suren Tumasyan",
  location: "Tujunga, CA 91032",
  phone: "(818) 203-2772",
  email: "suro2014.ss@gmail.com",
  linkedin: "https://www.linkedin.com/in/suren-tumasyan-44770836b/",
  github: "https://github.com/surudoiha",

  experience: [
    {
      company: "HPRC Medical Supply Store",
      role: "IT Specialist",
      period: "July 2019 – Present",
      bullets: [
        "Managed inventory & POS systems across 3-store retail network, reducing stock discrepancies by 15%",
        "Administered security camera infrastructure and server backups, improving uptime to 99.9%",
        "Created and distributed monthly Excel/Google Sheets performance reports, informing pricing and ordering decisions",
      ],
    },
  ],

  education: [
    {
      school: "California State University, Northridge",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      period: "Aug 2022 – May 2025",
      details:
        "Relevant Courses: Multimedia System Design, Machine Learning, Data Mining, Human-Computer Interaction",
    },
    {
      school: "Glendale Community College",
      degree: "C.S. Prerequisites",
      field: "Computer Science",
      period: "Aug 2018 – May 2022",
    },
  ],

  projects: [
    {
      name: '"The Crucible" – Multimedia Automation Script',
      period: "Jan 2025 – May 2025",
      bullets: [
        "Developed a Python automation pipeline to parse Baselight render metadata and compute exact frame file paths in seconds, slashing manual lookup time by over 80%",
        "Architected a data ingestion process that loads proprietary frame data into a central database for on-demand analytics and team performance tracking",
        "Automated generation of CSV/XLS reports complete with timecode stamps and thumbnail previews, and integrated seamless Vimeo uploads for stakeholder review",
      ],
    },
    {
      name: "Machine Learning & Data Mining",
      period: "Aug 2024 – Dec 2024",
      bullets: [
        "Trained linear and RBF SVM classifiers on MNIST using one-versus-all, achieved 74% test accuracy",
        "Built a loan-eligibility predictor using pandas, NumPy, and scikit-learn; optimized feature encoding to improve recall by 12%",
      ],
    },
    {
      name: "Techmetrica – Full-Stack Web App",
      period: "Jan 2025 – May 2025",
      bullets: [
        "Developed a survey-based web application using TypeScript, Node.js, Express, and MySQL",
        "Implemented RESTful APIs and React frontend; collected 100+ user responses and reduced page load times by 30%",
        "Collaborated with a multidisciplinary team to ensure UX accessibility and data integrity",
      ],
    },
    {
      name: "QA Script – Multimedia Systems Design",
      period: "Jan 2025 – May 2025",
      bullets: [
        "Engineered a Python QA framework that consolidates and deduplicates global testing outputs from App Testing workflows into a unified QA database",
        "Crafted dynamic report generation to list blockers, retests, timestamps, and user-specific issues with a single command, enabling instant visibility into quality bottlenecks",
        "Streamlined QA distribution by automating report scheduling and delivery—cutting manual reporting effort by an estimated 70%",
      ],
    },
  ],

  skills: {
    languages: ["Python", "C/C++", "JavaScript", "Java", "Go", "TypeScript"],
    frameworks: ["Node.js", "React.js", "Express.js"],
    tools: [
      "GitHub",
      "Git",
      "VS Code",
      "Jira",
      "Slack",
      "AWS",
      "MySQL",
      "MongoDB",
      "Docker",
      "REST APIs",
    ],
    other: ["Linux", "Bilingual"],
  },
};
