import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  icon?: ReactNode
  variant?: 'yellow' | 'white' | 'dark'
}
