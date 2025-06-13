// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import linkedinIcon from "../assets/icons8-linkedin-35.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import leetcodeIcon from "../assets/icons8-leetcode (3).svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

// Define your social media profile URLs
const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/diya-gaur/", 
  instagram: "https://www.instagram.com/__dewww/", 
  twitter: "https://x.com/DiyaGaur10", 
  leetcode: "https://leetcode.com/u/_diyagaur/", 
};

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              Hi, I'm Diya Gaur — a final-year B.E. student at MBM University, Jodhpur, specializing in Artificial Intelligence and Data Science. I’m passionate about building innovative tech solutions, from intelligent systems to impactful web experiences. With strong programming skills, a problem-solving mindset, and effective communication, I love turning ideas into real-world projects. I'm always eager to learn, collaborate, and create meaningful technology.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon
              imgSrc={linkedinIcon} // Consider changing to a LinkedIn icon if available
              title="LinkedIn"
              href={SOCIAL_LINKS.linkedIn}
            />
            <SocialMediaIcon
              imgSrc={instagramIcon}
              title="Instagram"
              href={SOCIAL_LINKS.instagram}
            />
            <SocialMediaIcon
              imgSrc={twitterIcon}
              title="Twitter"
              href={SOCIAL_LINKS.twitter}
            />
            <SocialMediaIcon
              imgSrc={leetcodeIcon} 
              title="Leetcode"
              href={SOCIAL_LINKS.leetcode}
              
            />
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
