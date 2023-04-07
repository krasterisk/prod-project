import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'

import {
    ManualDetailsRecommendationsSchema
} from '../types/ManualDetailsRecommendationsSchema'
import { Manual } from 'entities/Manual'

const recommendationsAdapter = createEntityAdapter<Manual>({
    selectId: (manual) => manual.id
})

export const getManualRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.manualDetailsRecommendations || recommendationsAdapter.getInitialState()
)

const manualDetailsRecommendationsSlice = createSlice({
    name: 'manualDetailsCommentsSlice',
    initialState: recommendationsAdapter.getInitialState<ManualDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {}
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByManualId.pending, (state) => {
    //             state.isLoading = true
    //             state.error = undefined
    //         })
    //         .addCase(fetchCommentsByManualId.fulfilled, (
    //             state,
    //             action: PayloadAction<Comments[]>
    //         ) => {
    //             state.isLoading = false
    //             recommendationsAdapter.setAll(state, action.payload)
    //         })
    //         .addCase(fetchCommentsByManualId.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // }
})

export const { reducer: manualDetailsRecommendationsReducer } = manualDetailsRecommendationsSlice
