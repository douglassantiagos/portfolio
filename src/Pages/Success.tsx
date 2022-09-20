import { Check, CheckCircle } from "phosphor-react";

export function Success() {
  return (
    <div className="bg-[#171522]">
      <div id="success" className="flex flex-col items-center justify-center h-[90vh] w-auto">
        <section className="bg-purple-600 rounded-full p-1">
          <Check size={40} className="text-white" />
        </section>
        
        <span className="text-2xl text-center mt-[1.25rem]">
          Thanks! <br />
          Your message was sent successfully
        </span>
        <span className="text-[1.2rem] align-middle text-[#FEFCFF] my-4 ">      
          I'll get back to you soon.
        </span>

        <button       
          className="cursor-pointer flex items-center space-x-2 px-4 py-2 border-2 bg-purple-600 rounded-xl shadow-md text-sm text-purple-900 border-purple-600 hover:bg-transparent hover:text-purple-600 transition-all duration-450 ease-linear dark:bg-purple-900 dark:text-white dark:border-purple-900 dark:hover:text-purple-900 dark:hover:bg-transparent">
          <a href="/" className="" >Back To Portfolio</a>
        </button>
      </div>
    </div>
  )
}