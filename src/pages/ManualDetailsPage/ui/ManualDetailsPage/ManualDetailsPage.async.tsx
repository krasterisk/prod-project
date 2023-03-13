import { lazy } from 'react'

export const ManualDetailsPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ManualDetailsPage')) }, 1500)
}))
