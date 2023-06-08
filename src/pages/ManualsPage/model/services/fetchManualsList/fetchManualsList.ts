import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Manual, ManualHashtagsTypes } from '@/entities/Manual'
import {
  getManualsPageHashtag,
  getManualsPageLimit,
  getManualsPageNum,
  getManualsPageOrder,
  getManualsPageSearch,
  getManualsPageSort
} from '../../../model/selectors/manualsPageSelectors'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

interface FetchManualsListProps {
  replace?: boolean
}

export const fetchManualsList = createAsyncThunk<
Manual[],
FetchManualsListProps,
ThunkConfig<string>
>(
  'ManualPage/fetchManualsList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const limit = getManualsPageLimit(getState())
    const sort = getManualsPageSort(getState())
    const order = getManualsPageOrder(getState())
    const search = getManualsPageSearch(getState())
    const page = getManualsPageNum(getState())
    const hashtag = getManualsPageHashtag(getState())

    try {
      addQueryParams({ sort, order, search, hashtag })
      const response = await extra.api.get<Manual[]>('/manuals', {
        params: {
          limit,
          page,
          sort,
          order,
          search,
          hashtag: hashtag === ManualHashtagsTypes.ALL ? undefined : hashtag
        }
      })
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
