import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualPageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  ManualHashtagsTypes,
  ManualSortField,
  ManualView
} from '@/entities/Manual'
import { manualPageActions } from '../../model/slice/manualPageSlice'
import { useSelector } from 'react-redux'
import {
  getManualsPageHashtag,
  getManualsPageOrder,
  getManualsPageSearch,
  getManualsPageSort,
  getManualsPageView
} from '../../model/selectors/manualsPageSelectors'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { SortOrder } from '@/shared/types/sort'
import { fetchManualsList } from '../../model/services/fetchManualsList/fetchManualsList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { ManualViewSelector } from '@/features/ManualViewSelector'
import { ManualTypeTabs } from '@/features/ManualTypeTabs'
import { ManualSortSelector } from '@/features/ManualSortSelector'

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
  const hashtag = useSelector(getManualsPageHashtag)

  const fetchData = useCallback(() => {
    dispatch(fetchManualsList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ManualView) => {
    dispatch(manualPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: ManualSortField) => {
    dispatch(manualPageActions.setSort(sort))
    dispatch(manualPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(manualPageActions.setOrder(order))
    dispatch(manualPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(manualPageActions.setSearch(search))
    dispatch(manualPageActions.setPage(1))
    debouncedFetchData()
  }, [debouncedFetchData, dispatch])

  const onChangeHashtag = useCallback((value: ManualHashtagsTypes) => {
    dispatch(manualPageActions.setHashtag(value))
    dispatch(manualPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

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
                    placeholder={t('Поиск')}
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
