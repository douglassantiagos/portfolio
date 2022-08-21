import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3 } from "react-icons/si";
import { Title } from "../components/Title";

export function About() {
  return (
    <div className="flex flex-col items-start ml-44 justify-center min-h-screen max-w-2xl">
      <Title title="About Me" />

      <p className="font-Roboto text-lg text-gray-400 text-justify leading-8 mt-8">
        My name is Douglas Santiago. I'm front-end developer from Rio de Janeiro, Brazil.          
      </p>
      <p className="font-Roboto text-lg text-gray-400 text-justify leading-8 mt-2">
        I started my journey in technology in the year 2019 in college, but my interest in web development started back in 2021, when I 
        developed my first application call
        <a href="https://github.com/douglassantiagos/Maratona-JobsCalc" className="ml-2 group text-purple-600 transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-purple-600 to-purple-600 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-400 ease-out">
            JobsCalc
          </span>
        </a>. 
        Application created to manager freelancer jobs.
      </p>
      <p className="font-Roboto text-lg text-gray-400 text-justify leading-8 mt-2">
        Currently, I'm specializing in building awesome digital experience with current web development technologies.          
      </p>

      <ul className="flex space-x-5 mt-4">
        <li>
          <SiJavascript size={40} />
        </li>
        <li>
          <SiTypescript size={40} />
        </li>
        <li>
          <SiReact size={40} />
        </li>
        <li>
          <SiHtml5 size={40} />
        </li>
        <li>
          <SiCss3 size={40} />
        </li>
      </ul>
    </div>
  )
}