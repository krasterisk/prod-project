import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { User, UserSchema } from '../types/user'
import { setFeatureFlags } from '@/shared/lib/features'
import { getUserFeatureData } from '@/app/providers/getTokenData/getTokenData'

const initialState: UserSchema = { _mounted: false, redesigned: false }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      const token = JSON.stringify(action.payload.token)
      state.redesigned = getUserFeatureData(token)
    },
    initAuthData: (state) => {
      const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)
      if (token) {
        state.authData = JSON.parse(token)
        state.redesigned = getUserFeatureData(token)
        setFeatureFlags({ isAppRedesigned: getUserFeatureData(token) })
      }
      state._mounted = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY)
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
