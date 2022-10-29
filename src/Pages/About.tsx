import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiGit } from "react-icons/si";
import { motion, Variants } from "framer-motion";

import { Title } from "../components/Title";
import { CircleWavyCheck, Code, GitBranch, GitCommit, GlobeHemisphereWest, GraduationCap } from "phosphor-react";

export function About() {
  const Variants: Variants = {
    offscreen: {
      x: -300,
      opacity: -0.1,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      }
    }
  };

  return (
    <motion.div 
      id="about"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }} 
      className="flex flex-col min-h-screen justify-center items-center min-w-full m-auto dark:bg-white"
    >
      <motion.div variants={Variants} className="flex flex-col 2xl:max-w-5xl xl:max-w-3xl md:max-w-2xl sm:max-w-sm items-center justify-center space-y-5 lg:my-20 sm:space-y-0 dark:bg-white" >
        <div className=" flex xl:flex-col items-center justify-center space-x-10 lg:space-y-5 py-10">
          <img src="./me.jpg" className="w-80 h-80 sm:w-60 sm:h-60 rounded-full object-cover hover:scale-105 hover:border-4 border-[1px] border-r-4 border-b-4 border-purple-600 transition-all duration-450 ease-linear dark:border-orange-400" />
          <section className="flex flex-col items-start justify-center max-w-xl sm:w-full">
            <Title title="About Me" />

            <p className="font-Roboto text-base sm:w-[80vw] text-gray-400 text-justify leading-8 mt-8 dark:text-gray-600">
              My name is Douglas Santiago. I'm front-end developer from Rio de Janeiro, Brazil. <br/>
              I started my journey in technology in the year 2019 in college, but my interest in web development started back in 2021, when I 
              developed my first application call
              <a href="https://github.com/douglassantiagos/Maratona-JobsCalc" target="_blank" className="ml-2 group text-purple-600 dark:text-orange-400 transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r from-purple-600 to-purple-600 dark:from-orange-400 dark:to-orange-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-400 ease-out">
                  JobsCalc
                </span>
              </a>. Application created to manager freelancer jobs. <br/>          
              Currently, I'm specializing in building awesome digital experience with current web development technologies.   
            </p>
          </section>    
        </div>

        <motion.ul variants={Variants} className="flex items-center justify-center space-x-10 lg:space-x-8 sm:space-x-4 min-w-[70rem]">
          <li className="flex items-center gap-2">
            <SiJavascript className="text-[1.5rem] lg:text-6xl sm:text-5xl dark:text-orange-400" />
            <p className="text-xl lg:hidden text-white dark:text-purple-900">JavaScript</p>
          </li>
          <li className="flex items-center gap-2">
            <SiTypescript className="text-[1.5rem] lg:text-6xl sm:text-5xl dark:text-orange-400" />
            <p className="text-xl lg:hidden text-white dark:text-purple-900">TypeScript</p>
          </li>
          <li className="flex items-center gap-2">
            <SiReact className="text-[1.5rem] lg:text-6xl sm:text-5xl dark:text-orange-400" />
            <p className="text-xl lg:hidden text-white dark:text-purple-900">React</p>
          </li>
          <li className="flex items-center gap-2">
            <SiHtml5 className="text-[1.5rem] lg:text-6xl sm:text-5xl dark:text-orange-400" />
            <p className="text-xl lg:hidden text-white dark:text-purple-900">HTML</p>
          </li>
          <li className="flex items-center gap-2">
            <SiCss3 className="text-[1.5rem] lg:text-6xl sm:text-5xl dark:text-orange-400" />
            <p className="text-xl lg:hidden text-white dark:text-purple-900">CSS</p>
          </li>
          <li className="flex items-center gap-2">
            <SiGit className="text-[1.5rem] lg:text-6xl sm:text-5xl dark:text-orange-400" />
            <p className="text-xl lg:hidden text-white dark:text-purple-900">Git</p>
          </li>
        </motion.ul>
      </motion.div>

      <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} 
      className="sm:flex sm:flex-col sm:items-center sm:justify-center w-[1280px] 2xl:w-[1024px] xl:w-[768px] md:w-[670px] sm:w-[380px] mt-20 xl:mt-0"
      >
        <motion.h1 variants={Variants} className="flex justify-center text-xl text-white dark:text-purple-900 dark:font-bold">Some Qualifications</motion.h1>

        <motion.div variants={Variants} className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 lg:gap-y-36 lg:gap-x-4 gap-4 mt-20">
          <motion.div className="flex flex-col items-center">
            <motion.section  className="flex items-center justify-center w-full max-h-32 lg:max-h-28 bg-transparent border-2 border-purple-600 dark:border-orange-400 text-white dark:text-purple-900 font-Roboto p-10 rounded-xl shadow-lg">
              <h1>Last graduation period of Information System</h1>
            </motion.section>
            <GraduationCap size={70} className="text-white -mt-[10.5rem] lg:-mt-[9.6rem] bg-purple-900 dark:bg-orange-400 dark:text-purple-900 rounded-full p-3" />          
          </motion.div>

          <motion.div className="flex flex-col items-center">
            <motion.section  className="flex items-center justify-center w-full max-h-32 lg:max-h-28 bg-transparent border-2 border-purple-600 dark:border-orange-400 text-white dark:text-purple-900 font-Roboto p-10 rounded-xl shadow-lg">
              <h1>Web development course with ReactJS</h1>
            </motion.section>
            <Code size={70} className="text-white -mt-[10.5rem] lg:-mt-[9.6rem] bg-purple-900 dark:bg-orange-400 dark:text-purple-900 rounded-full p-3" />          
          </motion.div>

          <motion.div className="flex flex-col items-center">
            <motion.section  className="flex items-center justify-center w-full max-h-32 lg:max-h-28 bg-transparent border-2 border-purple-600 dark:border-orange-400 text-white dark:text-purple-900 font-Roboto p-10 rounded-xl shadow-lg">
              <h1>Writing and speaking intermediate level in English</h1>
            </motion.section>
            <GlobeHemisphereWest size={70} className="text-white -mt-[10.5rem] lg:-mt-[9.6rem] bg-purple-900 dark:bg-orange-400 dark:text-purple-900 rounded-full p-3" />          
          </motion.div>

          <motion.div className="flex flex-col items-center">
            <motion.section  className="flex items-center justify-center w-full max-h-32 lg:max-h-28 bg-transparent border-2 border-purple-600 dark:border-orange-400 text-white dark:text-purple-900 font-Roboto p-10 rounded-xl shadow-lg">
              <h1>Professional Remote Work and Virtual Collaboration Certification</h1>
            </motion.section>
            <CircleWavyCheck size={70} className="text-white -mt-[10.5rem] lg:-mt-[9.6rem] lg:mb-32 bg-purple-900 dark:bg-orange-400 dark:text-purple-900 rounded-full p-3" />          
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div> 
  )
}
            