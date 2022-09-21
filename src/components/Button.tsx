import { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  href?: string;
  onClick?: () => void;
  target?: string;
}

export function Button({ title, href, onClick, target, ...rest }: ButtonProps) {
  return (
    <a href={href} onClick={onClick} target={target} className="cursor-pointer flex items-center space-x-2 px-4 py-2 border-2 font-medium bg-purple-600 rounded-xl shadow-md text-sm text-purple-900 border-purple-600 hover:bg-transparent hover:text-purple-600 transition-all duration-450 ease-linear dark:bg-purple-900 dark:text-white dark:border-purple-900 dark:hover:text-purple-900 dark:hover:bg-transparent" {...rest}>
      <span>{title}</span>
    </a>
  )
}