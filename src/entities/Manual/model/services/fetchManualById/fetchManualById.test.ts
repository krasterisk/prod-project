import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchManualById } from './fetchManualById'

const data = {
    id: '1',
    title: 'test'
}

describe('fetchManualById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchManualById)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('invalid', async () => {
        const thunk = new TestAsyncThunk(fetchManualById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('0')
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
