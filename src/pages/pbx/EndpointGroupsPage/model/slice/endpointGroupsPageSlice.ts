import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ENDPOINT_GROUPS_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { ContentView } from '@/entities/Content'
import { SortOrder } from '@/shared/types/sort'
import { EndpointGroupsPageSchema } from '../types/endpointGroupsPageSchema'
import { EndpointGroupsSortField } from '@/entities/Pbx'

const initialState: EndpointGroupsPageSchema = {
  page: 1,
  limit: 50,
  hasMore: true,
  // filters
  view: 'SMALL',
  tab: '',
  _inited: false,
  sort: EndpointGroupsSortField.NAME,
  order: 'asc',
  search: ''
}

export const endpointGroupsPageSlice = createSlice({
  name: 'endpointGroupsPageSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ContentView>) => {
      state.view = action.payload
      localStorage.setItem(ENDPOINT_GROUPS_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload
    },
    setTab: (state, action: PayloadAction<string>) => {
      state.tab = action.payload
    },
    setSort: (state, action: PayloadAction<EndpointGroupsSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ENDPOINT_GROUPS_VIEW_LOCALSTORAGE_KEY) as ContentView
      state.view = view
      state.limit = view === 'BIG' ? 25 : 50
      state._inited = true
    }
  }
})

export const {
  actions: endpointGroupsPageActions,
  reducer: endpointGroupsPageReducer
} = endpointGroupsPageSlice
