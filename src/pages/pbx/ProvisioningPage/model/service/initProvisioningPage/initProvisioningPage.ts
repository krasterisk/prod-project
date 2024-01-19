import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { provisioningPageActions } from '../../slice/provisioningPageSlice'
import { getProvisioningInited } from '../../selectors/ProvisioningPageSelectors'

export const initProvisioningPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>>(
  'ProvisioningPage/initProvisioningPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const inited = getProvisioningInited(getState())
    if (!inited) {
      dispatch(provisioningPageActions.initState())
    }
  }
)
