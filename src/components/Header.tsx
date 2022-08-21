import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Logo } from "./Logo";

export function Header() {
  return (
    <>
      <Logo />       

      <div className="fixed top-1/2 left-40">
        <ul className="space-y-5">          
          <li>
            <a href="https://github.com/douglassantiagos">
              <FiGithub 
                size={22} 
                className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600" 
              />
            </a>          
          </li>
          <li>
            <a href="https://www.linkedin.com/in/douglas-santiago-607838192/">
              <FiLinkedin 
                size={22} 
                className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600" 
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/osantiagods/">
              <FiInstagram
                size={22} 
                className="cursor-pointer text-white hover:animate-bounce hover:text-purple-600" 
              />
            </a>
          </li>
          {/* <li className="block w-1 h-60 m-auto bg-white"></li> */}
        </ul>
      </div>

      <div className="fixed top-1/3 right-40">
        <ul className="flex flex-col space-y-24 items-center">
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200">
            <a className="cursor-pointer p-4">
              About
            </a>          
          </li>
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200">
            <a className="cursor-pointer p-4">
              Projects
            </a>
          </li>
          <li className="rotate-90 text-white hover:text-purple-600 hover:rotate-0 transition-all duration-200">
            <a className="cursor-pointer p-4">
              Contact
            </a>
          </li>
          <li className="rotate-90 hover:rotate-0 transition-all duration-200">
            <a className="cursor-pointer border-2 px-4 py-2 border-purple-600 rounded-xl text-purple-600 hover:bg-purple-600/10 transition-all duration-450 ease-linear">
              Resume
            </a>
          </li>
        </ul>
      </div>
    
    </>
  )
}