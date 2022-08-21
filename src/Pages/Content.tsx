import { About } from "./About";
import { Projects } from "./Projects";

export function Content() {
  return (
    <div className="flex flex-col m-auto min-h-screen max-w-7xl shadow-xl">
      <div className="flex m-auto min-h-screen">
        <section className="flex flex-col items-center justify-center w-full">       
          <h1 className="text-2xl text-white mt-2">Hi, I'm</h1>
          <h1 className="text-6xl font-bold mt-2">DOUGLAS</h1>
          <h1 className="text-6xl self-end font-bold">SANTIAGO</h1>
          <h1 className="text-xl text-white self-end mt-2">Front-end developer</h1>
        </section>

        <section className="flex flex-col items-center justify-center m-auto w-full">
          <img className="w-full rounded-b-full" src="./avatar1.png" />
        </section>        
      </div>

      <About />
      <Projects />
    </div>  
  )
}