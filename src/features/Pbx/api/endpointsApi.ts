import { rtkApi } from '@/shared/api/rtkApi'
import { Endpoint } from '@/entities/Pbx'

export const endpointsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEndpoints: build.query<Endpoint[], null>({
      query: () => ({
        url: '/endpoints'
      })
    }),
    setEndpoints: build.mutation<Endpoint[], Endpoint[]>({
      query: (arg) => ({
        url: '/endpoints',
        method: 'POST',
        body: arg
      })
    }),
    updateEndpoint: build.mutation<Endpoint, Endpoint>({
      query: (patch) => ({
        url: '/endpoints',
        method: 'PATCH',
        body: patch
      })
      // onQueryStarted ({ id, ...patch }, { dispatch, queryFulfilled }) {
      //   if (id) {
      //     console.log(patch)
      //     const patchResult = dispatch(
      //       endpointsApi.util.updateQueryData('getEndpoints', null, (draft) => {
      //         Object.assign(draft, patch)
      //       })
      //     )
      //     queryFulfilled.catch(patchResult.undo)
      //   }
      // }
    }),
    getEndpoint: build.query<Endpoint, string>({
      query: (id) => ({
        url: `/endpoints/${id}`
      })
    })
  })
})

export const useEndpoints = endpointsApi.useGetEndpointsQuery
export const useSetEndpoints = endpointsApi.useSetEndpointsMutation
export const useEndpoint = endpointsApi.useGetEndpointQuery
export const useUpdateEndpoint = endpointsApi.useUpdateEndpointMutation
