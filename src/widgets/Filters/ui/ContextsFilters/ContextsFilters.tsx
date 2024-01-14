import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextsFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Icon } from '@/shared/ui/redesigned/Icon'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { ContextSortField } from '@/entities/Pbx'
import { ContextsSortSelector } from '@/features/Filters'

interface ContextsFiltersProps {
  className?: string
  sort: ContextSortField
  search: string
  tab: string
  onChangeSearch: (value: string) => void
  onChangeSort: (newSort: ContextSortField) => void
}

export const ContextsFilters = memo((props: ContextsFiltersProps) => {
  const {
    className,
    sort,
    search,
    onChangeSort,
    onChangeSearch
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.ContextsFilters, {}, [className])}
            padding={'24'}
            border={'partial'}
        >
            <VStack gap={'32'}>
                <Input
                    data-testid={'ContextSearch'}
                    className={cls.searchInput}
                    placeholder={t('Поиск') ?? ''}
                    size={'s'}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                />
                <ContextsSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
  )
})
