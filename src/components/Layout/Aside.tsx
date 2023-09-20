import { HTMLAttributes } from 'react'
import { cn } from '@/utils'

type AsideProps = HTMLAttributes<HTMLElement>

export default function Aside({ className }: AsideProps) {
  return <aside className={cn('', className)}>Aside</aside>
}
