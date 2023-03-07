import { Country, Currency } from 'shared/const/common'

export interface Profile {
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
}
