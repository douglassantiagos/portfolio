import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";
import { Moon, Sun } from "phosphor-react";

import { Button } from "./Button";
import { Logo } from "./Logo";
import { useTheme } from "../hooks/useTheme";

export function Header() {
  const { theme, setTheme } = useTheme();

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
    
  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  const itemNav = {
    hidden: { x: 100, opacity: 0, rotate: 90 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 90,
      transition: {
        delay: 1.1,
      },
    },
  }

  return (
    <>
      <Logo />       

      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="fixed top-1/2 left-40"
      >
        <ul className="space-y-5">          
          <motion.li variants={item}>
            <a href="https://github.com/douglassantiagos" target="_blank">
              <abbr title="GitHub">
                <FiGithub 
                  size={22} 
                  className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" 
                />
              </abbr>
            </a>          
          </motion.li>
          <motion.li variants={item}>
            <a href="https://www.linkedin.com/in/douglas-santiago-607838192/" target="_blank">
              <abbr title="Linkedin">
                <FiLinkedin 
                  size={22} 
                  className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" 
                />
              </abbr>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://www.instagram.com/osantiagods/" target="_blank">
              <abbr title="Instagram">
                <FiInstagram
                  size={22} 
                  className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" 
                />
              </abbr>
            </a>
          </motion.li>
          {/* <li className="block w-1 h-60 m-auto bg-white"></li> */}
        </ul>
      </motion.header>

      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="fixed flex flex-col items-center m-auto right-44 h-full"
      >
        { theme === "light" ? (
          <button
            type="button"
            className="fixed border-2 rounded-full p-2 top-12"
            onClick={() => setTheme("dark")}
          >
            <Moon weight="fill" size={24} color={'white'} className="" />
          </button>
        ) : (
          <button
            type="button"
            className="fixed bg-transparent border-2 border-yellow rounded-full p-2 top-12"
            onClick={() => setTheme("light")}
          >
            <Sun weight="fill" size={24} color={'yellow'} className="" />
          </button>
        )}

        <ul className="fixed flex flex-col space-y-24 items-center top-1/4">
          <motion.li variants={itemNav} className=" text-white dark:text-purple-900">
            <a href="#home" className="cursor-pointer p-4">
              Home
            </a>          
          </motion.li>
          <motion.li variants={itemNav} className=" text-white dark:text-purple-900">
            <a href="#about" className="cursor-pointer p-4">
              About
            </a>          
          </motion.li>
          <motion.li variants={itemNav} className=" text-white dark:text-purple-900">
            <a href="#projects" className="cursor-pointer p-4">
              Projects
            </a>
          </motion.li>
          <motion.li variants={itemNav} className=" text-white dark:text-purple-900">
            <a href="#contact" className="cursor-pointer p-4">
              Contact
            </a>
          </motion.li>
          <motion.li variants={itemNav}>
            <Button title='Resume' />
          </motion.li>
        </ul>
      </motion.header>
    
    </>
  )
}