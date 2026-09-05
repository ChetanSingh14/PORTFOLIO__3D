import { ArrowUp, Mail, Heart } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import { personalInfo, navLinks } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#030612] border-t border-white/10 py-10 px-6 sm:px-16 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#915EFF] to-[#00cea8] flex items-center justify-center font-bold text-white text-xs">
              CS
            </div>
            <span className="text-white font-bold text-[18px]">Chetan Singh</span>
          </div>
          <p className="text-secondary text-[13px] mt-1 max-w-sm">
            Full Stack & Mobile Engineer crafting high-performance digital applications.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-secondary hover:text-white text-[14px] font-medium transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-tertiary border border-white/10 text-secondary hover:text-white hover:border-[#915EFF]/50 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-tertiary border border-white/10 text-secondary hover:text-white hover:border-[#915EFF]/50 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-tertiary border border-white/10 text-secondary hover:text-white hover:border-[#915EFF]/50 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#915EFF]/20 border border-[#915EFF]/40 text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-all ml-2"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-secondary text-[12px] gap-2">
        <p>© {new Date().getFullYear()} Chetan Singh. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with React, Three.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
