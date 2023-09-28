import { rtkApi } from '@/shared/api/rtkApi'
import { Endpoint } from '../model/types/endpoints'

const endpointsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEndpoints: build.query<Endpoint[], null>({
      query: () => ({
        url: '/endpoints'
      })
    })
  })
})

export const useEndpoints = endpointsApi.useGetEndpointsQuery
