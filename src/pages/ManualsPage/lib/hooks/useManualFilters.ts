import { useSelector } from 'react-redux'
import {
  getManualsPageHashtag,
  getManualsPageOrder, getManualsPageSearch,
  getManualsPageSort,
  getManualsPageView
} from '../../model/selectors/manualsPageSelectors'
import { useCallback } from 'react'
import { ManualHashtagsTypes, ManualSortField, ManualView } from '@/entities/Manual'
import { manualPageActions } from '../../model/slice/manualPageSlice'
import { SortOrder } from '@/shared/types/sort'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchManualsList } from '../../model/services/fetchManualsList/fetchManualsList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

export function useManualFilters () {
  const view = useSelector(getManualsPageView)
  const sort = useSelector(getManualsPageSort)
  const order = useSelector(getManualsPageOrder)
  const search = useSelector(getManualsPageSearch)
  const hashtag = useSelector(getManualsPageHashtag)

  const dispatch = useAppDispatch()

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

  return {
    view,
    sort,
    order,
    search,
    hashtag,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeHashtag
  }
}
