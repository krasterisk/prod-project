import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ManualViewSelectorSchema } from '../types/ManualViewSelectorSchema';

const initialState: ManualViewSelectorSchema = {
    
};

export const ManualViewSelectorSlice = createSlice({
    name: 'ManualViewSelector',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ManualViewSelectorActions } = ManualViewSelectorSlice;
export const { reducer: ManualViewSelectorReducer } = ManualViewSelectorSlice;