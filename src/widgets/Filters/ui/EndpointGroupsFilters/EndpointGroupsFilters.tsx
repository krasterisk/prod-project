import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Icon } from '@/shared/ui/redesigned/Icon'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { EndpointGroupsSortField } from '@/entities/Pbx'
import { EndpointGroupsSortSelector } from '@/features/Filters'

interface EndpointGroupssFiltersProps {
  className?: string
  sort: EndpointGroupsSortField
  search: string
  tab?: string
  onChangeSearch: (value: string) => void
  onChangeSort: (newSort: EndpointGroupsSortField) => void
}

export const EndpointGroupsFilters = memo((props: EndpointGroupssFiltersProps) => {
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
            className={classNames(cls.EndpointGroupsFilters, {}, [className])}
            padding={'24'}
            border={'partial'}
        >
            <VStack gap={'32'}>
                <Input
                    data-testid={'EndpointGroupsSearch'}
                    className={cls.searchInput}
                    placeholder={t('Поиск') ?? ''}
                    size={'s'}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                />
                <EndpointGroupsSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
  )
})
