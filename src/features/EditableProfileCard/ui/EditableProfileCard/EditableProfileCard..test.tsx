import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { Profile } from '../../model/types/profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import { userEvent } from '@testing-library/user-event/setup/index'

const profile: Profile = {
    firstname: 'First',
    lastname: 'Last',
    age: 20,
    username: 'Username',
    email: 'mail@email.com',
    country: Country.Russia,
    currency: Currency.RUB
}

describe('features/EditableProfileCard', () => {
    test('Render test', () => {
        componentRender(<EditableProfileCard id={'1'} />, {
            initialState: {
                profileForm: {
                    readonly: true,
                    data: profile,
                    form: profile,
                    isLoading: false
                }
            },
            asyncReducers: {
                profileForm: profileReducer
            }
        })
    })
})
