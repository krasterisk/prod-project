import { rtkApi } from '@/shared/api/rtkApi'
import { Context } from '@/entities/Pbx'

interface GetContextsArg {
  vpbx_user_id: string
}

export const contextsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getContexts: build.query<Context[], GetContextsArg>({
      query: ({ vpbx_user_id }) => ({
        url: '/contexts',
        params: {
          vpbx_user_id
        }

      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contexts', id } as const)),
              { type: 'Contexts', id: 'LIST' }
            ]
          : [{ type: 'Contexts', id: 'LIST' }]
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
export const useSetContexts = contextsApi.useSetContextsMutation
export const useGetContext = contextsApi.useGetContextQuery
export const useUpdateContext = contextsApi.useUpdateContextMutation
export const useDeleteContext = contextsApi.useDeleteContextMutation
