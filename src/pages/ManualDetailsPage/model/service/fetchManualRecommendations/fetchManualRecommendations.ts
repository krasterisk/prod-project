import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Manual } from '@/entities/Manual'

export const fetchManualRecommendations = createAsyncThunk<
Manual[],
void | never,
ThunkConfig<string>
>(
  'ManualPage/fetchManualRecommendations',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Manual[]>('/manuals/recommendations')
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
