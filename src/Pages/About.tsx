import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3 } from "react-icons/si";
import { motion, Variants } from "framer-motion";

import { Title } from "../components/Title";

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
      viewport={{ once: true, amount: 0.5 }} 
      className="flex flex-col min-h-screen justify-center items-center min-w-full m-auto dark:bg-white"
    >
      <motion.div variants={Variants} className="flex flex-col 2xl:max-w-5xl xl:max-w-3xl md:max-w-2xl sm:max-w-sm items-center justify-center space-y-5 lg:my-20 sm:space-y-0 dark:bg-white dark:rounded-xl rounded-xl border-[1px] border-purple-600 dark:border-orange-400" >
        <div className=" flex xl:flex-col items-center justify-center space-x-10 lg:space-y-5 py-10">
          <img src="./me2.jpg" className="w-80 h-80 sm:w-60 sm:h-60 rounded-l-[10rem] rounded-tr-[10rem] hover:scale-105 hover:border-4 border-2 border-purple-600 transition-all duration-450 ease-linear dark:border-orange-400" />
          <section className="flex flex-col items-start justify-center max-w-xl sm:w-full">
            <Title title="About Me" />

            <p className="font-Roboto text-lg sm:w-[80vw] text-gray-400 text-justify leading-8 mt-8 dark:text-gray-600">
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

        <motion.ul variants={Variants} className="flex items-center justify-center space-x-10 sm:space-x-4 min-w-[70rem]">
          <li><SiJavascript className="text-[5rem] sm:text-5xl animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiTypescript className="text-[5rem] sm:text-5xl animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiReact className="text-[5rem] sm:text-5xl animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiHtml5 className="text-[5rem] sm:text-5xl animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiCss3 className="text-[5rem] sm:text-5xl animate-bounce hover:animate-none dark:text-orange-400" /></li>
        </motion.ul> 
      </motion.div>


      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }} 
        className="sm:flex sm:items-center sm:justify-center w-[1120px] 2xl:w-[1024px] xl:w-[768px] md:w-[670px] sm:w-[380px] mt-20 xl:mt-0"
      >
        <motion.h1 variants={Variants} className="text-white dark:text-purple-900 dark:font-bold">Some Qualifications</motion.h1> 
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }} 
        className="sm:flex sm:flex-col sm:items-center grid grid-rows-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-col xl:grid-flow-row gap-4 sm:gap-8 dark:bg-slate-100 w-[1120px] 2xl:w-[1024px] xl:w-[768px] md:w-[670px] sm:w-[380px] mt-8 xl:mb-10"
      >
        <motion.section variants={Variants} className="flex items-center justify-center max-w-xs max-h-28 sm:w-full bg-gradient-to-br from-purple-600 to-[#736cfeab] dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00] text-white font-Roboto p-10 rounded-xl shadow-lg">
          <h1>Last Graduation Period of Information System</h1>
        </motion.section>
        <motion.section variants={Variants} className="flex items-center justify-center max-w-xs max-h-28 sm:w-full bg-gradient-to-br from-purple-600 to-[#736cfeab] dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00] text-white font-Roboto p-10 rounded-xl shadow-lg">
          <h1>Web Development Course With ReactJS</h1>
        </motion.section>
        <motion.section variants={Variants} className="flex items-center justify-center max-w-xs max-h-28 sm:w-full bg-gradient-to-br from-purple-600 to-[#736cfeab] dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00] text-white font-Roboto p-10 rounded-xl shadow-lg">
          <h1>Intermediary English</h1>
        </motion.section>
        <motion.section variants={Variants} className="flex items-center justify-center max-w-xs max-h-28 sm:w-full bg-gradient-to-br from-purple-600 to-[#736cfeab] dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00] text-white font-Roboto p-10 rounded-xl shadow-lg">
          <h1>Professional Remote Work and Virtual Collaboration Certification</h1>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}