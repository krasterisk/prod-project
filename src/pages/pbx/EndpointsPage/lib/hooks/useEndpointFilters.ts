import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getEndpointsPageSearch,
  getEndpointsPageSort,
  getEndpointsPageView, getEndpointsTab
} from '../../model/selectors/endpointsPageSelectors'
import { endpointsPageActions } from '../../model/slice/endpointsPageSlice'
import { ContentView } from '@/entities/Content'
import { EndpointSortField } from '@/entities/Pbx'

export function useEndpointFilters () {
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

  const onChangeTab = useCallback((value: string) => {
    dispatch(endpointsPageActions.setTab(value))
    dispatch(endpointsPageActions.setPage(1))
    //    fetchData()
  }, [dispatch])

  return {
    view,
    sort,
    tab,
    search,
    onChangeView,
    onChangeSort,
    onChangeTab,
    onChangeSearch
  }
}
