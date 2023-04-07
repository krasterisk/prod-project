import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'features/EditableProfileCard'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualDetailsReducer } from 'entities/Manual/model/slice/manualDetailsSlice'
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slice/AddCommentFormSlice'
import { manualDetailsPageReducer } from 'pages/ManualDetailsPage/model/slices'

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
