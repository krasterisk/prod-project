import { StateSchema } from 'app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { UserRolesValues } from '../types/user'
import { getTokenAllData } from 'shared/api/getTokenData/getTokenData'

const getUserRoles = (state: StateSchema) => state.user.authData?.token

export const isUserAdmin = createSelector(getUserRoles, (token) => {
    const getUserToken = getTokenAllData(token)
    const roles = getUserToken?.roles

    if (!roles) {
        return false
    }

    const isAdmin = (roles) => roles.some(role => role.value === UserRolesValues.ADMIN)
})

export const isUserOperator = createSelector(getUserRoles, (token) => {
    const getUserToken = getTokenAllData(token)
    const getRoles = getUserToken?.roles
    return Boolean(getRoles?.includes(
        {
            value: UserRolesValues.OPERATOR
        }))
})

export const isUserUser = createSelector(getUserRoles, (token) => {
    const getUserToken = getTokenAllData(token)
    const getRoles = getUserToken?.roles
    return Boolean(getRoles?.includes(
        {
            value: UserRolesValues.USER
        }))
})

export const isUserSupervisor = createSelector(getUserRoles, (token) => {
    const getUserToken = getTokenAllData(token)
    const getRoles = getUserToken?.roles
    return Boolean(getRoles?.includes(
        {
            value: UserRolesValues.SUPERVISOR
        }))
})

export const isUserVPBXAdmin = createSelector(getUserRoles, (token) => {
    const getUserToken = getTokenAllData(token)
    const getRoles = getUserToken?.roles
    return Boolean(getRoles?.includes(
        {
            value: UserRolesValues.VPBXADMIN
        }))
})
