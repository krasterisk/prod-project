import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualsFilters.module.scss'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { ManualSortSelector } from '@/features/ManualSortSelector'
import { ManualTypeTabs } from '@/features/ManualTypeTabs'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useTranslation } from 'react-i18next'
import { ManualHashtagsTypes, ManualSortField } from '@/entities/Manual'
import { SortOrder } from '@/shared/types/sort'
import { Input } from '@/shared/ui/redesigned/Input'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ManualsFiltersProps {
  className?: string
  sort: ManualSortField
  order: SortOrder
  search: string
  hashtag: ManualHashtagsTypes
  onChangeSearch: (value: string) => void
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ManualSortField) => void
  onChangeHashtag: (hashtag: ManualHashtagsTypes) => void
}

export const ManualsFilters = memo((props: ManualsFiltersProps) => {
  const {
    className,
    sort,
    order,
    hashtag,
    search,
    onChangeSort,
    onChangeSearch,
    onChangeOrder,
    onChangeHashtag
  } = props

  const { t } = useTranslation('manuals')

  return (
        <Card
            className={classNames(cls.ManualsFilters, {}, [className])}
            padding={'24'}
        >
          <VStack gap={'32'}>
            <Input
                data-testid={'ManualSearch'}
                className={cls.searchInput}
                placeholder={t('Поиск') ?? ''}
                onChange={onChangeSearch}
                addonLeft={<Icon Svg={SearchIcon} />}
                value={search}
            />
            <ManualSortSelector
                sort={sort}
                order={order}
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
            />

            <ManualTypeTabs
                className={cls.tabs}
                value={hashtag}
                onChangeHashtag={onChangeHashtag}
            />
          </VStack>
        </Card>
  )
})
