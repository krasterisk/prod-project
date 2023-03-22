import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comments } from 'entities/Comment'

export const fetchCommentsByManualId = createAsyncThunk<
Comments[],
string | undefined,
ThunkConfig<string>
>(
    'manualDetails/fetchCommentByManualId',
    async (manualId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        if (!manualId) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<Comments[]>(`/manuals/comments/${manualId}`)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
