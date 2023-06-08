import { UserRolesValues } from '../consts/consts'

export interface UserRoles {
  id?: string
  value: UserRolesValues
}

export interface User {
  id: string
  username: string
  password?: string
  avatar?: string
  token?: string
  roles?: UserRoles[]
}

export interface UserSchema {
  authData?: User
  _mounted: boolean
}
