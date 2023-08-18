import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select'
import { SortOrder } from '@/shared/types/sort'
import { ManualSortField } from '@/entities/Manual'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ManualSortSelectorProps {
  className?: string
  sort: ManualSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ManualSortField) => void
}

export const ManualSortSelector = memo((props: ManualSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder
  } = props
  const { t } = useTranslation('manuals')

  const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOptions<ManualSortField>>>(() => [
    {
      value: ManualSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ManualSortField.VIEW,
      content: t('просмотрам')
    },
    {
      value: ManualSortField.TITLE,
      content: t('названию')
    }
  ], [t])

  return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
              <div className={classNames(cls.ManualSortSelectorRedesigned, {}, [className])}>
                <VStack gap={'8'}>
                  <Text text={t('Сортировать по:')}/>
                <ListBox
                    items={sortFieldOptions}
                    onChange={onChangeSort}
                    value={sort}
                />
                <ListBox
                    items={orderOptions}
                    onChange={onChangeOrder}
                    value={order}
                />
                </VStack>
              </div>
            }
            off={
              <div className={classNames(cls.ManualSortSelector, {}, [className])}>
                <Select<ManualSortField>
                    options={sortFieldOptions}
                    onChange={onChangeSort}
                    label={t('Сортировать ПО')}
                    value={sort}
                />
                <Select
                    options={orderOptions}
                    onChange={onChangeOrder}
                    label={t('по')}
                    value={order}
                    className={cls.order}
                />
              </div>

            }
        />
  )
})
