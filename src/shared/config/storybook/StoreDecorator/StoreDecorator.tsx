import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualDetailsReducer } from '@/entities/Manual/testing'
import { AddCommentFormReducer } from '@/features/AddCommentForm/testing'
import { manualDetailsPageReducer } from '@/pages/ManualDetailsPage/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'

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
