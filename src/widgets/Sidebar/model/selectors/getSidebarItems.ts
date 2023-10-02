import { getUserAuthData } from '@/entities/User'
import { SidebarItemType } from '../types/sidebar'
import MainIcon from '@/shared/assets/icons/home.svg'
import ManualIcon from '@/shared/assets/icons/article.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'

import { getTokenData } from '@/app/providers/getTokenData/getTokenData'
import {
  getRouteAbout,
  getRouteMain,
  getRouteManuals,
  getRouteEndpoints,
  getRouteProfile
} from '@/shared/const/router'
import { useSelector } from 'react-redux'

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData)
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная'
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'О Сайте'
    }
  ]
  if (userData) {
    const userId = String(getTokenData(userData.token))
    sidebarItemsList.push(
      {
        path: getRouteEndpoints(),
        Icon: ProfileIcon,
        text: 'Абоненты',
        authOnly: false
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
  return sidebarItemsList
}
