import { RouteProps } from 'react-router-dom'
// eslint-disable-next-line krasterisk-plugin/layer-imports
import { UserRolesValues } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRolesValues[]
}
