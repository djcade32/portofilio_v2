import { IconType } from "react-icons";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCypress,
  SiElectron,
} from "react-icons/si";

type TechItem = {
  name: string;
  Icon: IconType;
  iconColor: string; // Tailwind text color class
};

const TECH_STACK: TechItem[] = [
  { name: "JavaScript", Icon: SiJavascript, iconColor: "text-yellow-400" },
  { name: "React", Icon: SiReact, iconColor: "text-cyan-400" },
  { name: "Node.js", Icon: SiNodedotjs, iconColor: "text-green-500" },
  { name: "Firebase", Icon: SiFirebase, iconColor: "text-orange-500" },
  { name: "TypeScript", Icon: SiTypescript, iconColor: "text-blue-500" },
  { name: "Next.js", Icon: SiNextdotjs, iconColor: "text-white" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, iconColor: "text-blue-500" },
  { name: "HTML5", Icon: SiHtml5, iconColor: "text-orange-600" },
  { name: "Cypress", Icon: SiCypress, iconColor: "text-white" },
  { name: "Electron", Icon: SiElectron, iconColor: "text-cyan-400" },
];

export default TECH_STACK;
