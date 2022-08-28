import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  return (
    <>
      <Logo />       

      <div className="fixed top-1/2 left-40">
        <ul className="space-y-5">          
          <li>
            <a href="https://github.com/douglassantiagos" target="_blank">
              <abbr title="GitHub">
                <FiGithub 
                  size={22} 
                  className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600" 
                />
              </abbr>
            </a>          
          </li>
          <li>
            <a href="https://www.linkedin.com/in/douglas-santiago-607838192/" target="_blank">
              <abbr title="Linkedin">
                <FiLinkedin 
                  size={22} 
                  className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600" 
                />
              </abbr>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/osantiagods/" target="_blank">
              <abbr title="Instagram">
                <FiInstagram
                  size={22} 
                  className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600" 
                />
              </abbr>
            </a>
          </li>
          {/* <li className="block w-1 h-60 m-auto bg-white"></li> */}
        </ul>
      </div>

      <div id="nav" className="fixed top-1/4 right-40">
        <ul className="flex flex-col space-y-24 items-center">
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200 hover:font-bold active:hover:text-purple-300 active:hover:rotate-0">
            <a href="#home" className="cursor-pointer p-4">
              Home
            </a>          
          </li>
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200 hover:font-bold active:hover:text-purple-300 active:hover:rotate-0">
            <a href="#about" className="cursor-pointer p-4">
              About
            </a>          
          </li>
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200 hover:font-bold">
            <a href="#projects" className="cursor-pointer p-4">
              Projects
            </a>
          </li>
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200 hover:font-bold">
            <a href="#contact" className="cursor-pointer p-4">
              Contact
            </a>
          </li>
          <li className="rotate-90 hover:rotate-0 transition-all duration-200">
            <Button title='Resume' />
          </li>
        </ul>
      </div>
    
    </>
  )
}