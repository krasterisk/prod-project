import { rtkApi } from '@/shared/api/rtkApi'

interface UpdateFeatureFlagsOptions {
  id: string
  designed: boolean
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.query<void | never, UpdateFeatureFlagsOptions>({
      query: ({ id, designed }) => ({
        url: '/users',
        method: 'PUT',
        body: {
          id,
          designed
        }
      })
    })
  })
})

export const updateFeatureFlagsMutations = featureFlagsApi.endpoints.updateFeatureFlags.initiate
