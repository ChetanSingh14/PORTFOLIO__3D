import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, ExternalLink } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

import { styles } from "../style";
import { personalInfo } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto pt-[110px] pb-12 flex flex-col justify-between overflow-hidden">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10`}>
        {/* Left Text Content Area (Span 7 cols on LG) */}
        <div className="lg:col-span-7 flex flex-row items-start gap-4">
          {/* Vertical Gradient Line */}
          <div className="flex flex-col justify-center items-center mt-2 shrink-0">
            <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_#915EFF]" />
            <div className="w-1 sm:h-80 h-48 violet-gradient" />
          </div>

          <div className="flex flex-col">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 w-fit"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[13px] font-medium text-emerald-300 flex items-center gap-1">
                Available for Full Stack & Mobile Roles
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-black text-white lg:text-[68px] sm:text-[54px] text-[38px] leading-tight tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-[#915EFF] drop-shadow-[0_0_30px_rgba(145,94,255,0.5)]">
                Chetan Singh
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 text-secondary max-w-xl text-[16px] sm:text-[19px] leading-[28px] sm:leading-[32px] font-medium"
            >
              Full Stack & Mobile Engineer specializing in{" "}
              <span className="text-[#915EFF] font-bold">MERN</span>,{" "}
              <span className="text-[#00cea8] font-bold">Next.js</span>,{" "}
              <span className="text-cyan-400 font-bold">React Native</span> &{" "}
              <span className="text-pink-400 font-bold">AWS Infrastructure</span>.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#915EFF] to-[#7033ff] text-white font-semibold text-[15px] shadow-lg shadow-[#915EFF]/30 hover:scale-105 hover:shadow-xl hover:shadow-[#915EFF]/50 transition-all flex items-center gap-2"
              >
                View Projects <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-tertiary border border-white/15 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all flex items-center gap-2"
              >
                Let's Connect <Mail className="w-4 h-4 text-[#00cea8]" />
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-tertiary/90 border border-white/10 text-secondary hover:text-white hover:border-[#915EFF]/50 hover:scale-110 transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-tertiary/90 border border-white/10 text-secondary hover:text-white hover:border-[#915EFF]/50 hover:scale-110 transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right 3D Model Canvas Container (Span 5 cols on LG) */}
        <div className="lg:col-span-5 h-[380px] sm:h-[450px] lg:h-[520px] w-full relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex justify-center items-center mt-6 z-20">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[55px] rounded-3xl border-2 border-secondary/60 flex justify-center items-start p-2 backdrop-blur-sm bg-black/20 hover:border-[#915EFF] transition-colors">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF] shadow-[0_0_8px_#915EFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;