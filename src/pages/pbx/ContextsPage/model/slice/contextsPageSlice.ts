import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CONTEXTS_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { ContentView } from '@/entities/Content'
import { SortOrder } from '@/shared/types/sort'
import { ContextSortField } from '../../../../../entities/Pbx/Contexts/model/consts/consts'
import { ContextsPageSchema } from '../types/contextsPageSchema'

const initialState: ContextsPageSchema = {
  page: 1,
  limit: 25,
  hasMore: true,
  // filters
  view: 'SMALL',
  tab: '',
  _inited: false,
  sort: ContextSortField.NAME,
  order: 'asc',
  search: ''
}

export const contextsPageSlice = createSlice({
  name: 'contextsPageSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ContentView>) => {
      state.view = action.payload
      localStorage.setItem(CONTEXTS_VIEW_LOCALSTORAGE_KEY, action.payload)
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
    setSort: (state, action: PayloadAction<ContextSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(CONTEXTS_VIEW_LOCALSTORAGE_KEY) as ContentView
      state.view = view
      state.limit = view === 'BIG' ? 25 : 25
      state._inited = true
    }
  }
})

export const {
  actions: contextsPageActions,
  reducer: contextsPageReducer
} = contextsPageSlice
