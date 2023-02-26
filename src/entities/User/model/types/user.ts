export interface User {
    username: string
    password: string
}

export interface UserSchema {
    authData?: User
}
