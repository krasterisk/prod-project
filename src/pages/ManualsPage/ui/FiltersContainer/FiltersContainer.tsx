import { memo } from 'react'
import { ManualsFilters } from '@/widgets/Filters'
import { useManualFilters } from '../../lib/hooks/useManualFilters'

interface FiltersContainerProps {
  className?: string

}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const {
    className
  } = props

  const {
    onChangeHashtag,
    onChangeOrder,
    order,
    onChangeSort,
    sort,
    onChangeSearch,
    search,
    hashtag
  } = useManualFilters()

  return (
        <ManualsFilters
            className={className}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeHashtag={onChangeHashtag}
            hashtag={hashtag}
            onChangeSearch={onChangeSearch}
            search={search}
            sort={sort}
        />

  )
})
