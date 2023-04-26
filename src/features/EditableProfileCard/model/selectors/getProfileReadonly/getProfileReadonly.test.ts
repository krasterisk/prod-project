import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profileForm: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
    })
})
