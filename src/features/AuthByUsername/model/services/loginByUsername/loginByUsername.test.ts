import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        const userValue = { username: 'admin', password: 'something_token' }
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('invalid login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
