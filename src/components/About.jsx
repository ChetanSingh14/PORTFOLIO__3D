import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Code2, Server, Database, Zap, MapPin, Mail, Phone, Award } from "lucide-react";

import { styles } from "../style";
import { services, personalInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { chetanSingh } from "./assets";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[260px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[22px] shadow-card hover:shadow-[0_0_30px_rgba(145,94,255,0.3)] transition-all duration-300"
    >
      <div
        options={{
          max: 35,
          scale: 1.02,
          speed: 400,
        }}
        className="bg-tertiary rounded-[22px] py-6 px-6 min-h-[300px] flex justify-between items-center flex-col border border-white/5 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#915EFF]/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform" />

        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 my-2 group-hover:scale-110 group-hover:border-[#915EFF]/50 transition-all">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-white text-[19px] font-bold text-center mt-2 group-hover:text-[#915EFF] transition-colors">
          {title}
        </h3>

        <p className="text-secondary text-[13px] text-center mt-2 leading-[20px] font-medium">
          {description}
        </p>

        <div className="w-8 h-[2px] bg-[#915EFF]/50 rounded-full mt-4 group-hover:w-16 transition-all" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const highlights = [
    { label: "PostgreSQL & MERN Latency", value: "<50ms", icon: Zap },
    { label: "DSA Problems Solved", value: "100+", icon: Code2 },
    { label: "Server Uptime (AWS)", value: "99.9%", icon: Server },
    { label: "Daily DB Writes Handled", value: "10K+", icon: Database },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview & Profile.</h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Profile Card with Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="lg:col-span-4 flex justify-center"
        >
          <Tilt className="w-full max-w-[320px]">
            <div className="glass-card p-4 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#915EFF]/30 to-[#00cea8]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
              
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#915EFF]/50 transition-colors">
                <img
                  src={chetanSingh}
                  alt="Chetan Singh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-[22px] flex items-center justify-center gap-1.5">
                  Chetan Singh
                  <Award className="w-5 h-5 text-[#00cea8]" />
                </h3>
                <p className="text-[#915EFF] text-[13px] font-semibold mt-0.5">
                  {personalInfo.title}
                </p>

                <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 text-secondary text-[12px]">
                  <span className="flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00cea8]" /> {personalInfo.location}
                  </span>
                  <span className="flex items-center justify-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#915EFF]" /> {personalInfo.email}
                  </span>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Bio Text & Metrics */}
        <div className="lg:col-span-8">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[16px] sm:text-[18px] leading-[30px] sm:leading-[34px]"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Metrics & Highlights Grid */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#915EFF]/50 transition-colors"
                >
                  <IconComp className="w-6 h-6 text-[#915EFF] mb-1" />
                  <span className="text-[24px] font-black text-white">{item.value}</span>
                  <span className="text-[12px] font-medium text-secondary">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Services / Specialization Cards */}
      <div className="mt-16 flex flex-wrap justify-center sm:justify-start gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");