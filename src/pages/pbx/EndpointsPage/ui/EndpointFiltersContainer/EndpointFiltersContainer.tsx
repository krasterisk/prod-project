import { memo } from 'react'
import { useEndpointFilters } from '../../lib/hooks/useEndpointFilters'
import { EndpointsFilters } from '@/widgets/Filters'

interface EndpointFiltersContainerProps {
  className?: string

}

export const EndpointFiltersContainer = memo((props: EndpointFiltersContainerProps) => {
  const {
    className
  } = props

  const {
    search,
    tab,
    sort,
    onChangeTab,
    onChangeSort,
    onChangeSearch
  } = useEndpointFilters()

  return (
        <EndpointsFilters
            className={className}
            tab={tab}
            onChangeSort={onChangeSort}
            onChangeTab={onChangeTab}
            onChangeSearch={onChangeSearch}
            search={search}
            sort={sort}
        />

  )
})
