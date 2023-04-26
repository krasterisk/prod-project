import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextManualPage } from './fetchNextManualPage'
import { fetchManualsList } from '../fetchManualsList/fetchManualsList'

jest.mock('../fetchManualsList/fetchManualsList')
describe('fetchNextManualsList.test', () => {
    test('fetchManualList called', async () => {
        const thunk = new TestAsyncThunk(fetchNextManualPage, {
            manualsPage: {
                page: 2,
                hasMore: true,
                view: 'SMALL',
                entities: {},
                limit: 5,
                isLoading: false
            }
        })

        await thunk.callThunk()
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchManualsList).toHaveBeenCalledWith({})
    })
    test('fetchManualList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextManualPage, {
            manualsPage: {
                page: 2,
                hasMore: false,
                view: 'SMALL',
                entities: {},
                limit: 5,
                isLoading: false
            }
        })

        await thunk.callThunk()
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchManualsList).not.toHaveBeenCalled()
    })
})
