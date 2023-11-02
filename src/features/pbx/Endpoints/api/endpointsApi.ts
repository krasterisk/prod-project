import { rtkApi } from '@/shared/api/rtkApi'
import { Endpoint } from '@/entities/pbx'

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
    //   async onQueryStarted (arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data: createdEndpoint } = await queryFulfilled
    //       dispatch(
    //         endpointsApi.util.upsertQueryData('getEndpoints', null, createdEndpoint)
    //       )
    //     } catch {}
    //   }
    // }),
    getEndpoint: build.query<Endpoint, number>({
      query: (id) => ({
        url: `/endpoints/${id}`
      })
    })
  })
})

export const useEndpoints = endpointsApi.useGetEndpointsQuery
export const useSetEndpoints = endpointsApi.useSetEndpointsMutation
