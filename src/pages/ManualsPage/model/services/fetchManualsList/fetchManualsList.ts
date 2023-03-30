import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Manual } from '../../../../../entities/Manual/model/types/manual'
import { getManualsPageLimit } from 'pages/ManualsPage/model/selectors/manualsPageSelectors'

interface FetchManualsListProps {
    page?: number
}

export const fetchManualsList = createAsyncThunk<
Manual[],
FetchManualsListProps,
ThunkConfig<string>
>(
    'Manual/fetchManualsList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const { page = 1 } = props
        const limit = getManualsPageLimit(getState())

        try {
            const response = await extra.api.get<Manual[]>('/manuals', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
