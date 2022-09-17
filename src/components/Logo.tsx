import { motion } from "framer-motion";

export function Logo() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="md:absolute 2xl:fixed fixed top-12 sm:top-8 left-36 2xl:left-20 lg:left-10 sm:left-6">
      <a href="/">
        <span className="self-start text-3xl px-2 py-1 border-2 border-l-black border-t-black rounded-lg rounded-tr-none rounded-bl-none font-bold border-purple-600 dark:border-l-[#FF7C00] dark:border-t-[#FF7C00] dark:border-purple-900">
          D
        </span>
      </a>
    </motion.div>
  )
}