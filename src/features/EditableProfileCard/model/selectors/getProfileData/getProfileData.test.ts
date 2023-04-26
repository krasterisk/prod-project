import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('getProfileData.test', () => {
    test('should return true', () => {
        const data = {
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
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
