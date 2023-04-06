import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { manualPageActions } from 'pages/ManualsPage/model/slice/manualPageSlice'
import { fetchManualsList } from 'pages/ManualsPage/model/services/fetchManualsList/fetchManualsList'
import { getManualsPageInited } from 'pages/ManualsPage/model/selectors/manualsPageSelectors'
import { SortOrder } from 'shared/types'
import { ManualHashtagsTypes, ManualSortField } from 'entities/Manual'

export const initManualPage = createAsyncThunk<
void | never,
URLSearchParams,
ThunkConfig<string>>(
    'ManualPage/initManualPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const inited = getManualsPageInited(getState())
        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder
            const sortFromUrl = searchParams.get('sort') as ManualSortField
            const searchFromUrl = searchParams.get('search')
            const hashtagFromUrl = searchParams.get('hashtag') as ManualHashtagsTypes

            if (orderFromUrl) {
                dispatch(manualPageActions.setOrder(orderFromUrl))
            }
            if (sortFromUrl) {
                dispatch(manualPageActions.setSort(sortFromUrl))
            }
            if (searchFromUrl) {
                dispatch(manualPageActions.setSearch(searchFromUrl))
            }
            if (hashtagFromUrl) {
                dispatch(manualPageActions.setHashtag(hashtagFromUrl))
            }

            dispatch(manualPageActions.initState())
            dispatch(fetchManualsList({}))
        }
    }
)
