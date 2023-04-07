import { combineReducers } from '@reduxjs/toolkit'
import { ManualDetailsPageSchema } from 'pages/ManualDetailsPage'
import {
    manualDetailsRecommendationsReducer
} from './manualDetailsRecommendationsSlice'
import { manualDetailsCommentsReducer } from './manualDetailsCommentsSlice'

export const manualDetailsPageReducer = combineReducers<ManualDetailsPageSchema>({
    recommendations: manualDetailsRecommendationsReducer,
    comments: manualDetailsCommentsReducer
})
