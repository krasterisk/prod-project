export enum AppRoutes {
  MAIN = 'main',
  CONTEXTS = 'contexts',
  CONTEXT_CREATE = 'context_create',
  CONTEXT_EDIT = 'context_edit',
  ABOUT = 'about',
  PROFILE = 'profile',
  ADMIN = 'admin',
  SETTINGS = 'settings',
  MANUALS = 'manuals',
  MANUAL_DETAILS = 'manual_details',
  MANUAL_CREATE = 'manuals_create',
  MANUAL_EDIT = 'manual_edit',
  ENDPOINTS = 'endpoints',
  ENDPOINT_EDIT = 'endpoint_edit',
  ENDPOINT_CREATE = 'endpoint_create',
  ENDPOINT_GROUPS = 'endpoints_groups',
  ENDPOINT_GROUPS_EDIT = 'endpoints_group_edit',
  ENDPOINT_GROUPS_CREATE = 'endpoints_group_create',
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
export const getRouteManualEdit = (id: string) => `/manuals/${id}`
export const getRouteManualCreate = () => '/manuals/create'
export const getRouteEndpointCreate = () => '/endpoints/create'
export const getRouteContextCreate = () => '/contexts/create'
export const getRouteContextEdit = (id: string) => `/contexts/${id}`
export const getRouteEndpointEdit = (id: string) => `/endpoints/${id}`
export const getRouteEndpointGroups = () => '/endpoints-groups'
export const getRouteEndpointGroupsCreate = () => '/endpoints-groups/create'
export const getRouteEndpointGroupsEdit = (id: string) => `/endpoints-groups/${id}`
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteForbidden = () => '/forbidden'

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteAdmin()]: AppRoutes.ADMIN,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteManuals()]: AppRoutes.MANUALS,
  [getRouteManualDetails(':id')]: AppRoutes.MANUAL_DETAILS,
  [getRouteManualCreate()]: AppRoutes.MANUAL_CREATE,
  [getRouteManualEdit(':id')]: AppRoutes.MANUAL_EDIT,
  [getRouteEndpoints()]: AppRoutes.ENDPOINTS,
  [getRouteEndpointEdit(':id')]: AppRoutes.ENDPOINT_EDIT,
  [getRouteEndpointCreate()]: AppRoutes.ENDPOINT_CREATE,
  [getRouteContexts()]: AppRoutes.CONTEXTS,
  [getRouteContextCreate()]: AppRoutes.CONTEXT_CREATE,
  [getRouteContextEdit(':id')]: AppRoutes.CONTEXT_EDIT,
  [getRouteEndpointGroups()]: AppRoutes.ENDPOINT_GROUPS,
  [getRouteEndpointGroupsEdit(':id')]: AppRoutes.ENDPOINT_GROUPS_EDIT,
  [getRouteEndpointGroupsCreate()]: AppRoutes.ENDPOINT_GROUPS_CREATE,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN
}
