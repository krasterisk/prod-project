import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Manual } from 'entities/Manual'
import {
    getManualsPageLimit,
    getManualsPageNum,
    getManualsPageOrder,
    getManualsPageSearch,
    getManualsPageSort
} from '../../../model/selectors/manualsPageSelectors'

export const fetchManualsList = createAsyncThunk<
Manual[],
void | never,
ThunkConfig<string>
>(
    'ManualPage/fetchManualsList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const limit = getManualsPageLimit(getState())
        const sort = getManualsPageSort(getState())
        const order = getManualsPageOrder(getState())
        const search = getManualsPageSearch(getState())
        const page = getManualsPageNum(getState())

        try {
            const response = await extra.api.get<Manual[]>('/manuals', {
                params: {
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    _search: search
                }
            })
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
