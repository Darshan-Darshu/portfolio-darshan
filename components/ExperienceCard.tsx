import { motion } from "framer-motion";
import Image from "next/image";

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[98vw] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
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
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] bg-white'
      >
        <motion.img
          src='/assests/zensar.jpg'
          alt='company-logo'
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain'
        />
      </motion.div>
      <div className='px-4 md:px-10'>
        <h4 className='text-4xl font-light'>
          Software Engineer
        </h4>
        <p className='font-bold text-2xl mt-1'>
          Full stack developer
        </p>
        <div className='flex space-x-4 my-2'>
          {/* Tech Used */}
          <Image
            width={80}
            height={80}
            src='/assests/JavaScript-logo.png'
            alt='logo'
            className='h-10 w-10 object-cover'
          />
          <Image
            width={80}
            height={80}
            src='/assests/React-icon.png'
            alt='logo'
            className='h-10 w-12 object-cover'
          />
          <Image
            width={80}
            height={80}
            src='/assests/nodejs.png'
            alt='logo'
            className='h-10 object-cover'
          />
          <Image
            width={80}
            height={80}
            src='/assests/nextjs.png'
            alt='logo'
            className='h-10 object-cover'
          />
          <Image
            width={80}
            height={80}
            src='/assests/mongo.png'
            alt='logo'
            className='h-10 w-10'
          />
        </div>
        <p className='uppercase py-3 text-gray-300'>
          02/10/2022 - till now
        </p>
        <ul className='list-disc space-y-2 ml-5 text-[12px] md:text-[15px]'>
          <li>
            Developed a Seating Booking Application for
            Zensar, demonstrating proficiency in full-stack
            development
          </li>
          <li>
            Contributed intensively to the Macy's project,
            enhancing productivity and delivering
            high-quality solutions, approx 20% boot in there
            productivity
          </li>
          <li>
            Leveraged agile methodologies to drive project
            success, participating in sprint planning, daily
            stand-up meetings, and retrospectives to ensure
            timely delivery of high-quality app
          </li>
          <li>
            Implemented best practices, and optimized
            codebase for performance and scalability,
            contributing to the overall success of the
            projects
          </li>
        </ul>
        <div className='flex space-x-12 pt-4'>
          <div className='flex items-end space-x-4'>
            <img
              src='/assests/award.png'
              className='w-16 h-12 '
            />
            <div className='text-[10px] md:text-[12px] font-semibold'>
              <p>
                Recognized as the top performer in the MERN
                Stack training batch
              </p>
              <p>
                Second runner-up in Cladethon, a competitive
                hackathon
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
