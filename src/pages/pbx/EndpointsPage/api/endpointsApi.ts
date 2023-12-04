import { rtkApi } from '@/shared/api/rtkApi'
import { Endpoint } from '@/entities/Pbx'
import { createEntityAdapter } from '@reduxjs/toolkit'

const endpointsAdapter = createEntityAdapter()

const initialState = endpointsAdapter.getInitialState()

export const endpointsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEndpoints: build.query<Endpoint[], null>({
      query: () => ({
        url: '/endpoints',
        transformResponse: (responseData: Endpoint[]) => {
          return endpointsAdapter.setAll(initialState, responseData)
        }
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
export const useSetEndpoints = endpointsApi.useSetEndpointsMutation
export const useEndpoint = endpointsApi.useGetEndpointQuery
export const useUpdateEndpoint = endpointsApi.useUpdateEndpointMutation
export const useDeleteEndpoint = endpointsApi.useDeleteEndpointMutation
