export enum AppRoutes {
  MAIN = 'main',
  PEERS = 'peers',
  ABOUT = 'about',
  PROFILE = 'profile',
  ADMIN = 'admin',
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
export const getRoutePeers = () => '/peers'
export const getRouteManuals = () => '/manuals'
export const getRouteManualDetails = (id: string) => `/manuals/${id}`
export const getRouteManualEdit = (id: string) => `/manuals/${id}/edit`
export const getRouteManualCreate = () => '/manuals/create'
export const getRouteForbidden = () => '/forbidden'
export const getRouteProfile = (id: string) => `/profile/${id}`
