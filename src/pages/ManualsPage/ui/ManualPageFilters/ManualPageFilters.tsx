import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualPageFilters.module.scss'
import { memo } from 'react'

import { Card } from '@/shared/ui/redesigned/Card'
import { ManualViewSelector } from '@/features/ManualViewSelector'
import { ManualTypeTabs } from '@/features/ManualTypeTabs'
import { ManualSortSelector } from '@/features/ManualSortSelector'
import { useManualFilters } from '../../lib/hooks/useManualFilters'
import { Input } from '@/shared/ui/redesigned/Input'

interface ManualPageFiltersProps {
  className?: string

}

export const ManualPageFilters = memo((props: ManualPageFiltersProps) => {
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
    hashtag,
    onChangeView,
    view
  } = useManualFilters()

  return (
        <div className={classNames(cls.ManualPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ManualSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ManualViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    data-testid={'ManualSearch'}
                    className={cls.searchInput}
                    placeholder={'Поиск'}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ManualTypeTabs
                className={cls.tabs}
                value={hashtag}
                onChangeHashtag={onChangeHashtag}
            />
        </div>
  )
})
