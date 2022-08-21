import { ReactElement, ReactNode, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  title: ReactNode;
  href: string;
}

export function Button({ title, href }: ButtonProps) {
  return (
    <a href={href} className="cursor-pointer flex items-center space-x-2 max-w-min px-4 py-2 border-2 rounded-xl border-purple-600 hover:bg-purple-600/10 transition-all duration-450 ease-linear">
      {title == 'Visit' ? <FiExternalLink size={20} /> : <FiGithub size={20} />}
      <span>{title}</span>
    </a>
  )
}