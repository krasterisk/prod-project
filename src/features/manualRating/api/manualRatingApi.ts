import { rtkApi } from '@/shared/api/rtkApi'
import { Rating } from '@/entities/Rating'

interface GetManualRatingArg {
    userId: number
    postId: number
}

interface SetManualRatingArg {
    userId: number
    postId: number
    rate: number
    feedback?: string
}

const manualRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getManualRating: build.query<Rating[], GetManualRatingArg>({
            query: ({ userId, postId }) => ({
                url: '/rating',
                params: {
                    userId,
                    postId
                }
            })
        }),
        setManualRating: build.mutation<void | never, SetManualRatingArg>({
            query: (arg) => ({
                url: '/rating',
                method: 'POST',
                body: arg
            })
        })
    })
})

export const useGetManualRating = manualRatingApi.useGetManualRatingQuery
export const useSetManualRating = manualRatingApi.useSetManualRatingMutation
