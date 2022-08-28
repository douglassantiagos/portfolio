import { ButtonIcon } from "./ButtonIcon";
import { Title } from "../components/Title";

interface ProjectProps {
  image: string;
  title: string;
  subtitle: string;
  tech_pri: string;
  tech_sec: string;
  tech_third: string;
  tech_fourth: string;
  tech_fifth: string;
  tech_sixth?: string;
  linkVisit: string;
  linkGithub: string;
}

export function Project({ 
  image, 
  title, 
  subtitle, 
  tech_pri, 
  tech_sec, 
  tech_third, 
  tech_fourth, 
  tech_fifth,
  tech_sixth, 
  linkVisit, 
  linkGithub 
}: ProjectProps) {
  return (
    <div className="bg-purple-900 flex flex-row min-h-min" >
      <img src={image} className="w-1/2 rounded-xl" />

      <div className="m-6 space-y-5">
        <h1 className="text-2xl font-bold">
          {title}
        </h1>
        <p className="font-Roboto text-lg text-gray-400">
          {subtitle}
        </p>
        <ul className="flex font-Roboto text-gray-400 text-sm space-x-5 ">
          <li>{tech_pri}</li>
          <li>{tech_sec}</li>
          <li>{tech_third}</li>
          <li>{tech_fourth}</li>
          <li>{tech_fifth}</li>
          <li>{tech_sixth}</li>
        </ul>
        <div className="flex space-x-5">
          <ButtonIcon title='Visit' href={linkVisit} />
          <ButtonIcon title='GitHub' href={linkGithub} />
        </div>
      </div>
    </div>
  )
}
