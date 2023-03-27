import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    text: ''
}

export const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAddCommentFormData.pending, (state) => {
    //             state.isLoading = true
    //             state.error = undefined
    //         })
    //         .addCase(fetchAddCommentFormData.fulfilled, (state, action: PayloadAction<AddCommentForm>) => {
    //             state.isLoading = false
    //             state.data = action.payload
    //         })
    //         .addCase(fetchAddCommentFormData.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // }
})

export const { actions: AddCommentFormActions } = AddCommentFormSlice
export const { reducer: AddCommentFormReducer } = AddCommentFormSlice
