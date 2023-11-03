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
      })
    }),
    setContext: build.mutation<Context[], Context[]>({
      query: (arg) => ({
        url: '/contexts',
        method: 'POST',
        body: arg
      })
    }),
    getContext: build.query<Context, number>({
      query: (id) => ({
        url: `/contexts/${id}`
      })
    })
  })
})

export const useGetContexts = contextsApi.useGetContextsQuery
export const useSetContexts = contextsApi.useSetContextMutation
