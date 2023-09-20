import { HTMLAttributes } from 'react'
import { cn } from '@/utils'

type ExampleProps = HTMLAttributes<HTMLElement>

export default function Example({ className }: ExampleProps) {
  return <div className={cn('', className)}>Example</div>
}
