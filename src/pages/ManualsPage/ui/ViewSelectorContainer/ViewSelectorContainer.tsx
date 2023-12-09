import { memo } from 'react'
import { ManualViewSelector } from '@/features/Filters'
import { useManualFilters } from '../../lib/hooks/useManualFilters'

interface ViewSelectorContainerProps {
  className?: string

}

export const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
  const {
    className
  } = props

  const { view, onChangeView } = useManualFilters()

  return (
        <div className={className}>
          <ManualViewSelector
              className={className}
              view={view}
              onViewClick={onChangeView}
          />
        </div>
  )
})
