'use client'

import { createContext, type Context } from 'react'

export interface RowContextState {
  gutter?: [number, number]
}

const RowContext: Context<RowContextState> = createContext({})

export default RowContext
