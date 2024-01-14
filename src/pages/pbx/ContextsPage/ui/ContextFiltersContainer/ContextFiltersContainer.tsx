import { ContextsFilters } from '@/widgets/Filters'
import { memo } from 'react'
import { useContextFilters } from '../../lib/hooks/useContextFilters'

interface ContextFiltersContainerProps {
  className?: string
}

export const ContextFiltersContainer = memo((props: ContextFiltersContainerProps) => {
  const {
    className
  } = props

  const {
    search,
    tab,
    sort,
    onChangeSort,
    onChangeSearch
  } = useContextFilters()

  return (
        <ContextsFilters
            className={className}
            tab={tab}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            search={search}
            sort={sort}
        />
  )
})
