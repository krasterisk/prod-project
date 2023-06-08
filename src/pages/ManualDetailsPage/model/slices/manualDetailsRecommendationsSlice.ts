import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'

import { ManualDetailsRecommendationsSchema } from '../types/ManualDetailsRecommendationsSchema'
import { Manual } from '@/entities/Manual'
import { fetchManualRecommendations } from '../service/fetchManualRecommendations/fetchManualRecommendations'

const recommendationsAdapter = createEntityAdapter<Manual>({
  selectId: (manual) => manual.id
})

export const getManualRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.manualDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const manualDetailsRecommendationsSlice = createSlice({
  name: 'manualDetailsCommentsSlice',
  initialState: recommendationsAdapter.getInitialState<ManualDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManualRecommendations.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchManualRecommendations.fulfilled, (
        state,
        action
      ) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchManualRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: manualDetailsRecommendationsReducer } = manualDetailsRecommendationsSlice
