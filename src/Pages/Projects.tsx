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
          tech_pri="Typescript"
          tech_sec="React"
          tech_third="ChakraUI"
          tech_fourth="Axios"
          tech_fifth="Pokeapi"
          linkVisit="https://pokedex-project-reactjs.vercel.app/"
          linkGithub="https://github.com/douglassantiagos/pokedex_project_reactjs"
        />

        <Project
          image="./ignews-photo.png"
          title="Ignews"
          subtitle="O ignews é um blog de conteúdos com status de assinatura.
          O blog possui um sistema de compra integrado com STRIPE. Ao realizar o pagamento, a inscrição estará ativa para acesso completo do blog. 
          Caso contrário, o usuário terá acesso limitado aos conteúdos."
          tech_pri="Typescript"
          tech_sec="React"
          tech_third="Next.js"
          tech_fourth="Prismic"
          tech_fifth="Fauna-db"
          tech_sixth="Stripe"
          linkVisit="https://ignews-swart-mu.vercel.app/"
          linkGithub="https://github.com/douglassantiagos/Ignews"
        />

        <Project
          image="./jobscalc-photo.png"
          title="JobsCalc"
          subtitle="O JobsCalc é uma aplicação de estimativa de cálculo para projetos freelancer, onde é possível cadastrar e excluir jobs (projetos), obtendo uma estimativa de custo de cada job. Além disso, é possível traçar o valor da hora da pessoa que estará usando o sistema."
          tech_pri="Javascript"
          tech_sec="NodeJS"
          tech_third="EJS"
          tech_fourth="Express"
          tech_fifth="SQLite"
          tech_sixth="HTML/CSS"
          linkVisit="https://jobscalc-beta.vercel.app/"
          linkGithub="https://github.com/douglassantiagos/Maratona-JobsCalc"
        />
      </section>
    </div>
  )
}