import { ProvisioningFilters } from '@/widgets/Filters'
import { memo } from 'react'
import { useProvisioningFilters } from '../../lib/hooks/ProvisioningFilters'

interface ProvisioningFiltersContainerProps {
  className?: string
}

export const ProvisioningFiltersContainer = memo((props: ProvisioningFiltersContainerProps) => {
  const {
    className
  } = props

  const {
    search,
    sort,
    onChangeSort,
    onChangeSearch
  } = useProvisioningFilters()

  return (
        <ProvisioningFilters
            className={className}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            search={search}
            sort={sort}
        />
  )
})
