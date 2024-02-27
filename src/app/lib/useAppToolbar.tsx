import { AppRoutes } from '@/shared/const/router'
import { ReactElement } from 'react'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'
import { useRouteChange } from '@/shared/lib/router/useRouteChange'

export function useAppToolbar () {
  const appRoute = useRouteChange()
  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.MANUAL_DETAILS]: <ScrollToolbar />,
    [AppRoutes.MANUALS]: <ScrollToolbar />,
    [AppRoutes.MAIN]: <ScrollToolbar />
  }

  return toolbarByAppRoute[appRoute]
}
