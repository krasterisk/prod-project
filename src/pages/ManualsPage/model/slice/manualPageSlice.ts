import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Manual, ManualHashtagsTypes, ManualView, ManualSortField } from '@/entities/Manual'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ManualsPageSchema } from '../types/manualsPageSchema'
import { fetchManualsList } from '../services/fetchManualsList/fetchManualsList'
import { MANUAL_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

import { SortOrder } from '@/shared/types/sort'

const manualsAdapter = createEntityAdapter<Manual>({
  selectId: (manual) => manual.id
})

export const getManuals = manualsAdapter.getSelectors<StateSchema>(
  (state) => state.manualsPage || manualsAdapter.getInitialState()
)

export const manualPageSlice = createSlice({
  name: 'manualPageSlice',
  initialState: manualsAdapter.getInitialState<ManualsPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'SMALL',
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    order: 'asc',
    sort: ManualSortField.CREATED,
    search: '',
    hashtag: ManualHashtagsTypes.ALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ManualView>) => {
      state.view = action.payload
      localStorage.setItem(MANUAL_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ManualSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setHashtag: (state, action: PayloadAction<ManualHashtagsTypes>) => {
      state.hashtag = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(MANUAL_VIEW_LOCALSTORAGE_KEY) as ManualView
      state.view = view
      state.limit = view === 'BIG' ? 4 : 9
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManualsList.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined

        if (action.meta.arg.replace) {
          manualsAdapter.removeAll(state)
        }
      })
      .addCase(fetchManualsList.fulfilled, (
        state,
        action
      ) => {
        state.isLoading = false
        state.hasMore = action.payload.length >= state.limit

        if (action.meta.arg.replace) {
          manualsAdapter.setAll(state, action.payload)
        } else {
          manualsAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchManualsList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: manualPageActions } = manualPageSlice
export const { reducer: manualPageReducer } = manualPageSlice
