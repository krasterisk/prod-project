import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { ErrorPage } from 'pages/ErrorPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ManualsPage } from 'pages/ManualsPage'
import { ManualDetailsPage } from 'pages/ManualDetailsPage'
import { ManualEditPage } from 'pages/ManualEditPage'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    MANUALS = 'manuals',
    MANUAL_DETAILS = 'manual_details',
    MANUAL_CREATE = 'manuals_create',
    MANUAL_EDIT = 'manual_edit',
    ERROR = 'error',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.MANUALS]: '/manuals',
    [AppRoutes.MANUAL_DETAILS]: '/manuals/',
    [AppRoutes.MANUAL_EDIT]: '/manuals/:id/edit',
    [AppRoutes.MANUAL_CREATE]: '/manuals/create',
    [AppRoutes.ERROR]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.MANUALS]: {
        path: RoutePath[AppRoutes.MANUALS],
        element: <ManualsPage />,
        authOnly: true
    },
    [AppRoutes.MANUAL_DETAILS]: {
        path: `${RoutePath[AppRoutes.MANUAL_DETAILS]}:id`,
        element: <ManualDetailsPage />,
        authOnly: true
    },
    [AppRoutes.MANUAL_EDIT]: {
        path: `${RoutePath[AppRoutes.MANUAL_EDIT]}`,
        element: <ManualEditPage />,
        authOnly: true
    },
    [AppRoutes.MANUAL_CREATE]: {
        path: `${RoutePath[AppRoutes.MANUAL_CREATE]}`,
        element: <ManualEditPage />,
        authOnly: true
    },
    [AppRoutes.ERROR]: {
        path: RoutePath[AppRoutes.ERROR],
        element: <ErrorPage />
    }

}
