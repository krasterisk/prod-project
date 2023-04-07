import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchManualsList } from './fetchManualsList'

// const data = {
//     id: '1',
//     title: 'test'
// }

describe('fetchManualsList.test', () => {
    // test('success', async () => {
    //     const thunk = new TestAsyncThunk(fetchManualsList)
    //     thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    //     const result = await thunk.callThunk({})
    //
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(data)
    // })

    test('invalid', async () => {
        const thunk = new TestAsyncThunk(fetchManualsList)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({})
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
