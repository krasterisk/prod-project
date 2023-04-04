import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualPageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ManualSortField, ManualSortSelector, ManualView, ManualViewSelector } from 'entities/Manual'
import { manualPageActions } from '../ManualsPage/model/slice/manualPageSlice'
import { useSelector } from 'react-redux'
import {
    getManualsPageOrder,
    getManualsPageSort,
    getManualsPageView,
    getManualsPageSearch
} from '../ManualsPage/model/selectors/manualsPageSelectors'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'

interface ManualPageFiltersProps {
    className?: string

}

export const ManualPageFilters = memo((props: ManualPageFiltersProps) => {
    const {
        className
    } = props
    const { t } = useTranslation('manuals')
    const dispatch = useAppDispatch()
    const view = useSelector(getManualsPageView)
    const sort = useSelector(getManualsPageSort)
    const order = useSelector(getManualsPageOrder)
    const search = useSelector(getManualsPageSearch)

    const onChangeView = useCallback((view: ManualView) => {
        dispatch(manualPageActions.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((sort: ManualSortField) => {
        dispatch(manualPageActions.setSort(sort))
    }, [dispatch])

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(manualPageActions.setOrder(order))
    }, [dispatch])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(manualPageActions.setSearch(search))
    }, [dispatch])

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
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
        </div>
    )
})
