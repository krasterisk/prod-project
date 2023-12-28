import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
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
import { useEndpoints } from '../../api/endpointsApi'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

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
  const [newSearch, setNewSearch] = useState<string>('')

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useEndpoints({ page, limit, sort, search: newSearch, order })

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNext = useCallback(() => {
    if (data && hasMore && !isLoading && !isFetching) {
      dispatch(endpointsPageActions.setPage(page + 1))
      const isHasMore = data.count > ((page + 1) * limit)
      dispatch(endpointsPageActions.setHasMore(isHasMore))
      console.log('page:', page)
      console.log('hasMore:', isHasMore)
      console.log('endpoints length: ', data.rows.length)
      console.log('limit: ', limit)
    }
  }, [data, dispatch, hasMore, isFetching, isLoading, limit, page])

  const onChangeView = useCallback((view: ContentView) => {
    dispatch(endpointsPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: EndpointSortField) => {
    dispatch(endpointsPageActions.setSort(sort))
    dispatch(endpointsPageActions.setPage(1))
  }, [dispatch])

  const debouncedSearch = useDebounce((search: string) => { setNewSearch(search) }, 500)

  const onChangeSearch = useCallback((search: string) => {
    dispatch(endpointsPageActions.setSearch(search))
    dispatch(endpointsPageActions.setPage(1))
    debouncedSearch(search)
  }, [debouncedSearch, dispatch])

  const onChangePage = useCallback((page: number) => {
    dispatch(endpointsPageActions.setPage(page))
  }, [dispatch])

  const onChangeHasMore = useCallback((hasMore: boolean) => {
    dispatch(endpointsPageActions.setHasMore(hasMore))
  }, [dispatch])

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(endpointsPageActions.setOrder(order))
    dispatch(endpointsPageActions.setPage(1))
  }, [dispatch])

  const onChangeTab = useCallback((value: string) => {
    dispatch(endpointsPageActions.setTab(value))
    dispatch(endpointsPageActions.setPage(1))
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
    isError,
    isLoading,
    error,
    data,
    onChangeView,
    onChangeSort,
    onChangeTab,
    onChangeSearch,
    onChangeHasMore,
    onChangePage,
    onRefetch,
    onLoadNext
  }
}
