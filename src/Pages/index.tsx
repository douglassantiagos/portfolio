import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Projects } from "./Projects";

export function Pages() {
  

  return (
    <div
      id="home"
      className="flex flex-col m-auto min-h-screen max-w-7xl"
    >
      <Home />
      <About />
      <Projects /> 
      <Contact />
    </div>  
  )
}