import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'

import { endpointsPageActions } from '../../slice/endpointsPageSlice'
import {
  getEndpointsHasMore,
  getEndpointsPageNum
} from '../../selectors/endpointsPageSelectors'

export const fetchNextEndpointsPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
  'EndpointsPage/fetchNextEndpointsList',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const hasMore = getEndpointsHasMore(getState())
    const page = getEndpointsPageNum(getState())

    if (hasMore) {
      dispatch(endpointsPageActions.setPage(page + 1))
    }
  }
)
