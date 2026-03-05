export const SKILLS = {
  Languages:  ["TypeScript", "JavaScript", "C#", "Python"],
  Frameworks: ["React", "Next.js", ".NET", "Blazor", "Tailwind CSS", "Vite"],
  Tools:      ["Firebase", "SQLite", "Playwright", "Git", "GitHub"],
};

export const EXPERIENCE = [
  {
    role: "Software Developer Intern",
    company: "Dedalus",
    companyUrl: "https://dedalus.eu",
    period: "2024",
    badge: "Internship",
    desc: "Gained hands-on experience at one of Europe's leading healthcare software companies. Contributed to internal development projects, worked within enterprise codebases, and collaborated with professional engineering teams on real production software.",
    tags: ["Healthcare Software", "Enterprise Codebase", "Team Collaboration"],
  },
  {
    role: "Crew Member",
    company: "McDonald's",
    companyUrl: null,
    period: "2023 – Present",
    badge: "Part-time",
    desc: "Working part-time alongside full-time studies. Developed strong customer service skills, adapted to a high-pressure environment, and demonstrated consistent reliability and teamwork.",
    tags: ["Customer Service", "Teamwork", "Time Management"],
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "Bargain List",
    url: "https://bargainlist.app",
    desc: "A Next.js PWA for creating and sharing collaborative shopping lists with real-time Firebase sync, offline support, and native mobile install.",
    stack: ["TypeScript", "Next.js", "Firebase", "PWA", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "Weather App",
    url: "https://github.com/GeorgeMunday/weather-app1",
    desc: "Clean weather application showing current conditions and forecasts by location via a live REST API.",
    stack: ["TypeScript", "React", "REST API"],
  },
  {
    num: "03",
    title: "Quiz Web App",
    url: "https://github.com/GeorgeMunday/quiz-web-app",
    desc: "Interactive quiz application with multiple question types, live scoring, and a responsive Blazor UI backed by C# and SQLite.",
    stack: ["C#", ".NET", "Blazor", "SQLite"],
  },
  {
    num: "04",
    title: "Burger Clicker",
    url: "https://burgerclicker-five.vercel.app",
    desc: "An idle clicker game exploring Firebase real-time state management and smooth UI animation, deployed on Vercel.",
    stack: ["TypeScript", "Firebase", "Tailwind CSS"],
  },
];
