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
    getRouteProfile
} from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
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
        authOnly: true
    },
    [AppRoutes.MANUALS]: {
        path: getRouteManuals(),
        element: <ManualsPage/>,
        authOnly: true
    },
    [AppRoutes.MANUAL_DETAILS]: {
        path: getRouteManualDetails(':id'),
        element: <ManualDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.MANUAL_EDIT]: {
        path: getRouteManualEdit(':id'),
        element: <ManualEditPage/>,
        authOnly: true
    },
    [AppRoutes.MANUAL_CREATE]: {
        path: getRouteManualCreate(),
        element: <ManualEditPage/>,
        authOnly: true
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
