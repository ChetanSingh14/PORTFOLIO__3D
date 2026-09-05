import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

import { navLinks, personalInfo } from "../constants";
import { styles } from "../style";
import { chetanSingh } from "./assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#915EFF] to-[#00cea8] shadow-md group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img src={chetanSingh} alt="Chetan Singh" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[19px] font-bold cursor-pointer flex items-center gap-1 font-sans">
              Chetan <span className="text-[#915EFF]">Singh</span>
            </p>
            <span className="text-[12px] text-secondary font-medium hidden sm:block">
              {personalInfo.title}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-7 items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-[#915EFF] font-semibold" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200 relative`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                {active === nav.title && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#915EFF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Quick Action Icons */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2 rounded-full bg-tertiary/80 text-secondary hover:text-white hover:bg-[#915EFF]/20 hover:scale-110 transition-all border border-white/5"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 rounded-full bg-tertiary/80 text-secondary hover:text-white hover:bg-[#915EFF]/20 hover:scale-110 transition-all border border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 text-white bg-tertiary rounded-lg border border-white/10 focus:outline-none"
          >
            {toggle ? <X className="w-6 h-6 text-[#915EFF]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 glass-card absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-50 rounded-2xl flex-col gap-4 shadow-2xl border border-white/10`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#915EFF] font-bold" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-around gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-tertiary text-secondary hover:text-white"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-tertiary text-secondary hover:text-white"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;