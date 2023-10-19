import { rtkApi } from '@/shared/api/rtkApi'
import { Contexts } from '../model/Contexts'

interface GetContextsArg {
  vpbx_user_id: string
}

const contextApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getContexts: build.query<Contexts[], GetContextsArg>({
      query: ({ vpbx_user_id }) => ({
        url: '/contexts',
        params: {
          vpbx_user_id
        }
      })
    })
  })
})

export const useGetContexts = contextApi.useGetContextsQuery
