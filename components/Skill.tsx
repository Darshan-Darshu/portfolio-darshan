import { SkillData } from "@/data/projects";
import { motion } from "framer-motion";

type Props = {
  skill: SkillData;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex items-center justify-center cursor-pointer ">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 300,
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
        className="bg-white rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 flex items-center justify-center border border-gray-500"
      >
        <motion.img
          viewport={{ once: true }}
          src={`/assests/${skill.imageUrl}`}
          className="rounded-full w-20 h-20 object-contain md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{`${skill.percentage}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
