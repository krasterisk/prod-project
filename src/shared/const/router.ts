export enum AppRoutes {
  MAIN = 'main',
  ENDPOINTS = 'endpoints',
  ABOUT = 'about',
  PROFILE = 'profile',
  ADMIN = 'admin',
  SETTINGS = 'settings',
  MANUALS = 'manuals',
  MANUAL_DETAILS = 'manual_details',
  MANUAL_CREATE = 'manuals_create',
  MANUAL_EDIT = 'manual_edit',
  FORBIDDEN = 'forbidden',
  ERROR = 'error'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteAdmin = () => '/admin'
export const getRoutePeers = () => '/endpoints'
export const getRouteSettings = () => '/settings'
export const getRouteManuals = () => '/manuals'
export const getRouteManualDetails = (id: string) => `/manuals/${id}`
export const getRouteManualEdit = (id: string) => `/manuals/${id}/edit`
export const getRouteManualCreate = () => '/manuals/create'
export const getRouteForbidden = () => '/forbidden'
export const getRouteProfile = (id: string) => `/profile/${id}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRoutePeers()]: AppRoutes.ENDPOINTS,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteAdmin()]: AppRoutes.ADMIN,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteManuals()]: AppRoutes.MANUALS,
  [getRouteManualDetails(':id')]: AppRoutes.MANUAL_DETAILS,
  [getRouteManualCreate()]: AppRoutes.MANUAL_CREATE,
  [getRouteManualEdit(':id')]: AppRoutes.MANUAL_EDIT,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN
}
