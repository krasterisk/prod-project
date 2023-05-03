import { Story } from '@storybook/react'
// todo
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line krasterisk-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line krasterisk-plugin/public-api-imports
import { manualDetailsReducer } from '@/entities/Manual/model/slice/manualDetailsSlice'
// eslint-disable-next-line krasterisk-plugin/public-api-imports
import { AddCommentFormReducer } from '@/features/AddCommentForm/model/slice/AddCommentFormSlice'
// eslint-disable-next-line krasterisk-plugin/public-api-imports
import { manualDetailsPageReducer } from '@/pages/ManualDetailsPage/model/slices'
// eslint-disable-next-line krasterisk-plugin/public-api-imports
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profileForm: profileReducer,
    manualDetails: manualDetailsReducer,
    addCommentForm: AddCommentFormReducer,
    manualDetailsPage: manualDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
}
