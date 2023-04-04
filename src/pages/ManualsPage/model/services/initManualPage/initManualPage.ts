import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { manualPageActions } from 'pages/ManualsPage/model/slice/manualPageSlice'
import { fetchManualsList } from 'pages/ManualsPage/model/services/fetchManualsList/fetchManualsList'
import { getManualsPageInited } from 'pages/ManualsPage/model/selectors/manualsPageSelectors'

export const initManualPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>>(
    'ManualPage/initManualPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const inited = getManualsPageInited(getState())
        if (!inited) {
            dispatch(manualPageActions.initState())
            dispatch(fetchManualsList())
        }
    }
)
