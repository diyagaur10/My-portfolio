// react
import { useState, useMemo } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "ML" | "web";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ML");

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              My recent <span className="text-secondary"> projects</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "ML"}
              onClick={() => setActiveCategory("ML")}
            >
              Machine Learning
            </Button>
            <Button
              secondary={activeCategory === "web"}
              onClick={() => setActiveCategory("web")}
            >
              Web design
            </Button>
          </motion.div>

          <div
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
            {filteredProjects.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn("up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Card imgSrc={item.img} title={item.title} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
