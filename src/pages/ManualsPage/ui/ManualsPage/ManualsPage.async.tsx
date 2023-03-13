import { lazy } from 'react'

export const ManualsPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ManualsPage')) }, 1500)
}))
