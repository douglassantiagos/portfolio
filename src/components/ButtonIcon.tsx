import { ReactNode } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ButtonProps {
  title: ReactNode;
  href: string;
}

export function ButtonIcon({ title, href }: ButtonProps) {
  return (
    <a href={href} target="_blank" className="cursor-pointer flex items-center max-w-min rounded-lg hover:text-white transition-all duration-450 ease-linear dark:text-orange-400 dark:hover:text-purple-900 ">
      {title == 'Visit' ? <FiExternalLink size={20} /> : <FiGithub size={20} />}
    </a>
  )
}