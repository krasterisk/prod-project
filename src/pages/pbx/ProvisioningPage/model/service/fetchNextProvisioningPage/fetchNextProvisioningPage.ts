import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { provisioningPageActions } from '../../../model/slice/provisioningPageSlice'
import {
  getProvisioningHasMore,
  getProvisioningPageNum
} from '../../selectors/ProvisioningPageSelectors'

export const fetchNextProvisioningPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
  'ProvisioningPage/fetchNextProvisioningList',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const hasMore = getProvisioningHasMore(getState())
    const page = getProvisioningPageNum(getState())

    if (hasMore) {
      dispatch(provisioningPageActions.setPage(page + 1))
    }
  }
)
