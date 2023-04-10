import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { ManualSortField } from '../../model/types/manual'
import { SortOrder } from 'shared/types'

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
    )
})
