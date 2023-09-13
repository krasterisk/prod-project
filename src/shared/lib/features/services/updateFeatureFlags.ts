import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { updateFeatureFlagsMutations } from '../api/featuresFlagsApi'

interface UpdateFeatureFlagOptions {
  id: string
  designed: boolean
}

export const updateFeatureFlag = createAsyncThunk<
void | never,
UpdateFeatureFlagOptions,
ThunkConfig<string>
>('user/saveFutureFlagSettings', async ({ id, designed }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi

  try {
    await dispatch(
      updateFeatureFlagsMutations({
        id,
        designed
      })
    )
    // window.location.reload()
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
