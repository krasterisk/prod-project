import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Manual, ManualView } from '../../model/types/manual'

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
        <ManualListItemRedesigned {...props} />
  )
})
