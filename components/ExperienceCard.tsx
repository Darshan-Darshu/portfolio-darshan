import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src='/assests/Darshan.jpg'
        alt='company-logo'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>
          Software engineer
        </h4>
        <p className='font-bold text-2xl mt-1'>
          Full stack developer
        </p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Used */}
          <img
            src='/assests/Darshan.jpg'
            alt=''
            className='h-10 w-10 rounded-full'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started Work... - Ended...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
