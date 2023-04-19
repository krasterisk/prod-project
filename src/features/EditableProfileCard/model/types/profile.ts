import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../model/consts/consts'

export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    email?: string
    currency?: Currency
    country?: Country
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
