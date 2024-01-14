import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getContextsInited } from '../../selectors/contextsPageSelectors'
import { contextsPageActions } from '../../../model/slice/contextsPageSlice'

export const initContextsPage = createAsyncThunk<
void | never,
void | never,
ThunkConfig<string>>(
  'ContextsPage/initContextsPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const inited = getContextsInited(getState())
    if (!inited) {
      dispatch(contextsPageActions.initState())
    }
  }
)
