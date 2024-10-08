"use client";

import { projectData } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

function Projects() {
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
      className="h-screen flex relative flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thumb-[#F7AB0A]/80 z-20">
        {projectData.map(({ id, imageUrl, title, description }, i) => (
          <Link
            href={`/projects/${id}`}
            key={id}
            className="w-screen flex-shrink-0 snap-center flex flex-col md:space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={`/assests/projects/${imageUrl}`}
              alt=""
              className="h-[400px] object-contain"
            />

            <div className="space-y-6 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projectData.length}{" "}
                </span>
                : {title}
              </h4>

              <p className="text-sm md:text-lg text-center md:text-left">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
