import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Manual, ManualView } from 'entities/Manual'
import { StateSchema } from 'app/providers/StoreProvider'
import { ManualsPageSchema } from '../types/manualsPageSchema'
import { fetchManualsList } from '../services/fetchManualsList/fetchManualsList'
import { MANUAL_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const manualsAdapter = createEntityAdapter<Manual>({
    selectId: (manual) => manual.id

})

export const getManuals = manualsAdapter.getSelectors<StateSchema>(
    (state) => state.manualsPage || manualsAdapter.getInitialState()
)

export const manualPageSlice = createSlice({
    name: 'manualPageSlice',
    initialState: manualsAdapter.getInitialState<ManualsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'SMALL',
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ManualView>) => {
            state.view = action.payload
            localStorage.setItem(MANUAL_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(MANUAL_VIEW_LOCALSTORAGE_KEY) as ManualView
            state.view = view
            state.limit = view === 'BIG' ? 10 : 9
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchManualsList.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchManualsList.fulfilled, (
                state,
                action: PayloadAction<Manual[]>
            ) => {
                state.isLoading = false
                manualsAdapter.addMany(state, action.payload)
                console.log(action.payload)
                //                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchManualsList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: manualPageActions } = manualPageSlice
export const { reducer: manualPageReducer } = manualPageSlice
