import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Manual } from '../../types/manual'

export const fetchManualById = createAsyncThunk<
Manual,
string,
ThunkConfig<string>
>(
    'manual/fetchManualById',
    async (manualId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Manual>(`/posts/${manualId}`)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
