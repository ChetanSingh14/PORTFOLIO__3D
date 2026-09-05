import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, GitPullRequest, Trophy, MapPin, Calendar, CheckCircle } from "lucide-react";

import { styles } from "../style";
import { education, achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const achievementIcons = {
  Code2: Code2,
  GitPullRequest: GitPullRequest,
  Trophy: Trophy,
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Academic Background & Recognition</p>
        <h2 className={`${styles.sectionHeadText}`}>Education & Achievements.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Main Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="lg:col-span-1 glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#915EFF]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#915EFF]/10 border border-[#915EFF]/30 flex items-center justify-center text-[#915EFF] mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>

            <span className="text-[12px] font-bold tracking-wider text-[#915EFF] uppercase">
              Degree & Institution
            </span>

            {education.map((edu, idx) => (
              <div key={idx} className="mt-2">
                <h3 className="text-white text-[22px] font-bold leading-tight">
                  {edu.institution}
                </h3>
                <p className="text-[#00cea8] text-[15px] font-semibold mt-1">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap gap-4 mt-3 text-secondary text-[13px]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#915EFF]" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00cea8]" /> {edu.location}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-white-100 text-[14px] flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#915EFF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <span className="text-secondary text-[13px] font-medium">
              CS Undergraduate • 2023 - 2027 Batch
            </span>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = achievementIcons[item.iconName] || Award;
            return (
              <motion.div
                key={item.title}
                variants={fadeIn("left", "spring", idx * 0.2, 0.75)}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#915EFF]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#915EFF] group-hover:scale-110 group-hover:bg-[#915EFF]/20 transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-[#915EFF]/10 text-[#915EFF] border border-[#915EFF]/20">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-white text-[19px] font-bold group-hover:text-[#915EFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-secondary text-[14px] leading-[22px]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[13px] font-semibold text-[#00cea8]">
                  Verified Distinction
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
