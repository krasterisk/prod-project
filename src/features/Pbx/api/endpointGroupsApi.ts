import { rtkApi } from '@/shared/api/rtkApi'
import { EndpointGroups } from '@/entities/Pbx'

export const endpointGroupsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEndpointGroups: build.query<EndpointGroups[], null>({
      query: () => ({
        url: '/endpoints-groups'
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'EndpointGroups', id } as const)),
              { type: 'EndpointGroups', id: 'LIST' }
            ]
          : [{ type: 'EndpointGroups', id: 'LIST' }]
    }),
    setEndpointGroups: build.mutation<EndpointGroups[], EndpointGroups[]>({
      query: (arg) => ({
        url: '/endpoints-groups',
        method: 'POST',
        body: arg
      }),
      invalidatesTags: [{ type: 'EndpointGroups', id: 'LIST' }]
    }),
    getEndpointGroup: build.query<EndpointGroups, string>({
      query: (id) => `/endpoints-groups/${id}`,
      providesTags: (result, error, id) => [{ type: 'EndpointGroups', id }]
    }),
    updateEndpointGroup: build.mutation<EndpointGroups, Pick<EndpointGroups, 'id'> & Partial<EndpointGroups>>({
      query: ({ id, ...patch }) => ({
        url: '/endpoints-groups',
        method: 'PATCH',
        body: { id, ...patch }
      }),
      async onQueryStarted ({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          endpointGroupsApi.util.updateQueryData('getEndpointGroup', id, (draft) => {
            Object.assign(draft, patch)
          })
        )
        queryFulfilled.catch(patchResult.undo)
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'EndpointGroups', id }]
    }),
    deleteEndpointGroup: build.mutation<{ success: boolean, id: string }, string>({
      query (id) {
        return {
          url: `endpoints-groups/${id}`,
          method: 'DELETE'
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'EndpointGroups', id }]
    })
  })
})

export const useEndpointGroups = endpointGroupsApi.useGetEndpointGroupsQuery
export const useSetEndpointGroups = endpointGroupsApi.useSetEndpointGroupsMutation
export const useEndpointGroup = endpointGroupsApi.useGetEndpointGroupQuery
export const useUpdateEndpointGroup = endpointGroupsApi.useUpdateEndpointGroupMutation
export const useDeleteEndpointGroup = endpointGroupsApi.useDeleteEndpointGroupMutation
