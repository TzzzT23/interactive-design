import type { HTMLAttributes } from 'react'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string
  name: string
  label?: string
  autoComplete?: string
  className?: string
  placeholder?: string
  error?: { message?: string }
  type?: 'text' | 'number' | 'password'
  defaultValue?: string | number
  onFocus?: () => void
  onBlur?: () => void
}
