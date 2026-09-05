import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import {
  InsangerLogo,
  TimesInternetLogo,
  FnMafiaLogo,
  AYTechLogo,
  OpenSourceLogo,
} from "./CompanyIcons";

const companyLogoMap = {
  insanger: InsangerLogo,
  times: TimesInternetLogo,
  fnmafia: FnMafiaLogo,
  aytech: AYTechLogo,
  opensource: OpenSourceLogo,
};

const ExperienceCard = ({ experience }) => {
  const LogoComponent = companyLogoMap[experience.company_icon] || InsangerLogo;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(23, 19, 48, 0.9)",
        color: "#fff",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 15px 35px -10px rgba(0,0,0,0.6)",
        backdropFilter: "blur(16px)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(23, 19, 48, 0.9)" }}
      date={
        <div className="flex flex-col gap-1 sm:px-3">
          <span className="text-white font-semibold text-[14px] flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
            <Calendar className="w-4 h-4 text-[#915EFF]" /> {experience.date}
          </span>
          {experience.location && (
            <span className="text-secondary text-[13px] flex items-center gap-1 mt-1 pl-1">
              <MapPin className="w-3.5 h-3.5 text-[#00cea8]" /> {experience.location}
            </span>
          )}
        </div>
      }
      iconStyle={{
        background: experience.iconBg || "#1d1836",
        boxShadow: "0 0 0 4px #915EFF, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-1.5">
          <LogoComponent className="w-full h-full object-contain" />
        </div>
      }
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-white text-[22px] font-black tracking-tight">
            {experience.title}
          </h3>
        </div>

        <p
          className="text-[#915EFF] text-[16px] font-bold flex items-center gap-1.5 mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
          {experience.company_url && (
            <a
              href={experience.company_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
              title="Visit Company Page"
            >
              <ExternalLink className="w-4 h-4 text-[#00cea8]" />
            </a>
          )}
        </p>

        <ul className="mt-4 list-disc ml-5 space-y-2.5">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wide leading-[22px]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");