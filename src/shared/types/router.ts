import { RouteProps } from 'react-router-dom'
import { UserRolesValues } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRolesValues[]
}
