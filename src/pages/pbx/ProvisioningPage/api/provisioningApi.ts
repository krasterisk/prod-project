import { rtkApi } from '@/shared/api/rtkApi'
import { AllProvisionTemplates, ProvisionTemplate } from '@/entities/Pbx'

interface QueryArgs {
  vpbx_user_id: string
  page: number
  limit: number
  sort?: string
  order?: string
  search?: string
}

export const provisioningApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProvisions: build.query<ProvisionTemplate[], null>({
      query: () => ({
        url: '/provisioning'
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'EndpointGroups', id } as const)),
              { type: 'EndpointGroups', id: 'LIST' }
            ]
          : [{ type: 'EndpointGroups', id: 'LIST' }]
    }),
    getProvisionsPage: build.query<AllProvisionTemplates, QueryArgs>({
      query: (args) => ({
        url: '/provisioning/page',
        params: args
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.rows.push(...newItems.rows)
      },
      // Refetch when the page arg changes
      forceRefetch ({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
      },
      providesTags: (result) =>
        result?.rows.length
          ? [
              ...result.rows.map(({ id }) => ({ type: 'Provisioning', id } as const)),
              { type: 'Provisioning', id: 'LIST' }
            ]
          : [{ type: 'Provisioning', id: 'LIST' }]
    }),
    setProvision: build.mutation<ProvisionTemplate[], ProvisionTemplate[]>({
      query: (arg) => ({
        url: '/provisioning',
        method: 'POST',
        body: arg
      }),
      invalidatesTags: [{ type: 'Provisioning', id: 'LIST' }]
    }),
    getProvision: build.query<ProvisionTemplate, string>({
      query: (id) => `/provisioning/${id}`,
      providesTags: (result, error, id) => [{ type: 'Provisioning', id }]
    }),
    updateProvision: build.mutation<ProvisionTemplate, Pick<ProvisionTemplate, 'id'> & Partial<ProvisionTemplate>>({
      query: ({ id, ...patch }) => ({
        url: '/provisioning',
        method: 'PATCH',
        body: { id, ...patch }
      }),
      async onQueryStarted ({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          provisioningApi.util.updateQueryData('getProvision', id, (draft) => {
            Object.assign(draft, patch)
          })
        )
        queryFulfilled.catch(patchResult.undo)
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Provisioning', id }]
    }),
    deleteProvision: build.mutation<{ success: boolean, id: string }, string>({
      query (id) {
        return {
          url: `provisioning/${id}`,
          method: 'DELETE'
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Provisioning', id }]
    })
  })
})

export const useProvisions = provisioningApi.useGetProvisionsQuery
export const useProvisionsPage = provisioningApi.useGetProvisionsPageQuery
export const useSetProvision = provisioningApi.useSetProvisionMutation
export const useGetProvision = provisioningApi.useGetProvisionQuery
export const useUpdateProvision = provisioningApi.useUpdateProvisionMutation
export const useDeleteProvision = provisioningApi.useDeleteProvisionMutation
