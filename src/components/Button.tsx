import { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  href?: string;
  onClick?: () => void;
}

export function Button({ title, href, onClick, ...rest }: ButtonProps) {
  return (
    <a href={href} onClick={onClick} target="_blank" className="cursor-pointer flex items-center space-x-2 px-4 py-2 border-2 rounded-xl shadow-md text-purple-600 border-purple-600 hover:bg-purple-600/10 transition-all duration-450 ease-linear dark:border-purple-900 dark:text-purple-900 dark:hover:bg-purple-900/20" {...rest}>
      <span>{title}</span>
    </a>
  )
}