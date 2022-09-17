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
    <div className="flex flex-col mt-10"> 
      { Object.entries(data).splice(0, amountProjects).map(([key, value]) => {
        return (
          <section key={key} className="flex flex-row lg:flex-col lg:items-center lg:max-w-[35.3rem] space-x-4 my-5 lg:mt-10 sm:shadow-lg rounded-xl border-[1px] border-black dark:bg-white dark:border-orange-300">
            <a href={value.linkVisit} target="_blank" className="flex flex-col shadow-md cursor-pointer hover:bg-transparent">
              <img src={value.image} alt="project's image" className="max-h-[316px] w-full lg:w-[100vw] sm:w-[100vw] rounded-xl lg:rounded-b-none" />
              <span className="md:hidden cursor-pointer bg-purple-600/80 px-[280px] py-[158px] -mt-[316px] hover:bg-transparent transition-all duration-450 ease-linear rounded-xl lg:rounded-b-none dark:bg-orange-400/80 dark:hover:bg-transparent"></span>
            </a>

            <div className="flex flex-wrap flex-col space-y-5 w-full sm:max-w-[22rem] m-auto px-5 sm:px-0 lg:my-5">
              <h1 className="text-2xl font-bold dark:text-orange-400">
                {value.title}
              </h1>
              <p className="font-Roboto text-base text-gray-400 dark:text-gray-600">
                {value.description}
              </p>
              <ul className="flex font-Roboto text-gray-400 text-sm space-x-5 sm:space-x-3 dark:text-purple-900">
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
