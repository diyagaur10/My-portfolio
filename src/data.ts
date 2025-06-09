import MLOne from "./assets/ui-ux-project-one.svg";
import MLTwo from "./assets/ui-ux-project-two.svg";
import MLThree from "./assets/ui-ux-project-three.svg";
import webOne from "./assets/web-project-one.jpeg";
import webTwo from "./assets/web-project-two.jpeg";
import webThree from "./assets/web-project-three.jpeg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "ML",
    img: MLOne,
    title: "UI/UX Web Template",
  },
  {
    id: 1,
    category: "ML",
    img: MLTwo,
    title: "UI/UX Tablet Template",
  },
  {
    id: 2,
    category: "ML",
    img: MLThree,
    title: "Solar System App Design",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "Interior Design Website",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "Agency Landing Page",
  },
  {
    id: 5,
    category: "web",
    img: webThree,
    title: "Crypto Landing Page",
  },
];
