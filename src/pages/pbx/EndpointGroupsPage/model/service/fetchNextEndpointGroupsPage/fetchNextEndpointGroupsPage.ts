import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { endpointGroupsPageActions } from '../../../model/slice/endpointGroupsPageSlice'
import {
  getEndpointGroupsHasMore,
  getEndpointGroupsPageNum
} from '../../../model/selectors/EndpointGroupsPageSelectors'

export const fetchNextEndpointGroupsPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
  'EndpointGroupsPage/fetchNextEndpointGroupsList',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const hasMore = getEndpointGroupsHasMore(getState())
    const page = getEndpointGroupsPageNum(getState())

    if (hasMore) {
      dispatch(endpointGroupsPageActions.setPage(page + 1))
    }
  }
)
