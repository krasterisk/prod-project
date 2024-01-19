import { EndpointGroupsFilters } from '@/widgets/Filters'
import { memo } from 'react'
import { useEndpointGroupsFilters } from '../../lib/hooks/useEndpointGroupsFilters'

interface EndpointGroupsFiltersContainerProps {
  className?: string
}

export const EndpointGroupsFiltersContainer = memo((props: EndpointGroupsFiltersContainerProps) => {
  const {
    className
  } = props

  const {
    search,
    sort,
    onChangeSort,
    onChangeSearch
  } = useEndpointGroupsFilters()

  return (
        <EndpointGroupsFilters
            className={className}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            search={search}
            sort={sort}
        />
  )
})
