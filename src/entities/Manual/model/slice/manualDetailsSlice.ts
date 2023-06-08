import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ManualDetailsSchema } from '../types/manualDetailsSchema'
import { fetchManualById } from '../services/fetchManualById/fetchManualById'
import { Manual } from '../types/manual'

const initialState: ManualDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const manualDetailsSlice = createSlice({
  name: 'manualDetails',
  initialState,
  reducers: {
    // update: (state, action: PayloadAction<ManualDetails>) => {
    //     state.data = { ...state.data, ...action.payload }
    // },
    // revert: (state) => {
    //     state.validateErrors = undefined
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManualById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchManualById.fulfilled, (
        state,
        action: PayloadAction<Manual>
      ) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchManualById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: manualDetailsActions } = manualDetailsSlice
export const { reducer: manualDetailsReducer } = manualDetailsSlice
