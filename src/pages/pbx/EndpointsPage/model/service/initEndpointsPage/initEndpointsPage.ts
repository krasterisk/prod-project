import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { endpointsPageActions } from '../../../model/slice/endpointsPageSlice'
import { getEndpointsInited } from '../../selectors/endpointsPageSelectors'
import { EndpointSortField } from '@/entities/Pbx'

export const initEndpointsPage = createAsyncThunk<
void | never,
URLSearchParams,
ThunkConfig<string>>(
  'EndpointsPage/initEndpointsPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const inited = getEndpointsInited(getState())
    if (!inited) {
      const sortFromUrl = searchParams.get('sort') as EndpointSortField
      const searchFromUrl = searchParams.get('search')

      if (sortFromUrl) {
        dispatch(endpointsPageActions.setSort(sortFromUrl))
      }
      if (searchFromUrl) {
        dispatch(endpointsPageActions.setSearch(searchFromUrl))
      }
      dispatch(endpointsPageActions.initState())
    }
  }
)
