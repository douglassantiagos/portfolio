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
    <>    
      <motion.div 
        id="Home"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="min-md:hidden w-full min-h-screen mt-16 m-auto dark:bg-gradient-to-br dark:from-[#FF9900] dark:to-[#FF7C00]"    
      >
        <motion.div variants={Variants} className="flex flex-col space-y-4 sm:space-y-10 w-[90vw] m-auto" >
          <motion.section variants={imageVariants} className="flex items-center justify-center -mt-5 ">
            <img className="max-w-md sm:max-w-sm rounded-b-full drop-shadow-x" src="./avatar.png" />
          </motion.section>   

          <motion.section variants={Variants} className="flex flex-wrap flex-col items-start justify-center m-auto">
            <div className="flex items-center">
              <div className="flex flex-col sm:-space-y-1 items-center">
                <h1 className="text-4xl text-white sm:text-xl">HI,</h1>
                <h1 className="text-4xl text-white sm:text-xl">I'M</h1>
              </div>
              <h1 className="text-8xl text-white font-extrabold sm:text-6xl">DOUGLAS</h1>        
            </div>    
            <h1 className="text-8xl -ml-1 -mt-6 font-extrabold sm:text-6xl sm:-mt-3">SANTIAGO</h1>        
            <h1 className="text-4xl font-extrabold sm:text-xl">FRONT-END DEVELOPER</h1>
          </motion.section>
        </motion.div>
      </motion.div>

      <motion.div 
        id="home"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:hidden grid grid-cols-2 min-h-screen m-auto max-w-7xl 2xl:max-w-5xl xl:max-w-3xl sm:min-h-[85vh] "    
      >
        <motion.section variants={Variants} className="flex flex-wrap flex-col items-start justify-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-white 2xl:text-2xl xl:text-xl">HI,</h1>
              <h1 className="text-4xl text-white 2xl:text-2xl xl:text-xl">I'M</h1>
            </div>
            <h1 className="text-8xl text-white font-extrabold 2xl:text-7xl xl:text-6xl lg:text-6xl">DOUGLAS</h1>        
          </div>    
          <h1 className="text-8xl -ml-2 -mt-6 font-extrabold 2xl:text-7xl 2xl:-mt-4 xl:text-6xl xl:-ml-1 xl:-mt-3">SANTIAGO</h1>        
          <h1 className="text-4xl font-extrabold 2xl:text-2xl xl:text-xl">FRONT-END DEVELOPER</h1>
        </motion.section>

        <motion.section variants={imageVariants} className="flex items-center justify-center w-full pb-20 shadow-xl rounded-xl">
          <img className="w-full rounded-b-full drop-shadow-xl" src="./avatar.png" />
        </motion.section>        
      </motion.div>
    </>
  )
}