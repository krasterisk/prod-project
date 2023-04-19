export {
    userReducer,
    userActions
} from './model/slice/userSlice'

export {
    isUserOperator,
    isUserUser,
    isUserAdmin,
    isUserSupervisor,
    isUserVPBXAdmin
} from './model/selectors/roleSelector'

export type {
    User,
    UserSchema,
    UserRoles
} from './model/types/user'
export { UserRolesValues } from './model/types/user'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted'
