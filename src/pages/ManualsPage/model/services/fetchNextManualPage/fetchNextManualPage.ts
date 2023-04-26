import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import {
    getManualsPageError,
    getManualsPageHasMore,
    getManualsPageIsLoading,
    getManualsPageNum
} from '../../selectors/manualsPageSelectors'
import { manualPageActions } from '../../slice/manualPageSlice'
import { fetchManualsList } from '../fetchManualsList/fetchManualsList'

export const fetchNextManualPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>
>(
    'ManualPage/fetchNextManualsList',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const hasMore = getManualsPageHasMore(getState())
        const page = getManualsPageNum(getState())
        const isLoading = getManualsPageIsLoading(getState())
        const error = getManualsPageError(getState())

        if (hasMore && !isLoading && !error) {
            dispatch(fetchManualsList({}))
            dispatch(manualPageActions.setPage(page + 1))
        }
    }
)
