import { ReactNode } from 'react'

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) { 
  return (
    <li {...rest}>
      <a href={href}>
        {children}
      </a>          
    </li>
  )
}