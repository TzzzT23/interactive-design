'use client'

import { type CSSProperties, useContext, forwardRef } from 'react'
import { checkProps } from './helper'
import RowContext from '../row/RowContext'
import cn from 'classnames'

import type { ColProps } from './interface'

const Col = forwardRef<HTMLDivElement, ColProps>(function Col(
  {
    children,
    className,
    style,
    xxs,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    span,
    flex,
    ...restProps
  },
  ref
) {
  const { gutter } = useContext(RowContext)

  const handleFlex = (): CSSProperties => {
    if (!flex) return {}
    if (Number(flex)) return { flex: `${flex} ${flex} auto` }
    if (flex === 'auto') return { flex: '1 1 auto' }
    if (flex === 'none') return { flex: '0 0 auto', minWidth: '0' }
    if (typeof flex === 'string' && flex?.split(' ').length === 3) {
      return { flex }
    }
    return { flex: `0 0 ${flex}` }
  }

  const colStyle: CSSProperties = {}

  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2
    colStyle.paddingInlineEnd = horizontalGutter
    colStyle.paddingInlineStart = horizontalGutter
  }

  if (gutter && gutter[1] > 0) {
    const verticalGutter = gutter[1] / 2
    colStyle.paddingBlockStart = verticalGutter
    colStyle.paddingBlockEnd = verticalGutter
  }

  return (
    <div
      ref={ref}
      {...restProps}
      className={cn(
        checkProps({ xxs, xs, sm, md, lg, xl, xxl, span }),
        className
      )}
      style={{ ...style, ...handleFlex(), ...colStyle }}
    >
      {children}
    </div>
  )
})

export default Col
