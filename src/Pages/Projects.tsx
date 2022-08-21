import { Project } from "../components/Project";
import { Title } from "../components/Title";

export function Projects() {
  return (
    <div className="flex flex-col min-h-screen max-auto">
      <section className="mx-20 my-10 space-y-10">
        <Title title="Projects" />

        <Project
          image="./pokedex-photo.png"
          title="Pokedex Project"
          subtitle="Aplicação com informações detalhadas de todos os pokemons do universo pokemon. Aplicação responsiva desenvolvido para web consumindo uma API externa."
          tech="Typescript"
          linkVisit="https://pokedex-project-reactjs.vercel.app/"
          linkGithub="https://github.com/douglassantiagos/pokedex_project_reactjs"
        />

        <Project
          image="./ignews-photo.png"
          title="Ignews"
          subtitle="Aplicação com informações detalhadas de todos os pokemons do universo pokemon. Aplicação responsiva desenvolvido para web consumindo uma API externa."
          tech="Typescript"
          linkVisit="https://ignews-swart-mu.vercel.app/"
          linkGithub="https://github.com/douglassantiagos/Ignews"
        />
      </section>
    </div>
  )
}