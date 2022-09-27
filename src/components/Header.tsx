import { useState } from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";
import { List, Moon, Sun } from "phosphor-react";

import { Button } from "./Button";
import { Logo } from "./Logo";
import { useTheme } from "../hooks/useTheme";
import { useScrollPosition } from "../hooks/useScrollPosition";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { theme, setTheme } = useTheme();
  const scrollPosition = useScrollPosition();

  const handleOpenDrawer = () => {
    setIsOpen(isOpen => !isOpen)   
  }

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
      <nav className="min-md:hidden w-full m-auto flex flex-col item-center justify-end mt-6 space-y-5">
        <section className='flex items-center justify-end w-full space-x-5 pr-7 sm:pr-3 '>
          <Button title='Resume' href={'resume.pdf'} />

          <button className="mr-8 sm:mr-4 h-min m-auto p-2" onClick={handleOpenDrawer}>
            <List size={32} />
          </button>
        </section>

        <div className={isOpen ? "block max-w-full bg-slate-800 dark:bg-transparent shadow-md dark:border dark:border-purple-900 rounded-xl space-y-5 p-4 mx-10 sm:mx-6" : "hidden"}>         
          <ul>
            <li>
              <a href="#Home" className="block py-1 pr-4 pl-3 text-purple-600 hover:text-white dark:hover:text-white hover:bg-purple-900/50 dark:hover:bg-orange-600/40 dark:text-purple-900 rounded">Home</a>
            </li>
            <li>
              <a href="#about" className="block py-1 pr-4 pl-3 text-purple-600 hover:text-white dark:hover:text-white hover:bg-purple-900/50 dark:hover:bg-orange-600/40 dark:text-purple-900 rounded">About</a>
            </li>
            <li>
              <a href="#projects" className="block py-1 pr-4 pl-3 text-purple-600 hover:text-white dark:hover:text-white hover:bg-purple-900/50 dark:hover:bg-orange-600/40 dark:text-purple-900 rounded">Projects</a>
            </li>
            <li>
              <a href="#contact" className="block py-1 pr-4 pl-3 text-purple-600 hover:text-white dark:hover:text-white hover:bg-purple-900/50 dark:hover:bg-orange-600/40 dark:text-purple-900 rounded">Contact</a>
            </li>
          </ul>

          <li className="block w-full h-[0.5px] m-auto bg-purple-900"></li>

          <section className='flex items-center justify-between'>
            <ul className="flex items-center space-x-5 pl-3">          
              <li>
                <a href="https://github.com/douglassantiagos" target="_blank">
                  <abbr title="GitHub">
                    <FiGithub 
                      size={20} 
                      className={scrollPosition > 375 && scrollPosition < 2226 ? "cursor-pointer text-white dark:text-orange-400 hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" : "cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900"} 
                    />
                  </abbr>
                </a>          
              </li>
              <li>
                <a href="https://www.linkedin.com/in/douglas-santiago-607838192/" target="_blank">
                  <abbr title="Linkedin">
                    <FiLinkedin 
                      size={20} 
                      className={scrollPosition > 375 && scrollPosition < 2226 ?  "cursor-pointer text-white dark:text-orange-400 hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" : "cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900"} 
                    />
                  </abbr>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/osantiagods/" target="_blank">
                  <abbr title="Instagram">
                    <FiInstagram
                      size={20} 
                      className={scrollPosition > 375 && scrollPosition < 2226 ? "cursor-pointer text-white dark:text-orange-400 hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" : "cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900"} 
                    />
                  </abbr>
                </a>
              </li>              
            </ul>

            { theme === "light" ? (
              <button
                type="button"
                className="border-2 rounded-full p-2 "
                onClick={() => setTheme("dark")}
              >
                <Moon weight="fill" size={20} color={'white'} className="" />
              </button>
            ) : (
              <button
                type="button"
                className="bg-transparent border-2 border-yellow rounded-full p-2 "
                onClick={() => setTheme("light")}
              >
                <Sun weight="fill" size={20} color={'yellow'} className="" />
              </button>
            )}

          </section>
        </div>
      </nav>

      <Logo />       

      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="md:hidden fixed top-[50vh] left-40 2xl:left-24 lg:left-14"
      >
        <ul className="space-y-5">          
          <motion.li variants={item}>
            <a href="https://github.com/douglassantiagos" target="_blank">
              <abbr title="GitHub">
                <FiGithub 
                  size={20} 
                  className={scrollPosition > 375 && scrollPosition < 2226 ? "cursor-pointer text-white dark:text-orange-400 hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" : "cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900"} 
                />
              </abbr>
            </a>          
          </motion.li>
          <motion.li variants={item}>
            <a href="https://www.linkedin.com/in/douglas-santiago-607838192/" target="_blank">
              <abbr title="Linkedin">
                <FiLinkedin 
                  size={20} 
                  className={scrollPosition > 375 && scrollPosition < 2226 ?  "cursor-pointer text-white dark:text-orange-400 hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" : "cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900"} 
                />
              </abbr>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://www.instagram.com/osantiagods/" target="_blank">
              <abbr title="Instagram">
                <FiInstagram
                  size={20} 
                  className={scrollPosition > 375 && scrollPosition < 2226 ? "cursor-pointer text-white dark:text-orange-400 hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900" : "cursor-pointer text-white hover:animate-bounce hover:text-purple-600 dark:hover:text-purple-900"} 
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
        className="md:hidden fixed flex flex-col items-center right-44 2xl:right-28 lg:right-28"
      >
        { theme === "light" ? (
          <button
            type="button"
            className="fixed border-2 rounded-full p-2 top-10 hover:scale-105 transition-all duration-450 ease-linear"
            onClick={() => setTheme("dark")}
          >
            <Moon weight="fill" size={24} color={'white'} className="" />
          </button>
        ) : (
          <button
            type="button"
            className="fixed bg-transparent border-2 border-yellow rounded-full p-2 top-10 hover:scale-105 transition-all duration-450 ease-linear"
            onClick={() => setTheme("light")}
          >
            <Sun weight="fill" size={24} color={'yellow'} className="" />
          </button>
        )}

        <ul className="fixed flex flex-col space-y-24 items-center top-[20vh]">
          <a href="#home" className={scrollPosition < 600 ? 'text-white text-sm transition-all duration-450 ease-linear dark:text-white' : 'text-sm rotate-90 hover:text-white transition-all duration-450 ease-linear'}>
            Home
          </a>
          <a href="#about" className={scrollPosition >= 600 && scrollPosition < 1400 ? 'text-white text-sm transition-all duration-450 ease-linear dark:text-orange-400' : 'text-sm rotate-90 hover:text-white transition-all duration-450 ease-linear'}>
            About
          </a>
          <a href="#projects" className={scrollPosition >= 1400 && scrollPosition < 2300 ? 'text-white text-sm transition-all duration-450 ease-linear dark:text-orange-400' : 'text-sm rotate-90 hover:text-white transition-all duration-450 ease-linear'}>
            Projects            
          </a>
          <a href="#contact" className={scrollPosition >= 2300 ? 'text-white text-sm transition-all duration-450 ease-linear dark:text-white' : 'text-sm rotate-90 hover:text-white transition-all duration-450 ease-linear'}>
            Contact
          </a>

          <motion.li variants={itemNav}>
            <Button title='Resume' href={'resume.pdf'} target="_blank" />
          </motion.li>
        </ul>
      </motion.header>
    
    </>
  )
}