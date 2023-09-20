import { HTMLAttributes } from 'react'
import { cn } from '@/utils'

type HeaderProps = HTMLAttributes<HTMLElement>

export default function Header({ className }: HeaderProps) {
  return <header className={cn('', className)}>Header</header>
}
