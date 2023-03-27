export interface User {
    id: string
    username: string
    password?: string
    avatar?: string
    token?: string
}

export interface UserSchema {
    authData?: User
    _mounted: boolean
}
