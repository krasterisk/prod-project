import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { ContentView } from '@/entities/Content'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { getUserAuthData } from '@/entities/User'
import {
  getEndpointGroupsHasMore,
  getEndpointGroupsPageLimit,
  getEndpointGroupsPageNum,
  getEndpointGroupsPageOrder,
  getEndpointGroupsPageSearch,
  getEndpointGroupsPageSort,
  getEndpointGroupsPageView
} from '../../model/selectors/EndpointGroupsPageSelectors'
import { useEndpointGroupsPage } from '../../api/endpointGroupsApi'
import { endpointGroupsPageActions } from '../../model/slice/endpointGroupsPageSlice'
import { EndpointGroupsSortField } from '@/entities/Pbx'

export function useEndpointGroupsFilters () {
  const page = useSelector(getEndpointGroupsPageNum)
  const limit = useSelector(getEndpointGroupsPageLimit)
  const order = useSelector(getEndpointGroupsPageOrder)
  const hasMore = useSelector(getEndpointGroupsHasMore)
  const view = useSelector(getEndpointGroupsPageView)
  const sort = useSelector(getEndpointGroupsPageSort)
  const search = useSelector(getEndpointGroupsPageSearch)

  const dispatch = useAppDispatch()
  const [newSearch, setNewSearch] = useState<string>('')
  const authData = useSelector(getUserAuthData)
  const vpbx_user_id = authData?.vpbx_user_id || '0'

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useEndpointGroupsPage({ vpbx_user_id, page, limit, sort, order, search: newSearch })

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNext = useCallback(() => {
    if (data && hasMore && !isLoading && !isFetching) {
      dispatch(endpointGroupsPageActions.setPage(page + 1))
      const isHasMore = data.count > ((page + 1) * limit)
      dispatch(endpointGroupsPageActions.setHasMore(isHasMore))
    }
  }, [data, dispatch, hasMore, isFetching, isLoading, limit, page])

  const onChangeView = useCallback((view: ContentView) => {
    dispatch(endpointGroupsPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: EndpointGroupsSortField) => {
    dispatch(endpointGroupsPageActions.setSort(sort))
    dispatch(endpointGroupsPageActions.setPage(1))
  }, [dispatch])

  const debouncedSearch = useDebounce((search: string) => { setNewSearch(search) }, 500)

  const onChangeSearch = useCallback((search: string) => {
    dispatch(endpointGroupsPageActions.setSearch(search))
    dispatch(endpointGroupsPageActions.setPage(1))
    debouncedSearch(search)
  }, [debouncedSearch, dispatch])

  const onChangePage = useCallback((page: number) => {
    dispatch(endpointGroupsPageActions.setPage(page))
  }, [dispatch])

  const onChangeHasMore = useCallback((hasMore: boolean) => {
    dispatch(endpointGroupsPageActions.setHasMore(hasMore))
  }, [dispatch])

  // const onChangeOrder = useCallback((order: SortOrder) => {
  //   dispatch(endpointGroupsPageActions.setOrder(order))
  //   dispatch(endpointGroupsPageActions.setPage(1))
  // }, [dispatch])

  const onChangeTab = useCallback((value: string) => {
    dispatch(endpointGroupsPageActions.setTab(value))
    dispatch(endpointGroupsPageActions.setPage(1))
  }, [dispatch])

  return {
    hasMore,
    page,
    limit,
    view,
    sort,
    order,
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
