import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { ExternalLink, Play, Layers } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 shadow-xl hover:border-[#915EFF]/50 transition-all flex flex-col justify-between h-full"
      >
        <div>
          <div className="relative w-full h-[210px] overflow-hidden rounded-xl group">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-black/80 border border-white/20 flex justify-center items-center cursor-pointer hover:bg-[#915EFF] hover:scale-110 transition-all"
                  title="View Source Code"
                >
                  <GithubIcon className="w-5 h-5 text-white" />
                </a>
              )}

              {demo_link && (
                <a
                  href={demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-black/80 border border-white/20 flex justify-center items-center cursor-pointer hover:bg-[#00cea8] hover:scale-110 transition-all"
                  title="Live Demo / Play Store"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[22px] flex items-center justify-between gap-2">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-[22px]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & DevSecOps", "Full Stack", "Mobile Apps"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          activeCategory === "Full Stack"
            ? p.category.includes("Full Stack")
            : p.category.includes(activeCategory)
        );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work & Repositories</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[30px]"
        >
          Following production systems and projects demonstrate my technical capabilities across full-stack web platforms, real-time algorithms, mobile apps, and AI/DevSecOps integrations.
        </motion.p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
              activeCategory === category
                ? "bg-[#915EFF] text-white shadow-lg shadow-[#915EFF]/30 scale-105"
                : "bg-tertiary/80 text-secondary border border-white/10 hover:text-white hover:border-white/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 flex flex-wrap gap-7 justify-center sm:justify-start">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${project.name}`} index={index} {...project} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");