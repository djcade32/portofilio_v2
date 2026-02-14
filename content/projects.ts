import { Project } from "@/interfaces";

const IMAGE_BASE_URL = "/images";

const PROJECTS: Project[] = [
  {
    title: "StockWisp",
    image: `${IMAGE_BASE_URL}/stockwisp_screenshot.png`,
    description:
      "An AI-powered stock research and analysis platform focused on earnings transcripts, SEC filings, and market sentiment. StockWisp helps investors quickly surface insights, track watchlists, and identify high-conviction opportunities.",
    techStack: ["Next.js", "Finnhub API", "Firebase", "OpenAI"],
    liveDemoUrl: "https://www.stockwisp.com/",
    githubRepoUrl: "https://github.com/djcade32/stock-pulse",
  },
  {
    title: "Melofi",
    image: `${IMAGE_BASE_URL}/melofi_screenshot.png`,
    description:
      "A productivity and lofi music app designed for desktop and web. Melofi combines ambient soundscapes with task management to help users focus and achieve their goals in a calming environment.",
    techStack: ["Next.js", "Electron", "Firebase", "Tailwind"],
    liveDemoUrl: "https://www.melofi.app/home",
    githubRepoUrl: "https://github.com/djcade32/melofi-new",
  },
  {
    title: "Health Hustle Happiness",
    image: `${IMAGE_BASE_URL}/health_hustle_happiness_screenshot.png`,
    description:
      "A content aggregation platform that curates articles related to physical health, mental wellness, and personal finance. The app centralizes trusted resources into a single, easy-to-browse experience to support holistic self-improvement.",
    techStack: ["Next.js", "Firebase", "Web Scraping", "Tailwind"],
    liveDemoUrl: "https://healthhustlehappiness.com/",
    githubRepoUrl: "https://github.com/djcade32/health-hustle-happiness",
  },
];

export default PROJECTS;
