import Col from '../col'
import cn from 'classnames'

import type { ButtonProps } from './interface'
import styles from './button.module.scss'

export default function Button({
  children,
  onClick = undefined,
  className = '',
  icon = undefined,
  variant = 'yellow',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(className, styles['button'], `bg-color-${variant}`)}
    >
      <Col flex='none'>{children}</Col>
      <Col flex='none' className='d-flex' data-selector='icon'>
        {icon}
      </Col>
    </button>
  )
}
