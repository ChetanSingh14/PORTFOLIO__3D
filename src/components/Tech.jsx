import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Layout, Server, Zap, CheckCircle2 } from "lucide-react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologyCategories } from "../constants";
import { styles } from "../style";
import { textVariant, fadeIn } from "../utils/motion";

const categoryIcons = {
  "Backend & Databases": Database,
  "Frontend & Mobile": Layout,
  "DevOps & Tools": Server,
  "Realtime & Integrations": Zap,
};

const Tech = () => {
  const [selectedCat, setSelectedCat] = useState("All");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technical Capabilities
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills & Stack.
        </h2>
      </motion.div>

      {/* Domain Skill Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {technologyCategories.map((cat, idx) => {
          const IconComponent = categoryIcons[cat.category] || Cpu;
          return (
            <motion.div
              key={cat.category}
              variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#915EFF]/50 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#915EFF]/10 text-[#915EFF] border border-[#915EFF]/20 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-white text-[20px] font-bold">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white-100 text-[13px] font-medium flex items-center gap-1.5 hover:bg-[#915EFF]/20 hover:border-[#915EFF]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00cea8]" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3D Interactive Skill Balls Header */}
      <div className="mt-16 text-center">
        <h3 className="text-white font-bold text-[20px] mb-6 flex items-center justify-center gap-2">
          <Cpu className="w-5 h-5 text-[#915EFF]" /> 3D Interactive Core Tech Balls
        </h3>
      </div>

      {/* 3D Balls Canvas Grid */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex flex-col items-center group" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span className="text-[12px] font-semibold text-secondary mt-1 opacity-80 group-hover:opacity-100 group-hover:text-[#915EFF] transition-all">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");