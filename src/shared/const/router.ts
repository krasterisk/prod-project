export enum AppRoutes {
  MAIN = 'main',
  ENDPOINTS = 'endpoints',
  CONTEXTS = 'contexts',
  ABOUT = 'about',
  PROFILE = 'profile',
  ADMIN = 'admin',
  SETTINGS = 'settings',
  MANUALS = 'manuals',
  MANUAL_DETAILS = 'manual_details',
  MANUAL_CREATE = 'manuals_create',
  MANUAL_EDIT = 'manual_edit',
  ENDPOINT_EDIT = 'endpoint_edit',
  ENDPOINT_CREATE = 'endpoint_create',
  FORBIDDEN = 'forbidden',
  ERROR = 'error'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteAdmin = () => '/admin'
export const getRouteEndpoints = () => '/endpoints'
export const getRouteContexts = () => '/contexts'
export const getRouteSettings = () => '/settings'
export const getRouteManuals = () => '/manuals'
export const getRouteManualDetails = (id: string) => `/manuals/${id}`
export const getRouteManualEdit = (id: string) => `/manuals/${id}/edit`
export const getRouteManualCreate = () => '/manuals/create'
export const getRouteEndpointCreate = () => '/endpoints/create'
export const getRouteContextCreate = () => '/contexts/create'
export const getRouteContextEdit = (id: string) => `/contexts/${id}`
export const getRouteEndpointEdit = (id: string) => `/endpoints/${id}`
export const getRouteForbidden = () => '/forbidden'
export const getRouteProfile = (id: string) => `/profile/${id}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteEndpoints()]: AppRoutes.ENDPOINTS,
  [getRouteContexts()]: AppRoutes.CONTEXTS,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteAdmin()]: AppRoutes.ADMIN,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteManuals()]: AppRoutes.MANUALS,
  [getRouteManualDetails(':id')]: AppRoutes.MANUAL_DETAILS,
  [getRouteManualCreate()]: AppRoutes.MANUAL_CREATE,
  [getRouteManualEdit(':id')]: AppRoutes.MANUAL_EDIT,
  [getRouteEndpointEdit(':id')]: AppRoutes.ENDPOINT_EDIT,
  [getRouteEndpointCreate()]: AppRoutes.ENDPOINT_CREATE,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN
}
