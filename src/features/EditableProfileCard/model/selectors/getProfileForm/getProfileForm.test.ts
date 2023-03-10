import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm.test', () => {
    test('should return true', () => {
        const form = {
            firstname: 'First',
            lastname: 'Last',
            age: 19,
            username: 'Username',
            email: 'mail@email.com',
            country: Country.Russia,
            currency: Currency.RUB
        }
        const state: DeepPartial<StateSchema> = {
            profileForm: {
                form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
