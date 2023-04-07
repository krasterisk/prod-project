import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileSchema } from 'features/EditableProfileCard'
import { AxiosInstance } from 'axios'
import { ManualDetailsSchema } from 'entities/Manual'
import { ManualDetailsCommentsSchema, ManualDetailsRecommendationsSchema } from 'pages/ManualDetailsPage'
import { AddCommentFormSchema } from 'features/AddCommentForm/model/types/addCommentForm'
import { ManualsPageSchema } from 'pages/ManualsPage'
import { ScrollSaveSchema } from 'features/ScrollSave'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    saveScroll: ScrollSaveSchema

    // Async reducers
    loginForm?: LoginSchema
    profileForm?: ProfileSchema
    manualDetails?: ManualDetailsSchema
    manualDetailsComments?: ManualDetailsCommentsSchema
    manualDetailsRecommendations?: ManualDetailsRecommendationsSchema
    addCommentForm?: AddCommentFormSchema
    manualsPage?: ManualsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey, reducer: (state: any, action: AnyAction) => any) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
