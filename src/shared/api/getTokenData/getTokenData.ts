import jwtDecode from 'jwt-decode'
import { User } from 'entities/User'

export const getTokenData = (token: string | undefined) => {
    let data: User | undefined
    if (token) {
        data = jwtDecode(token)
    }
    if (!data?.id) {
        return null
    }
    return data?.id
}

export const getTokenAllData = (token: string | undefined) => {
    let data: User | undefined
    if (token) {
        data = jwtDecode(token)
    }
    return data
}
