import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Manual, ManualView } from '../../model/types/manual'
import { ToggleFeatures } from '@/shared/lib/features'
import {
  ManualListItemDeprecated
} from './ManualListItemDeprecated/ManualListItemDeprecated'
import {
  ManualListItemRedesigned
} from './ManualListItemRedesigned/ManualListItemRedesigned'

export interface ManualListItemProps {
  className?: string
  manual: Manual
  view?: ManualView
  target?: HTMLAttributeAnchorTarget
}

export const ManualListItem = memo((props: ManualListItemProps) => {
  return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<ManualListItemRedesigned {...props} />}
            off={<ManualListItemDeprecated {...props} />}
                />
  )
})
