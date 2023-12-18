import { rtkApi } from '@/shared/api/rtkApi'
import { Endpoint } from '@/entities/Pbx'

// const endpointsAdapter = createEntityAdapter<Endpoint>()

// const initialState = endpointsAdapter.getInitialState()

interface QueryArgs {
  page: number
  limit: number
  sort?: string
  order?: string
  group?: number
  search?: string
}

export const endpointsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEndpoints: build.query<Endpoint[], QueryArgs>({
      query: (args) => ({
        url: '/endpoints',
        params: args
        // transformResponse: (responseData: Endpoint[]) => {
        //   return endpointsAdapter.setAll(initialState, responseData)
        // }
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      // Refetch when the page arg changes
      forceRefetch ({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Endpoints', id } as const)),
              { type: 'Endpoints', id: 'LIST' }
            ]
          : [{ type: 'Endpoints', id: 'LIST' }]
    }),
    getEndpointsAll: build.query<Endpoint[], null>({
      query: () => ({
        url: '/endpoints'
        // transformResponse: (responseData: Endpoint[]) => {
        //   return endpointsAdapter.setAll(initialState, responseData)
        // }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Endpoints', id } as const)),
              { type: 'Endpoints', id: 'LIST' }
            ]
          : [{ type: 'Endpoints', id: 'LIST' }]
    }),
    setEndpoints: build.mutation<Endpoint[], Endpoint[]>({
      query: (arg) => ({
        url: '/endpoints',
        method: 'POST',
        body: arg
      }),
      invalidatesTags: [{ type: 'Endpoints', id: 'LIST' }]
    }),
    getEndpoint: build.query<Endpoint, string>({
      query: (id) => `/endpoints/${id}`,
      providesTags: (result, error, id) => [{ type: 'Endpoints', id }]
    }),
    updateEndpoint: build.mutation<Endpoint, Pick<Endpoint, 'id'> & Partial<Endpoint>>({
      query: ({ id, ...patch }) => ({
        url: '/endpoints',
        method: 'PATCH',
        body: { id, ...patch }
      }),
      async onQueryStarted ({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          endpointsApi.util.updateQueryData('getEndpoint', id, (draft) => {
            Object.assign(draft, patch)
          })
        )
        queryFulfilled.catch(patchResult.undo)
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Endpoints', id }]
    }),
    deleteEndpoint: build.mutation<{ success: boolean, id: string }, string>({
      query (id) {
        return {
          url: `endpoints/${id}`,
          method: 'DELETE'
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Endpoints', id }]
    })
  })
})

export const useEndpoints = endpointsApi.useGetEndpointsQuery
export const useEndpointsAll = endpointsApi.useGetEndpointsAllQuery
export const useSetEndpoints = endpointsApi.useSetEndpointsMutation
export const useEndpoint = endpointsApi.useGetEndpointQuery
export const useUpdateEndpoint = endpointsApi.useUpdateEndpointMutation
export const useDeleteEndpoint = endpointsApi.useDeleteEndpointMutation

// export const selectEndpointResult = endpointsApi.endpoints.getEndpoints.select(null)

// const emptyEndpoints: Endpoint[] = []

// export const selectAllEndpoints = createSelector(
//   selectEndpointResult,
//   endpointsResult => endpointsResult?.data ?? emptyEndpoints
// )
//
// export const selectEndpointById = createSelector(
//   selectAllEndpoints,
//   (state: Endpoint, endpointId: string) => endpointId,
//   (endpoints, endpointId) => endpoints.find(endpoint => endpoint.id === endpointId)
// )
//
// export const sortEndpointByUserName = createSelector(
//   selectAllEndpoints,
//   (endpoints) => {
//     return endpoints.slice().sort((a, b) => {
//       return a.username.localeCompare(b.username)
//     })
//   }
// )
