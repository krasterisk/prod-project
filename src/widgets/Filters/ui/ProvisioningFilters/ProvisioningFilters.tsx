import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Icon } from '@/shared/ui/redesigned/Icon'
import SearchIcon from '@/shared/assets/icons/search.svg'
import {
  ProvisioningSortSelector
} from '@/features/Filters'
import { ProvisionTemplatesSortField } from '@/entities/Pbx'

interface ProvisioningsFiltersProps {
  className?: string
  sort: ProvisionTemplatesSortField
  search: string
  tab?: string
  onChangeSearch: (value: string) => void
  onChangeSort: (newSort: ProvisionTemplatesSortField) => void
}

export const ProvisioningFilters = memo((props: ProvisioningsFiltersProps) => {
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
            className={classNames(cls.ProvisioningFilters, {}, [className])}
            padding={'24'}
            border={'partial'}
        >
            <VStack gap={'32'}>
                <Input
                    data-testid={'ProvisioningSearch'}
                    className={cls.searchInput}
                    placeholder={t('Поиск') ?? ''}
                    size={'s'}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                />
                <ProvisioningSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
  )
})
