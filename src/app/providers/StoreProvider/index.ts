import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, AppDispatch } from './config/store'
import type { StateSchema, ThunkExtraArg, ThunkConfig } from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type AppDispatch,
    type ThunkExtraArg,
    type ThunkConfig
}
