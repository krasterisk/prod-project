import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { lazy, Suspense } from 'react'
import { ManualRatingProps } from './ManualRating'

const ManualRatingLazy = lazy(async () => await import('./ManualRating'))

export const ManualRatingAsync = (props: ManualRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={120}/>}>
            <ManualRatingLazy {...props}/>
        </Suspense>
    )
}
