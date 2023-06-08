import { ManualDetailsRecommendationsSchema } from './ManualDetailsRecommendationsSchema'
import { ManualDetailsCommentsSchema } from './ManualDetailsCommentsSchema'

export interface ManualDetailsPageSchema {
  comments: ManualDetailsCommentsSchema
  recommendations: ManualDetailsRecommendationsSchema
}
