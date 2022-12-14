import { motion, Variants } from "framer-motion";

import { Project } from "../components/Project";
import { Title } from "../components/Title";
import { data } from "../services/projectData";

export function Projects() {
  const Variants: Variants = {
    offscreen: {
      x: 200,
      opacity: -0.1,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }
    }
  };

  return (
    <motion.div 
      id="projects" 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }} 
      className="flex flex-col min-h-screen m-auto w-full dark:bg-slate-100"
    >
      <motion.section variants={Variants} className="m-auto flex flex-col items-start lg:items-center sm:items-start lg:space-y-5 my-10 max-w-7xl 2xl:max-w-5xl lg:max-w-3xl sm:max-w-sm">
        <Title title="Projects I've Built" />        
        <Project data={data} />
      </motion.section>
    </motion.div>
  )
}