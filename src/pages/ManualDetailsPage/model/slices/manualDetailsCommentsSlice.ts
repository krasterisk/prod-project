import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comments } from 'entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { ManualDetailsCommentsSchema } from '../types/ManualDetailsCommentsSchema'
import {
    fetchCommentsByManualId
} from '../service/fetchCommentsByManualId/fetchCommentsByManualId'

const commentsAdapter = createEntityAdapter<Comments>({
    selectId: (comment) => comment.id
})

export const getManualComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.manualDetailsComments || commentsAdapter.getInitialState()
)

const manualDetailsCommentsSlice = createSlice({
    name: 'manualDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ManualDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByManualId.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchCommentsByManualId.fulfilled, (
                state,
                action: PayloadAction<Comments[]>
            ) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByManualId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: manualDetailsCommentsReducer } = manualDetailsCommentsSlice
