"use client";

import { projectData } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

function ProjectPage() {
  const params = useParams();
  const id = params.id;
  const project = projectData.find((data) => data.id === +id);

  if (!project) return <p>no project available for selected item</p>;
  return (
    <motion.div className="flex flex-col justify-center">
      <Link href="/" className="w-full flex justify-center">
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
          src={`/assests/projects/${project.imageUrl}`}
          alt=""
          className="h-[400px] object-contain"
        />
      </Link>
      <motion.div
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
        className="flex space-x-4 items-center justify-center"
      >
        <Link href="/" className=" hover:underline">
          Video
        </Link>
        <Link
          href={project.link.demo}
          target="_blank"
          className="hover:underline"
        >
          Demo
        </Link>
      </motion.div>
      <div className="max-w-[80vw] mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
          }}
          viewport={{ once: true }}
        >
          <motion.p className="mt-8 text-2xl">{project.title}</motion.p>
          <motion.p className="mt-2 text-md">{project.description}</motion.p>

          <motion.ul className="mt-4">
            <h2 className="text-lg font-bold mb-2">Key Features:</h2>
            {project.keyFeatures.map(({ main, desc }) => (
              <li key={main} className="">
                <span className="text-lg font-bold">{main}</span> : {desc}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="mt-8">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="text-lg font-bold"
          >
            Technology Used:
          </motion.h1>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="flex items-center bg-white mt-4 px-8 shadow-md py-4 flex-wrap whitespace-nowrap flex-grow-0 rounded-sm"
          >
            {project.technology.map((tech) => (
              <div className="relative group">
                <motion.img
                  key={tech.name}
                  viewport={{ once: true }}
                  src={`/assests/${tech.image}`}
                  className="w-16 mr-4 md:mr-8 lg:mr-12 h-16 object-contain md:w-20 md:h-20 xl:w-24 xl:h-24 filter transition duration-300 ease-in-out"
                />
                <p className="hidden bg-white text-sm text-black group-hover:inline-block absolute -bottom-4 border px-4 py-1 ">
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default ProjectPage;
