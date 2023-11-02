import { rtkApi } from '@/shared/api/rtkApi'
import { Context } from '@/entities/pbx'

export const contextsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllContexts: build.query<Context[], null>({
      query: () => ({
        url: '/contexts'
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

export const useContexts = contextsApi.useGetAllContextsQuery
export const useSetContexts = contextsApi.useSetContextMutation
