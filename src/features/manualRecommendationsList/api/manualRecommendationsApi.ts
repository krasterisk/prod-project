import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getManualRecommendationsList: build.query({
            query: () => ({
                url: '/manuals/recommendations'
            })
        })
    })
})

export const useManualRecommendationsList = recommendationsApi.useGetManualRecommendationsListQuery
