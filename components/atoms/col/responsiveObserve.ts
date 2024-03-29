'use client'

import type { ColumnBreakpoints } from './interface'

export type Breakpoint = keyof ColumnBreakpoints
export type BreakpointMap = Record<Breakpoint, string>
export type ScreenMap = Partial<Record<Breakpoint, boolean>>
export type ScreenSizeMap = Partial<Record<Breakpoint, number>>

type SubscribeFunc = (screens: ScreenMap) => void

export const responsiveArray: Breakpoint[] = [
  'xxl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
  'xxs',
]

export const responsiveMap: BreakpointMap = {
  xxs: '(max-width: 360px)',
  xs: '(min-width: 360px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1366px)',
}

const subscribers = new Map<number, SubscribeFunc>()
let subUid = -1
let screens = {}

const responsiveObserve = {
  matchHandlers: {} as {
    [prop: string]: {
      mql: MediaQueryList
      listener:
        | ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown)
        | null
    }
  },
  dispatch(pointMap: ScreenMap) {
    screens = pointMap
    subscribers.forEach((func) => func(screens))
    return subscribers.size >= 1
  },
  subscribe(func: SubscribeFunc): number {
    if (!subscribers.size) this.register()
    subUid += 1
    subscribers.set(subUid, func)
    func(screens)
    return subUid
  },
  unsubscribe(token: number) {
    subscribers.delete(token)
    if (!subscribers.size) this.unregister()
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen: string) => {
      const matchMediaQuery = responsiveMap[screen as Breakpoint]
      const handler = this.matchHandlers[matchMediaQuery]
      handler?.mql.removeListener(handler?.listener)
    })
    subscribers.clear()
  },
  register() {
    Object.keys(responsiveMap).forEach((screen: string) => {
      const matchMediaQuery = responsiveMap[screen as Breakpoint]
      const listener = ({ matches }: { matches: boolean }) => {
        this.dispatch({
          ...screens,
          [screen]: matches,
        })
      }
      const mql = window.matchMedia(matchMediaQuery)
      mql.addListener(listener)
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener,
      }

      listener(mql)
    })
  },
}

export default responsiveObserve
