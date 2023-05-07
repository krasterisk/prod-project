import { StoreProvider } from './ui/StoreProvider'
import { AppDispatch, createReduxStore } from './config/store'
import type {
    StateSchema,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey
} from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type AppDispatch,
    type ThunkConfig,
    type ReduxStoreWithManager,
    type StateSchemaKey
}
