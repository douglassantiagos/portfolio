import { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  href?: string;
}

export function Button({ title, href }: ButtonProps) {
  return (
    <a href={href} className="cursor-pointer flex items-center space-x-2 px-4 py-2 border-2 rounded-xl border-purple-600 hover:bg-purple-600/10 transition-all duration-450 ease-linear">
      <span>{title}</span>
    </a>
  )
}