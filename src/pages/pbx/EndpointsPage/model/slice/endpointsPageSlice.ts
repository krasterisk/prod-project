import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EndpointsPageSchema } from '../../..'
import { ENDPOINTS_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { SortOrder } from '@/shared/types/sort'
import { Endpoint, EndpointSortField } from '@/entities/Pbx'
import { ContentView } from '@/entities/Content'

const endpointsAdapter = createEntityAdapter<Endpoint>({
  selectId: (endpoint) => endpoint.id
})

export const endpointsPageSlice = createSlice({
  name: 'endpointsPageSlice',
  initialState: endpointsAdapter.getInitialState<EndpointsPageSchema>({
    ids: [],
    entities: {},
    page: 1,
    limit: 9,
    hasMore: true,
    // filters
    view: 'SMALL',
    _inited: false,
    order: 'asc',
    sort: EndpointSortField.EXTEN,
    search: ''
  }),
  reducers: {
    setView: (state, action: PayloadAction<ContentView>) => {
      state.view = action.payload
      localStorage.setItem(ENDPOINTS_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<EndpointSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ENDPOINTS_VIEW_LOCALSTORAGE_KEY) as ContentView
      state.view = view
      state.limit = view === 'BIG' ? 4 : 9
      state._inited = true
    }
  }
})

export const {
  actions: endpointsPageActions,
  reducer: endpointsPageReducer
} = endpointsPageSlice
