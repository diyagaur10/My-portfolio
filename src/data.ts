import MLOne from "./assets/ML1.png";
import MLTwo from "./assets/ML2.png";
import MLThree from "./assets/ML3.png";
import webOne from "./assets/web1.png";
import webTwo from "./assets/web2.png";
import webThree from "./assets/web-project-three.jpeg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "ML",
    img: MLOne,
    title: "Yoga Pose Detection",
    url:"https://github.com/DarshilPungalia/Research-Paper"
  },
  {
    id: 1,
    category: "ML",
    img: MLTwo,
    title: "Anomaly Detection",
    url:"https://github.com/diyagaur10/Anomaly-detection"
  },
  {
    id: 2,
    category: "ML",
    img: MLThree,
    title: "Fake Website Detector",
    url:"https://github.com/diyagaur10/URL-detection-project",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "Chat App",
    url:"https://letzzzchat.vercel.app/",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "My Portfolio",
    url:"https://me-diya.vercel.app/",
  },
  
];
