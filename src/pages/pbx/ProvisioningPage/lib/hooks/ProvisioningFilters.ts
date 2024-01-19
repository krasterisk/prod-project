import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ContentView } from '@/entities/Content'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { getUserAuthData } from '@/entities/User'
import {
  getProvisioningHasMore,
  getProvisioningPageLimit,
  getProvisioningPageNum,
  getProvisioningPageOrder,
  getProvisioningPageSearch,
  getProvisioningPageSort,
  getProvisioningPageView
} from '../../model/selectors/ProvisioningPageSelectors'
import { useProvisionsPage } from '../../api/provisioningApi'
import { provisioningPageActions } from '../../model/slice/provisioningPageSlice'
import { ProvisionTemplatesSortField } from '@/entities/Pbx'

export function useProvisioningFilters () {
  const page = useSelector(getProvisioningPageNum)
  const limit = useSelector(getProvisioningPageLimit)
  const order = useSelector(getProvisioningPageOrder)
  const hasMore = useSelector(getProvisioningHasMore)
  const view = useSelector(getProvisioningPageView)
  const sort = useSelector(getProvisioningPageSort)
  const search = useSelector(getProvisioningPageSearch)

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
  } = useProvisionsPage({ vpbx_user_id, page, limit, sort, order, search: newSearch })

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNext = useCallback(() => {
    if (data && hasMore && !isLoading && !isFetching) {
      dispatch(provisioningPageActions.setPage(page + 1))
      const isHasMore = data.count > ((page + 1) * limit)
      dispatch(provisioningPageActions.setHasMore(isHasMore))
    }
  }, [data, dispatch, hasMore, isFetching, isLoading, limit, page])

  const onChangeView = useCallback((view: ContentView) => {
    dispatch(provisioningPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: ProvisionTemplatesSortField) => {
    dispatch(provisioningPageActions.setSort(sort))
    dispatch(provisioningPageActions.setPage(1))
  }, [dispatch])

  const debouncedSearch = useDebounce((search: string) => { setNewSearch(search) }, 500)

  const onChangeSearch = useCallback((search: string) => {
    dispatch(provisioningPageActions.setSearch(search))
    dispatch(provisioningPageActions.setPage(1))
    debouncedSearch(search)
  }, [debouncedSearch, dispatch])

  const onChangePage = useCallback((page: number) => {
    dispatch(provisioningPageActions.setPage(page))
  }, [dispatch])

  const onChangeHasMore = useCallback((hasMore: boolean) => {
    dispatch(provisioningPageActions.setHasMore(hasMore))
  }, [dispatch])

  // const onChangeOrder = useCallback((order: SortOrder) => {
  //   dispatch(provisioningPageActions.setOrder(order))
  //   dispatch(provisioningPageActions.setPage(1))
  // }, [dispatch])

  const onChangeTab = useCallback((value: string) => {
    dispatch(provisioningPageActions.setTab(value))
    dispatch(provisioningPageActions.setPage(1))
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
