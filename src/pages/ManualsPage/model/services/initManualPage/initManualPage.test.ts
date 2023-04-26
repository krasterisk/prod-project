import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { initManualPage } from './initManualPage'
import { fetchManualsList } from '../../services/fetchManualsList/fetchManualsList'

jest.mock('../fetchManualsList/fetchManualsList')
describe('initManualPage.test', () => {
    test('called fetchManualList on not inited state', async () => {
        const searchParams = new URLSearchParams({
            sort: 'cratedAt',
            order: 'asc',
            search: '123'
        })
        const thunk = new TestAsyncThunk(initManualPage, {
            manualsPage: {
                page: 1,
                hasMore: true,
                view: 'SMALL',
                entities: {},
                limit: 5,
                _inited: false
            }
        })

        await thunk.callThunk(searchParams)
        expect(thunk.dispatch).toBeCalledTimes(7)
        expect(fetchManualsList).toHaveBeenCalled()
    })
    test('not called fetchManualList on inited state', async () => {
        const searchParams = new URLSearchParams({
            sort: 'cratedAt',
            order: 'asc',
            search: '123'
        })
        const thunk = new TestAsyncThunk(initManualPage, {
            manualsPage: {
                page: 1,
                hasMore: true,
                view: 'SMALL',
                entities: {},
                limit: 5,
                _inited: true
            }
        })

        await thunk.callThunk(searchParams)
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchManualsList).not.toHaveBeenCalled()
    })
})
