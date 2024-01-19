import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getEndpointGroupsInited } from '../../../model/selectors/EndpointGroupsPageSelectors'
import { endpointGroupsPageActions } from '../../../model/slice/endpointGroupsPageSlice'

export const initEndpointGroupsPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>>(
  'EndpointGroupsPage/initEndpointGroupsPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const inited = getEndpointGroupsInited(getState())
    if (!inited) {
      dispatch(endpointGroupsPageActions.initState())
    }
  }
)
