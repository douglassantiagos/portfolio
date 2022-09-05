import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Projects } from "./Projects";

export function Pages() {
  return (
    <div className="flex flex-col">
      <Home />
      <About />
      <Projects /> 
      <Contact />
    </div>  
  )
}