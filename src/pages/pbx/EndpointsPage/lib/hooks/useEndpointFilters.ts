import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getEndpointsHasMore,
  getEndpointsPageLimit,
  getEndpointsPageNum,
  getEndpointsPageOrder,
  getEndpointsPageSearch,
  getEndpointsPageSort,
  getEndpointsPageView,
  getEndpointsTab
} from '../../model/selectors/endpointsPageSelectors'
import { endpointsPageActions } from '../../model/slice/endpointsPageSlice'
import { ContentView } from '@/entities/Content'
import { EndpointSortField } from '@/entities/Pbx'
import { SortOrder } from '@/shared/types/sort'

export function useEndpointFilters () {
  const page = useSelector(getEndpointsPageNum)
  const limit = useSelector(getEndpointsPageLimit)
  const order = useSelector(getEndpointsPageOrder)
  const hasMore = useSelector(getEndpointsHasMore)
  const view = useSelector(getEndpointsPageView)
  const sort = useSelector(getEndpointsPageSort)
  const tab = useSelector(getEndpointsTab)
  const search = useSelector(getEndpointsPageSearch)

  const dispatch = useAppDispatch()

  // const fetchData = useCallback(() => {
  //   dispatch(fetchManualsList({ replace: true }))
  // }, [dispatch])

  const onChangeView = useCallback((view: ContentView) => {
    dispatch(endpointsPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: EndpointSortField) => {
    dispatch(endpointsPageActions.setSort(sort))
    dispatch(endpointsPageActions.setPage(1))
    //    fetchData()
  }, [dispatch])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(endpointsPageActions.setSearch(search))
    dispatch(endpointsPageActions.setPage(1))
    // debouncedFetchData()
  }, [dispatch])

  const onChangePage = useCallback((page: number) => {
    dispatch(endpointsPageActions.setPage(page))
    console.log(page)
    // debouncedFetchData()
  }, [dispatch])

  const onChangeHasMore = useCallback((hasMore: boolean) => {
    dispatch(endpointsPageActions.setHasMore(hasMore))
    dispatch(endpointsPageActions.setPage(1))
    // debouncedFetchData()
  }, [dispatch])

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(endpointsPageActions.setOrder(order))
    dispatch(endpointsPageActions.setPage(1))
    // debouncedFetchData()
  }, [dispatch])

  const onChangeTab = useCallback((value: string) => {
    dispatch(endpointsPageActions.setTab(value))
    dispatch(endpointsPageActions.setPage(1))
    //    fetchData()
  }, [dispatch])

  return {
    hasMore,
    page,
    limit,
    view,
    sort,
    order,
    tab,
    search,
    onChangeView,
    onChangeSort,
    onChangeTab,
    onChangeSearch,
    onChangeHasMore,
    onChangePage
  }
}
