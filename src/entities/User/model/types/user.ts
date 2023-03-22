export interface User {
    username: string
    password?: string
    avatar?: string
}

export interface UserSchema {
    authData?: User
    _mounted: boolean
}
