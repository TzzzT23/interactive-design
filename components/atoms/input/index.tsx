'use client'

import { forwardRef, type ForwardedRef } from 'react'
import cn from 'classnames'

import type { InputProps } from './interface'
import styles from './input.module.scss'

declare module 'react' {
  function forwardRef<T, P = unknown>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null
}

const InputInner = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    id,
    name,
    label,
    autoComplete,
    className,
    placeholder,
    error = undefined,
    type,
    onBlur,
    onFocus,
    ...restProps
  } = props

  return (
    <div className={cn(styles['input'], className)}>
      {label && <label htmlFor={id || label}>{label}</label>}
      <div
        className={cn(
          styles['input__wrapper'],
          error?.message ? styles['input__wrapper--error'] : ''
        )}
      >
        <input
          id={id || label}
          name={name}
          ref={ref}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          {...restProps}
        />
        {error?.message && (
          <span className={styles['input--error']}>{error?.message}</span>
        )}
      </div>
    </div>
  )
}

const Input = forwardRef(InputInner)

InputInner.defaultProps = {
  id: '',
  label: '',
  autoComplete: 'off',
  className: '',
  placeholder: '',
  type: 'text',
}

export default Input
