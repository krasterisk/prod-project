import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { endpointsPageActions } from '../../../model/slice/endpointsPageSlice'
import { getEndpointsInited } from '../../selectors/endpointsPageSelectors'

export const initEndpointsPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>>(
  'EndpointsPage/initEndpointsPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const inited = getEndpointsInited(getState())
    if (!inited) {
      dispatch(endpointsPageActions.initState())
    }
  }
)
