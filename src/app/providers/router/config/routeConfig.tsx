import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPage } from '@/pages/AdminPage'
import { UserRolesValues } from '@/entities/User'
import { ProfilePage } from '@/pages/ProfilePage'
import { ManualsPage } from '@/pages/ManualsPage'
import { ManualDetailsPage } from '@/pages/ManualDetailsPage'
import { ManualEditPage } from '@/pages/ManualEditPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { ErrorPage } from '@/pages/ErrorPage'
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdmin,
  getRouteForbidden,
  getRouteMain,
  getRouteManualCreate,
  getRouteManualDetails,
  getRouteManualEdit,
  getRouteManuals,
  getRouteProfile,
  getRouteSettings,
  getRouteEndpointCreate,
  getRouteEndpointEdit,
  getRouteEndpoints
} from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'
import { EndpointsPage } from '@/pages/EndpointsPage'
import { SettingPage } from '@/pages/SettingsPage'
import { EndpointCard } from '@/entities/Endpoints'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage/>
  },
  [AppRoutes.ENDPOINTS]: {
    path: getRouteEndpoints(),
    element: <EndpointsPage />
  },
  [AppRoutes.ENDPOINT_CREATE]: {
    path: getRouteEndpointCreate(),
    element: <EndpointCard create />,
    authOnly: false
  },
  [AppRoutes.ENDPOINT_EDIT]: {
    path: getRouteEndpointEdit(':id'),
    element: <EndpointCard />,
    authOnly: false
  },
  [AppRoutes.ADMIN]: {
    path: getRouteAdmin(),
    element: <AdminPage/>,
    authOnly: true,
    roles: [UserRolesValues.ADMIN, UserRolesValues.USER]
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage/>,
    authOnly: false
  },
  [AppRoutes.MANUALS]: {
    path: getRouteManuals(),
    element: <ManualsPage/>,
    authOnly: false
  },
  [AppRoutes.MANUAL_DETAILS]: {
    path: getRouteManualDetails(':id'),
    element: <ManualDetailsPage/>,
    authOnly: false
  },
  [AppRoutes.MANUAL_EDIT]: {
    path: getRouteManualEdit(':id'),
    element: <ManualEditPage/>,
    authOnly: false
  },
  [AppRoutes.MANUAL_CREATE]: {
    path: getRouteManualCreate(),
    element: <ManualEditPage/>,
    authOnly: true
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    element: <SettingPage />,
    authOnly: false
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage/>
  },
  [AppRoutes.ERROR]: {
    path: '*',
    element: <ErrorPage/>
  }

}
