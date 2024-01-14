import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'

import { contextsPageActions } from '../../slice/contextsPageSlice'
import {
  getContextsHasMore,
  getContextsPageNum
} from '../../selectors/contextsPageSelectors'

export const fetchNextContextsPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
  'EndpointsPage/fetchNextEndpointsList',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const hasMore = getContextsHasMore(getState())
    const page = getContextsPageNum(getState())

    if (hasMore) {
      dispatch(contextsPageActions.setPage(page + 1))
    }
  }
)
