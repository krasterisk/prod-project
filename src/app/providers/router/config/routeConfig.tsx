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
import { AppRoutes, RoutePath } from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath[AppRoutes.ADMIN],
        element: <AdminPage/>,
        authOnly: true,
        roles: [UserRolesValues.ADMIN, UserRolesValues.USER]
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.MANUALS]: {
        path: RoutePath[AppRoutes.MANUALS],
        element: <ManualsPage/>,
        authOnly: true
    },
    [AppRoutes.MANUAL_DETAILS]: {
        path: `${RoutePath[AppRoutes.MANUAL_DETAILS]}:id`,
        element: <ManualDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.MANUAL_EDIT]: {
        path: `${RoutePath[AppRoutes.MANUAL_EDIT]}`,
        element: <ManualEditPage/>,
        authOnly: true
    },
    [AppRoutes.MANUAL_CREATE]: {
        path: `${RoutePath[AppRoutes.MANUAL_CREATE]}`,
        element: <ManualEditPage/>,
        authOnly: true
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath[AppRoutes.FORBIDDEN],
        element: <ForbiddenPage/>
    },
    [AppRoutes.ERROR]: {
        path: RoutePath[AppRoutes.ERROR],
        element: <ErrorPage/>
    }

}
