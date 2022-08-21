import { Button } from "../components/Button";
import { Title } from "../components/Title";

interface ProjectProps {
  image: string;
  title: string;
  subtitle: string;
  tech: string;
  linkVisit: string;
  linkGithub: string;
}

export function Project({ image, title, subtitle, tech, linkVisit, linkGithub }: ProjectProps) {
  return (
    <div className="bg-purple-900 flex flex-row min-h-min" >
      <img src={image} className="w-1/2" />

      <div className="m-10 space-y-5">
        <h1 className="text-2xl font-bold">
          {title}
        </h1>
        <p className="font-Roboto text-lg text-gray-400">
          {subtitle}
        </p>
        <ul className="flex font-Roboto text-gray-400 text-sm space-x-5 ">
          <li>{tech}</li>
        </ul>
        <div className="flex space-x-5">
          <Button title='Visit' href={linkVisit} />
          <Button title='GitHub' href={linkGithub} />
        </div>
      </div>
    </div>
  )
}
