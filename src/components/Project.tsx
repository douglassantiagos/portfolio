import { ButtonIcon } from "./ButtonIcon";

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
  linkGithub,
  ...rest
}: ProjectProps) {
  return (
    <div className="flex flex-row space-x-4 shadow-xl rounded-xl mt-10" {...rest}>      
      <a href={linkVisit} target="_blank" className="flex flex-col">
        <img src={image} className="max-h-[316px] w-full rounded-xl" />
        <span className="cursor-pointer bg-purple-600/80 px-[280px] py-[158px] -mt-[316px] hover:bg-transparent transition-all duration-450 ease-linear rounded-xl dark:bg-white/80 dark:hover:bg-transparent"></span>
      </a>

      <div className="space-y-5 w-full m-auto px-5">
        <h1 className="text-2xl font-bold dark:text-white">
          {title}
        </h1>
        <p className="font-Roboto text-lg text-gray-400 dark:text-purple-900">
          {subtitle}
        </p>
        <ul className="flex font-Roboto text-gray-400 text-sm space-x-5 dark:text-purple-900">
          <li>{tech_pri}</li>
          <li>{tech_sec}</li>
          <li>{tech_third}</li>
          <li>{tech_fourth}</li>
          <li>{tech_fifth}</li>
          <li>{tech_sixth}</li>
        </ul>
        <div className="flex space-x-5">
          { linkVisit ? (
            <>
              <ButtonIcon title='Visit' href={linkVisit} />
              <ButtonIcon title='GitHub' href={linkGithub} />            
            </>
            ) : (
              <ButtonIcon title='GitHub' href={linkGithub} />
            )          
          }
        </div>
      </div>
    </div>
  )
}
