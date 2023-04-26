import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profileForm: {
                error: 'error'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('error')
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
