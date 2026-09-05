import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

import { styles } from "../style";
import { personalInfo } from "../constants";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatusMsg(null);

    try {
      // Send directly to siradhanachetan14@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/siradhanachetan14@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setLoading(false);
        setStatusMsg({
          type: "success",
          text: "Thank you! Your message has been sent directly to siradhanachetan14@gmail.com.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("FormSubmit server error");
      }
    } catch (error) {
      console.warn("Direct form submit fallback to mailto:", error);
      setLoading(false);
      
      // Fallback: Open user's default email client
      window.location.href = `mailto:siradhanachetan14@gmail.com?subject=Contact from ${encodeURIComponent(
        form.name
      )}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`)}`;
      
      setStatusMsg({
        type: "success",
        text: "Opening email client to send message to siradhanachetan14@gmail.com...",
      });
    }
  };

  const contactCards = [
    {
      title: "Email Address",
      value: "siradhanachetan14@gmail.com",
      href: "mailto:siradhanachetan14@gmail.com",
      icon: Mail,
    },
    {
      title: "Phone / WhatsApp",
      value: "+91-9354864420",
      href: "tel:+919354864420",
      icon: Phone,
    },
    {
      title: "LinkedIn Profile",
      value: "chetan-singh-6022b1298",
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
    },
    {
      title: "GitHub Profile",
      value: "ChetanSingh14",
      href: personalInfo.github,
      icon: GithubIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactCards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <a
              key={idx}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#915EFF]/50 hover:bg-white/5 transition-all flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-[#915EFF]/10 text-[#915EFF] border border-[#915EFF]/20 group-hover:scale-110 transition-transform">
                <IconComp className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-secondary text-[12px] font-semibold">{card.title}</p>
                <p className="text-white text-[13.5px] font-bold truncate group-hover:text-[#915EFF] transition-colors">
                  {card.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Main Interactive Form & 3D Earth Container */}
      <div className="xl:mt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] glass-card p-8 rounded-3xl border border-white/10"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me.</h3>
          <p className="text-secondary text-[14px] mt-1">
            Send a message directly to <span className="text-[#00cea8] font-semibold">siradhanachetan14@gmail.com</span>
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-[14px]">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-3.5 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium text-[15px] transition-colors"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-[14px]">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-3.5 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium text-[15px] transition-colors"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-[14px]">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-3.5 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] font-medium text-[15px] transition-colors"
                required
              />
            </label>

            {statusMsg && (
              <div
                className={`p-3.5 rounded-xl border flex items-center gap-2 text-[14px] font-medium ${
                  statusMsg.type === "success"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-300"
                }`}
              >
                {statusMsg.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{statusMsg.text}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#915EFF] to-[#7033ff] py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-[#915EFF]/30 hover:scale-105 hover:shadow-xl hover:shadow-[#915EFF]/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] rounded-3xl overflow-hidden glass-card border border-white/10 relative"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");