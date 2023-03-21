import { StateSchema } from 'app/providers/StoreProvider'
import { getManualDetailsData, getManualDetailsError, getManualDetailsIsLoading } from './manualDetails'

describe('manualDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'test'
        }

        const state: DeepPartial<StateSchema> = {
            manualDetails: {
                data
            }
        }
        expect(getManualDetailsData(state as StateSchema)).toEqual(data)
    })

    test('work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getManualDetailsData(state as StateSchema)).toEqual(undefined)
    })

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            manualDetails: {
                isLoading: true
            }
        }
        expect(getManualDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getManualDetailsIsLoading(state as StateSchema)).toEqual(false)
    })

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            manualDetails: {
                error: 'error'
            }
        }
        expect(getManualDetailsError(state as StateSchema)).toEqual('error')
    })

    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getManualDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
