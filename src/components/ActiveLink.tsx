import { ReactNode } from 'react'
import { motion } from "framer-motion";

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const itemNav = {
    hidden: { x: 100, opacity: 0, rotate: 90 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 90,
      transition: {
        delay: 1.1,
      },
    },
  }
  
  return (
    <li {...rest}>
      <a href={href} className={"cursor-pointer p-4 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-400 ease-out"} >
        {children}
      </a>          
    </li>
  )
}