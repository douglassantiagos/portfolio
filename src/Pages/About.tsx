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
      viewport={{ once: true, amount: 0.8 }} 
      className="flex flex-col min-h-screen justify-center items-center space-y-20 min-w-full m-auto dark:bg-slate-100 "
    >
      <motion.div variants={Variants} className=" flex flex-col items-center justify-center space-y-5 dark:bg-white dark:rounded-xl shadow-xl rounded-xl border-r-4 border-purple-600 dark:border-r-4 dark:border-orange-400" >
        <div className=" flex items-center justify-center space-x-10 py-10">
          <img src="./me2.jpg" className="w-80 h-80 rounded-full hover:scale-105 hover:border-4 border-2 dark:border-4 border-purple-600 transition-all duration-450 ease-linear dark:border-orange-400" />
          <div className="flex flex-col items-start justify-center max-w-xl">
            <Title title="About Me" />

            <p className="font-Roboto text-lg text-gray-400 text-justify leading-8 mt-8 dark:text-gray-400">
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
          </div>    
        </div>

        <motion.ul variants={Variants} className="flex items-center justify-center space-x-10 min-w-[70rem]">
          <li><SiJavascript size={80} className="animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiTypescript size={80} className="animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiReact size={80} className="animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiHtml5 size={80} className="animate-bounce hover:animate-none dark:text-orange-400" /></li>
          <li><SiCss3 size={80} className="animate-bounce hover:animate-none dark:text-orange-400" /></li>
        </motion.ul> 
      </motion.div>
    </motion.div>
  )
}