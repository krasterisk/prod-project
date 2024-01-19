import { rtkApi } from '@/shared/api/rtkApi'
import { AllContexts, Context } from '@/entities/Pbx'

interface QueryArgs {
  vpbx_user_id: string
  page: number
  limit: number
  sort?: string
  order?: string
  search?: string
}

interface GetContextsArgs {
  vpbx_user_id: string
}

export const contextsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getContexts: build.query<Context[], GetContextsArgs>({
      query: (arg) => ({
        url: '/contexts',
        params: arg
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contexts', id } as const)),
              { type: 'Contexts', id: 'LIST' }
            ]
          : [{ type: 'Contexts', id: 'LIST' }]
    }),
    getAllContexts: build.query<AllContexts, QueryArgs>({
      query: (args) => ({
        url: '/contexts/page',
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
              ...result.rows.map(({ id }) => ({ type: 'Endpoints', id } as const)),
              { type: 'Endpoints', id: 'LIST' }
            ]
          : [{ type: 'Endpoints', id: 'LIST' }]
    }),
    setContexts: build.mutation<Context[], Context[]>({
      query: (arg) => ({
        url: '/contexts',
        method: 'POST',
        body: arg
      }),
      invalidatesTags: [{ type: 'Contexts', id: 'LIST' }]
    }),
    getContext: build.query<Context, string>({
      query: (id) => `/contexts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Contexts', id }]
    }),
    updateContext: build.mutation<Context, Pick<Context, 'id'> & Partial<Context>>({
      query: ({ id, ...patch }) => ({
        url: '/contexts',
        method: 'PATCH',
        body: { id, ...patch }
      }),
      async onQueryStarted ({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          contextsApi.util.updateQueryData('getContext', id, (draft) => {
            Object.assign(draft, patch)
          })
        )
        queryFulfilled.catch(patchResult.undo)
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Contexts', id }]
    }),
    deleteContext: build.mutation<{ success: boolean, id: string }, string>({
      query (id) {
        return {
          url: `/contexts/${id}`,
          method: 'DELETE'
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Contexts', id }]
    })
  })
})

export const useGetContexts = contextsApi.useGetContextsQuery
export const useGetAllContexts = contextsApi.useGetAllContextsQuery
export const useSetContexts = contextsApi.useSetContextsMutation
export const useGetContext = contextsApi.useGetContextQuery
export const useUpdateContext = contextsApi.useUpdateContextMutation
export const useDeleteContext = contextsApi.useDeleteContextMutation
