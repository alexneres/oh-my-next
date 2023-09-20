import { HTMLAttributes } from 'react'
import { cn } from '@/utils'

type FooterProps = HTMLAttributes<HTMLElement>

export default function Footer({ className }: FooterProps) {
  return <footer className={cn('', className)}>Footer</footer>
}
