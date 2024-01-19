import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getContextsHasMore,
  getContextsPageLimit,
  getContextsPageNum,
  getContextsPageOrder,
  getContextsPageSearch,
  getContextsPageSort,
  getContextsPageView,
  getContextsTab
} from '../../model/selectors/contextsPageSelectors'
import { ContentView } from '@/entities/Content'
import { useGetAllContexts } from '../../api/contextsApi'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { contextsPageActions } from '../../model/slice/contextsPageSlice'
import { getUserAuthData } from '@/entities/User'
import { ContextSortField } from '../../../../../entities/Pbx/Contexts/model/consts/consts'

export function useContextFilters () {
  const page = useSelector(getContextsPageNum)
  const limit = useSelector(getContextsPageLimit)
  const order = useSelector(getContextsPageOrder)
  const hasMore = useSelector(getContextsHasMore)
  const view = useSelector(getContextsPageView)
  const sort = useSelector(getContextsPageSort)
  const tab = useSelector(getContextsTab)
  const search = useSelector(getContextsPageSearch)

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
  } = useGetAllContexts({ vpbx_user_id, page, limit, sort, order, search: newSearch })

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNext = useCallback(() => {
    if (data && hasMore && !isLoading && !isFetching) {
      dispatch(contextsPageActions.setPage(page + 1))
      const isHasMore = data.count > ((page + 1) * limit)
      dispatch(contextsPageActions.setHasMore(isHasMore))
    }
  }, [data, dispatch, hasMore, isFetching, isLoading, limit, page])

  const onChangeView = useCallback((view: ContentView) => {
    dispatch(contextsPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: ContextSortField) => {
    dispatch(contextsPageActions.setSort(sort))
    dispatch(contextsPageActions.setPage(1))
  }, [dispatch])

  const debouncedSearch = useDebounce((search: string) => { setNewSearch(search) }, 500)

  const onChangeSearch = useCallback((search: string) => {
    dispatch(contextsPageActions.setSearch(search))
    dispatch(contextsPageActions.setPage(1))
    debouncedSearch(search)
  }, [debouncedSearch, dispatch])

  const onChangePage = useCallback((page: number) => {
    dispatch(contextsPageActions.setPage(page))
  }, [dispatch])

  const onChangeHasMore = useCallback((hasMore: boolean) => {
    dispatch(contextsPageActions.setHasMore(hasMore))
  }, [dispatch])

  // const onChangeOrder = useCallback((order: SortOrder) => {
  //   dispatch(contextsPageActions.setOrder(order))
  //   dispatch(contextsPageActions.setPage(1))
  // }, [dispatch])

  const onChangeTab = useCallback((value: string) => {
    dispatch(contextsPageActions.setTab(value))
    dispatch(contextsPageActions.setPage(1))
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
