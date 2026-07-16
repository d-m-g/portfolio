// ── Edit your projects here ───────────────────────────────────────
// Order matters — it's the curation. Most important first.
// Each project: title, year, blurb, tags, and optional links.
export const projects = [
  {
    title: "Pecto",
    year: "2023 — 2026",
    context: "ThinkAi OY",
    blurb:
      "A Finnish language-learning app. I implemented the iOS UI from Figma in Swift/SwiftUI, contributed to the Python backend and the Android build, and helped push it through the App Store release process.",
    tags: ["Swift", "SwiftUI", "Python"],
    live: "https://pecto.ai",
    repo: "",
    featured: true,
  },
  {
    title: "Solus City",
    year: "2025",
    context: "AlvaSoft",
    blurb:
      "Marketplace mobile apps for iOS and Android, wrapping the Solus City web-app with Capacitor.js. I handled native-feature integration and built web-app UI in React.",
    tags: ["React", "Capacitor.js", "JavaScript"],
    live: "https://soluscity.com",
    repo: "",
    featured: false,
  },
  {
    title: "Work Tracker",
    year: "2026",
    context: "Personal project · tracker.d-m-g.dev",
    blurb:
      "A work-time tracker I built and self-host. A dependency-free Python core keeps JSON as the only source of truth, and everything else — a React viewer, a SwiftUI menu-bar widget, macOS Shortcuts — calls that single writer rather than becoming a second one. 195 tests, deployed behind Caddy with a password; the demo needs none.",
    tags: ["Python", "React", "Swift"],
    live: "https://tracker.d-m-g.dev/demo",
    repo: "https://github.com/d-m-g/work-tracker",
  },
  {
    title: "d-m-g.dev",
    year: "2026",
    context: "Personal project",
    blurb:
      "This site. Built from scratch in React and Vite — self-hosted variable fonts, a hand-tuned dark palette, and scroll-driven motion, with no template underneath. Deployed on Vercel behind Cloudflare DNS.",
    tags: ["React", "Vite", "Tailwind"],
    live: "https://d-m-g.dev",
    repo: "https://github.com/d-m-g/portfolio",
  },
  {
    title: "Coral",
    year: "2026",
    context: "Lumi AI Factory · Open Data Hackathon",
    blurb:
      "Fact-checking software built on OWI. I built the React demo frontend, handled OWI data parsing in Python, and wired up the API so backend and frontend worked seamlessly together.",
    tags: ["React", "Python", "AI"],
    live: "",
    repo: "",
  },
  {
    title: "Delivery Logistics ML",
    year: "2025",
    context: "Junction 2025",
    blurb:
      "Logistics automation for delivery: ML algorithms that learn from warehouse data to predict which products are missing before they cause problems.",
    tags: ["Python", "Machine Learning", "scikit-learn"],
    live: "",
    repo: "",
  },
  {
    title: "New Particle Formation",
    year: "2025",
    context: "University of Helsinki",
    blurb:
      "A machine-learning course project: a 2-step model that predicts the occurrence of atmospheric 'New Particle Formation' events from environmental data.",
    tags: ["Python", "scikit-learn", "Classification"],
    live: "",
    repo: "",
  },
  {
    title: "Servisync",
    year: "2024",
    context: "Junction 2024",
    blurb:
      "A mobile app that updates BIM data in real time by scanning devices — using computer vision to recognise the data directly from photographs.",
    tags: ["Computer Vision", "Mobile", "Python"],
    live: "",
    repo: "",
  },
];
