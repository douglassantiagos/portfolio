import { useState, useEffect } from 'react'
import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";

interface ProjectProps {
  data: object;
}

export function Project({ data }: ProjectProps) {  
  const [amountProjects, setAmountProjects] = useState(2);
  let limitAmount = 2;  
  
  const handleShowMoreProjects = () => {
    setAmountProjects(limitAmount += 9)
  }  

  return (
    <div className="flex flex-col"> 
      { Object.entries(data).splice(0, amountProjects).map(([key, value]) => {
        return (
          <section key={key} className="flex flex-row space-x-4 shadow-xl my-5 rounded-xl border-r-4 border-purple-600 dark:bg-white dark:border-r-4 dark:border-orange-400">
            <a href={value.linkVisit} target="_blank" className="flex flex-col cursor-pointer hover:bg-transparent">
              <img src={value.image} alt="project's image" className="max-h-[316px] w-full rounded-xl" />
              <span className="cursor-pointer bg-purple-600/80 px-[280px] py-[158px] -mt-[316px] hover:bg-transparent transition-all duration-450 ease-linear rounded-xl dark:bg-orange-400/80 dark:hover:bg-transparent"></span>
            </a>

            <div className="space-y-5 w-full m-auto px-5">
              <h1 className="text-2xl font-bold dark:text-purple-900">
                {value.title}
              </h1>
              <p className="font-Roboto text-lg text-gray-400 dark:text-gray-400">
                {value.subtitle}
              </p>
              <ul className="flex font-Roboto text-gray-400 text-sm space-x-5 dark:text-purple-900">
                <li>{value.tech_pri}</li>
                <li>{value.tech_sec}</li>
                <li>{value.tech_third}</li>
                <li>{value.tech_fourth}</li>
                <li>{value.tech_fifth}</li>
                <li>{value.tech_sixth}</li>
              </ul>
              <div className="flex space-x-5">
                { value.linkVisit ? (
                  <>
                    <ButtonIcon title='Visit' href={value.linkVisit} />
                    <ButtonIcon title='GitHub' href={value.linkGithub} />            
                  </>
                  ) : (
                    <ButtonIcon title='GitHub' href={value.linkGithub} />
                  )          
                }
              </div>
            </div>                    
          </section>
        )
      })}

      { Object.entries(data).length > amountProjects && 
        <section className='flex items-center justify-center mt-8'>
          <Button title='Show More Projects' onClick={handleShowMoreProjects}  />
        </section>
      }
    </div>
  )
}
