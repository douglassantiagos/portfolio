import { motion, Variants } from "framer-motion";

import { Project } from "../components/Project";
import { Title } from "../components/Title";

export function Projects() {
  const Variants: Variants = {
    offscreen: {
      y: 900,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }
    }
  };

  return (
    <motion.div 
      id="projects" 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} 
      className="flex flex-col min-h-screen max-auto"
    >
      <motion.section variants={Variants} className="mx-20 my-10">
        <Title title="Projects I've Built" />

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
          className="flex flex-row-reverse space-x-4 shadow-xl rounded-xl mt-20"
        />

        {/* <Project
          image="./jobscalc-photo.png"
          title="JobsCalc"
          subtitle="O JobsCalc é uma aplicação de estimativa de cálculo para projetos freelancer, onde é possível cadastrar e excluir jobs (projetos), obtendo uma estimativa de custo de cada job. Além disso, é possível traçar o valor da hora da pessoa que estará usando o sistema."
          tech_pri="Javascript"
          tech_sec="NodeJS"
          tech_third="EJS"
          tech_fourth="Express"
          tech_fifth="SQLite"
          tech_sixth="HTML/CSS"
          linkGithub="https://github.com/douglassantiagos/Maratona-JobsCalc"
          className="flex flex-row space-x-4 shadow-xl rounded-xl mt-20"
        /> */}

        {/* <Project
          image="./layout-worldtrip.png"
          title="WorldTrip"
          subtitle="Desafio com objetivo de desenvolver uma landing page web responsiva contando a história de cada continente com tecnologias atuais como react e next.js"
          tech_pri="Typescript"
          tech_sec="Next.js"
          tech_third="React"
          tech_fourth="ChakraUI"
          tech_fifth="Swiper"
          linkVisit="https://worldtrip-phi-eight.vercel.app/"
          linkGithub="https://github.com/douglassantiagos/reactjs-desafio07-interface-com-chakra-ui"
          className="flex flex-row-reverse space-x-4 shadow-xl rounded-xl mt-20"
        /> */}
      </motion.section>
    </motion.div>
  )
}