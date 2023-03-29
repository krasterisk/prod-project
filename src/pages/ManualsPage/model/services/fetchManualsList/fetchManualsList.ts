import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Manual } from '../../../../../entities/Manual/model/types/manual'

export const fetchManualsList = createAsyncThunk<
Manual[],
void | never,
ThunkConfig<string>
>(
    'Manual/fetchManualsList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Manual[]>('/manuals')
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
