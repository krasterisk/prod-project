import { rtkApi } from '@/shared/api/rtkApi'
import { Manual } from '@/entities/Manual'

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getManualRecommendationsList: build.query<Manual[], string>({
            query: () => ({
                url: '/manuals/recommendations'
            })
        })
    })
})

export const useManualRecommendationsList = recommendationsApi.useGetManualRecommendationsListQuery
