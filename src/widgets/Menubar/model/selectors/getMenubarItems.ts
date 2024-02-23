import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import {
  getRouteContexts, getRouteEndpointGroups,
  getRouteEndpoints,
  getRouteMain,
  getRouteManuals,
  getRouteProfile, getRouteProvisioning
} from '@/shared/const/router'
import MainIcon from '@/shared/assets/icons/home.svg'
import EndpointsIcon from '@/shared/assets/icons/endpoints.svg'
import ContextsIcon from '@/shared/assets/icons/contexts.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import ManualIcon from '@/shared/assets/icons/article.svg'
import { MenubarItemType } from '../types/menubar'

export const useMenubarItems = () => {
  const userData = useSelector(getUserAuthData)

  const menubarItemsList: MenubarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная'
    }
  ]
  if (userData) {
    const userId = String(userData.id)
    menubarItemsList.push(
      {
        path: getRouteEndpoints(),
        Icon: EndpointsIcon,
        text: 'Абоненты',
        authOnly: false,
        subItems: [
          {
            path: getRouteContexts(),
            Icon: ContextsIcon,
            text: 'Контексты',
            authOnly: false
          },
          {
            path: getRouteEndpointGroups(),
            Icon: ContextsIcon,
            text: 'Группы',
            authOnly: false
          },
          {
            path: getRouteProvisioning(),
            Icon: ContextsIcon,
            text: 'Автонастройка',
            authOnly: false
          }
        ]
      },
      {
        path: getRouteProfile(userId),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
      },
      {
        path: getRouteManuals(),
        Icon: ManualIcon,
        text: 'Документация',
        authOnly: true
      }
    )
  }
  return menubarItemsList
}
