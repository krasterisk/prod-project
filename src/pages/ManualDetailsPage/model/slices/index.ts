import { combineReducers } from '@reduxjs/toolkit'

import {
    manualDetailsRecommendationsReducer
} from './manualDetailsRecommendationsSlice'
import { manualDetailsCommentsReducer } from './manualDetailsCommentsSlice'
import { ManualDetailsPageSchema } from '../types'

export const manualDetailsPageReducer = combineReducers<ManualDetailsPageSchema>({
    recommendations: manualDetailsRecommendationsReducer,
    comments: manualDetailsCommentsReducer
})
