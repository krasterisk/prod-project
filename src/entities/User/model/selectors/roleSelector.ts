import { StateSchema } from '@/app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { getTokenAllData } from '@/app/providers/getTokenData/getTokenData'
import { UserRolesValues } from '../consts/consts'

const getUserRoles = (state: StateSchema) => state.user.authData?.token

export const getAllUserRoles = createSelector(getUserRoles, (token) => {
  const getUserToken = getTokenAllData(token)
  const roles = getUserToken?.roles
  return roles?.map(role => role.value)
})

export const isUserAdmin = createSelector(getUserRoles, (token) => {
  const getUserToken = getTokenAllData(token)
  const roles = getUserToken?.roles

  if (!roles) {
    return false
  }

  return roles.some(role => role.value === UserRolesValues.ADMIN)
})

export const isUserOperator = createSelector(getUserRoles, (token) => {
  const getUserToken = getTokenAllData(token)
  const roles = getUserToken?.roles

  if (!roles) {
    return false
  }

  return roles.some(role => role.value === UserRolesValues.OPERATOR)
})

export const isUserUser = createSelector(getUserRoles, (token) => {
  const getUserToken = getTokenAllData(token)
  const roles = getUserToken?.roles

  if (!roles) {
    return false
  }

  return roles.some(role => role.value === UserRolesValues.USER)
})

export const isUserSupervisor = createSelector(getUserRoles, (token) => {
  const getUserToken = getTokenAllData(token)
  const roles = getUserToken?.roles

  if (!roles) {
    return false
  }

  return roles.some(role => role.value === UserRolesValues.SUPERVISOR)
})

export const isUserVPBXAdmin = createSelector(getUserRoles, (token) => {
  const getUserToken = getTokenAllData(token)
  const roles = getUserToken?.roles

  if (!roles) {
    return false
  }

  return roles.some(role => role.value === UserRolesValues.VPBXADMIN)
})
