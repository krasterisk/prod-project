import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Manual } from '../../types/manual'

export const fetchManualById = createAsyncThunk<
Manual,
string | undefined,
ThunkConfig<string>
>(
    'Manual/fetchManualById',
    async (manualId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            if (!manualId) {
                throw new Error('')
            }
            const response = await extra.api.get<Manual>(`/manuals/${manualId}`)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
