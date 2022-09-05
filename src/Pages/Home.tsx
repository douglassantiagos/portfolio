import { motion, Variants } from "framer-motion";

export function Home() {
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
        duration: 1.5,
        delay: 1.5
      }
    }
  };

  const imageVariants: Variants = {
    offscreen: {
      y: 900,
      opacity: -0.1
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: 1.5
      }
    }
  };

  return (
    <motion.div 
      id="home"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="grid grid-cols-2 min-h-screen m-auto max-w-7xl"    
    >
      <motion.section variants={Variants} className="flex flex-col items-start justify-center">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white">HI,</h1>
            <h1 className="text-4xl text-white">I'M</h1>
          </div>
          <h1 className="text-8xl text-white font-extrabold">DOUGLAS</h1>        
        </div>    
        <h1 className="text-8xl font-extrabold -ml-2 -mt-6">SANTIAGO</h1>        
        <h1 className="text-4xl font-extrabold">FRONT-END DEVELOPER</h1>
      </motion.section>

      <motion.section variants={imageVariants} className="flex items-center justify-center w-full pb-20 shadow-xl rounded-xl">
        <img className="w-full rounded-b-full drop-shadow-lg" src="./avatar.png" />
      </motion.section>        
    </motion.div>
  )
}