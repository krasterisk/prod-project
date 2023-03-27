import jwtDecode from 'jwt-decode'

interface tokenData {
    id: number
}

export const getTokenData = (token: string | undefined) => {
    let data: tokenData | undefined
    if (token) {
        data = jwtDecode(token)
    }
    if (!data?.id) {
        return null
    }
    return data?.id
}
