"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { skillData } from "@/data/projects";

function Skills() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-4 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skillData.map((skill, index) => (
          <Skill
            key={index}
            skill={skill}
            directionLeft={index > 7 ? false : true}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
