import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsFilters.module.scss'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/redesigned/Input'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { EndpointSortField } from '@/entities/Pbx'
import { EndpointsContextTabs, EndpointsSortSelector } from '@/features/Filters'

interface EndpointsFiltersProps {
  className?: string
  sort: EndpointSortField
  search: string
  tab: string
  onChangeSearch: (value: string) => void
  onChangeSort: (newSort: EndpointSortField) => void
  onChangeTab: (tab: string) => void

}

export const EndpointsFilters = memo((props: EndpointsFiltersProps) => {
  const {
    className,
    sort,
    search,
    tab,
    onChangeSort,
    onChangeSearch,
    onChangeTab
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.EndpointsFilters, {}, [className])}
            padding={'24'}
            border={'partial'}
        >
            <VStack gap={'32'}>
                <Input
                    data-testid={'EndpointsSearch'}
                    className={cls.searchInput}
                    placeholder={t('Поиск') ?? ''}
                    size={'s'}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                />
                <EndpointsSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                />

                <EndpointsContextTabs
                    className={cls.tabs}
                    value={tab}
                    onChangeTab={onChangeTab}
                />
            </VStack>
        </Card>
  )
})
