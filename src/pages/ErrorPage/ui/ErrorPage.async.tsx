import { lazy } from 'react'

export const ErrorPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ErrorPage')) }, 1500)
}))
