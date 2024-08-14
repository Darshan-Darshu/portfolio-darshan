"use client";

import { motion } from "framer-motion";

function About() {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="/assests/Darshan.jpg"
        alt="Darshan-Image"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40"> little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm Darshan. I'm been coding for over 7 years now, Started my journey
          as a JavaScript full-stack developer by participating in hackathons,
          What began as a passion project gradually evolved into a daily
          commitment as I integrated coding into my routine. Embraced the latest
          trends in web development, incorporating Next.js for server-side
          rendering and Tailwind CSS for efficient styling, adopting a modern
          and streamlined approach to coding. Leveraged my expertise as a
          freelancer and in IT industries, accumulating 1.8 years of hands-on
          experience in delivering tailored solutions for organizations.
          Developed a reputation for being a solution-oriented thinker,{" "}
          <span className="hidden md:inline">
            driven by passion and motivation to build end-to-end applications
            that are not only functional but also optimized for performance and
            scalability, Approach each project with optimism and enthusiasm,
            believing in the transformative power of technology to bring about
            positive change, and striving to create impactful solutions that
            exceed expectations, honing my skills in MERN stack development
            through consistent practice and experimentation
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
