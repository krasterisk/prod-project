import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileReducer, profileActions } from './profileSlice'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from 'features/EditableProfileCard'

describe('profileSlice.test', () => {
    const data = {
        firstname: 'First',
        lastname: 'Last',
        age: 19,
        username: 'Username',
        email: 'mail@email.com',
        country: Country.Russia,
        currency: Currency.RUB,
        id: '1'
    }
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        })
    })
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '12345'
            })
        )).toEqual({
            form: { username: '12345' }
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data
        })
    })
})
