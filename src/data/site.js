// ── Edit your identity + links here ───────────────────────────────
export const site = {
  name: "Dmitrii Gorovoi",
  initials: "DG",
  role: "Software Engineer · CS & Math @ Helsinki",
  // One or two sharp sentences. Keep it human.
  tagline:
    "I build software across mobile, web and ML — turning ideas into things people actually use.",
  location: "Helsinki, Finland",
  email: "gorovoi.dmitrii@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dmitrii-gorovoi" },
    { label: "GitHub", href: "https://github.com/d-m-g/" },
    { label: "Email", href: "mailto:gorovoi.dmitrii@gmail.com" },
  ],
};

// Hero headline rotates through what you build. Order = the story you tell.
export const disciplines = ["iOS apps", "ML models", "web products", "AI prototypes"];

// Small stats strip — numbers count up when scrolled into view.
export const stats = [
  { value: 4.55, suffix: "/5", label: "GPA at U. Helsinki", decimals: 2 },
  { value: 3, suffix: "+ yrs", label: "Building software" },
  { value: 2, suffix: "", label: "Apps live in production" },
  { value: 6, suffix: "", label: "Shipped projects" },
];

// Marquee tech strip.
export const stack = [
  "Swift",
  "SwiftUI",
  "React",
  "Python",
  "JavaScript",
  "C++",
  "scikit-learn",
  "NumPy",
  "Pandas",
  "Capacitor.js",
  "SQL",
  "Git",
  "Linux",
];

// About section — bio paragraphs, skills, education, certificates.
export const about = {
  paragraphs: [
    "I'm a Computer Science & Mathematics student at the University of Helsinki (GPA 4.55/5.00) with hands-on software engineering experience in Swift/SwiftUI, Python and React, and a strong interest in applied ML and AI.",
    "I've shipped iOS apps, wrapped web products for mobile, built hackathon prototypes, and trained ML models on real data. I like combining solid engineering with AI/ML work — and I'm looking for a summer internship where I can do exactly that inside a strong team.",
  ],
  skills: [
    "Python",
    "Swift / SwiftUI",
    "React",
    "JavaScript",
    "C++",
    "Capacitor.js",
    "scikit-learn",
    "NumPy / Pandas",
    "SQL",
    "Git · Linux",
  ],
  education: [
    {
      place: "University of Helsinki",
      detail: "BSc, Mathematics & Computer Science — GPA 4.55/5.00",
      period: "2024 — Present",
    },
    {
      place: "IB Lukio, Imatra",
      detail: "International Baccalaureate (HL: Physics, Mathematics, English)",
      period: "2021 — 2024",
    },
  ],
  certificates: [
    "Mathematics for Machine Learning — DeepLearning.AI",
    "Supervised Machine Learning: Regression & Classification — Stanford / DeepLearning.AI",
    "CS50's Introduction to AI with Python — Harvard",
    "CS50's Introduction to Programming with Python — Harvard",
    "Programming with JS & React, Data Analytics — Meta",
  ],
};

// Work history — rendered as an animated timeline.
export const experience = [
  {
    company: "ThinkAi OY",
    role: "iOS / Backend Developer",
    period: "2023 — 2026",
    points: [
      "Developed iOS features in Swift/SwiftUI for a consumer mobile app.",
      "Built UI screens from Figma, integrated API requests, and improved app stability.",
      "Worked on Python backend services and collaborated across frontend/backend.",
    ],
    tech: ["Swift", "SwiftUI", "Python"],
  },
  {
    company: "AlvaSoft",
    role: "Web / Mobile Developer",
    period: "2025",
    points: [
      "Built cross-platform web-app wrappers with Capacitor.js for iOS and Android.",
      "Contributed to React web development and integrated native/web plugin functionality.",
    ],
    tech: ["React", "JavaScript", "Capacitor.js"],
  },
  {
    company: "Aldanex OY",
    role: "Web Developer",
    period: "2022",
    points: [
      "Designed, built and maintained WordPress websites and handled technical support.",
    ],
    tech: ["WordPress", "PHP"],
  },
];
