"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience() {
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
      className='h-screen flex relative  overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='md:absolute md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll justify-center p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard />
        {/* <ExperienceCard /> */}
        {/* <ExperienceCard /> */}
      </div>
    </motion.div>
  );
}

export default Experience;
