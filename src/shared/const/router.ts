export enum AppRoutes {
    MAIN = 'main',
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

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.MANUALS]: '/manuals',
    [AppRoutes.MANUAL_DETAILS]: '/manuals/',
    [AppRoutes.MANUAL_EDIT]: '/manuals/:id/edit',
    [AppRoutes.MANUAL_CREATE]: '/manuals/create',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.ERROR]: '*'
}
