import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getUserAuthData } from '@/entities/User'
import { getManualDetailsData } from '@/entities/Manual'
import { Comments } from '@/entities/Comment'
import { fetchCommentsByManualId } from '../../service/fetchCommentsByManualId/fetchCommentsByManualId'
import { getTokenData } from '@/app/providers/getTokenData/getTokenData'

export const addCommentForManual = createAsyncThunk<
Comments,
string,
ThunkConfig<string>>(
  'manualDetailsPage/addCommentForManual',
  async (text, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      dispatch,
      getState
    } = thunkAPI

    const userData = getUserAuthData(getState())
    const manual = getManualDetailsData(getState())
    const decodeUserData = getTokenData(userData?.token)

    if (!userData || !text || !manual) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comments>('/comments', {
        postId: manual?.id,
        userId: decodeUserData,
        text
      })
      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByManualId(manual.id))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
