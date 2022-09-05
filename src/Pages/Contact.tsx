import { motion, Variants } from "framer-motion";

import { Form } from "../components/Form";


export function Contact() {
  const Variants: Variants = {
    offscreen: {
      y: 300,
      opacity: -0.1,
    },
    onscreen: {
      y: 0,
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
      id="contact" 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} 
      className="flex flex-col min-h-screen max-auto items-center justify-center space-y-5 dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00]"
    >
      <motion.div variants={Variants}  className="flex flex-col items-center justify-center space-y-5 shadow-xl p-10 dark:border-r-4 dark:border-white rounded-xl border-r-4 border-purple-600">
        <h1 className="text-purple-600 text-5xl font-bold dark:text-white">
          Get In Touch
        </h1>

        <p className="text-gray-400 text-lg text-center font-Roboto max-w-sm dark:text-purple-900">
          My mailbox is always open for your message and I'll try answers it the fast I can!
        </p>

        <Form />
      </motion.div>
    </motion.div> 
  )
}