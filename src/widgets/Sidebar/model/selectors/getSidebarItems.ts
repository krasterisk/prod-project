import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { SidebarItemType } from '../types/sidebar'
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg'
import ManualIconDeprecated from '@/shared/assets/icons/manual-20-20.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import ManualIcon from '@/shared/assets/icons/article.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'

import { getTokenData } from '@/app/providers/getTokenData/getTokenData'
import {
  getRouteAbout,
  getRouteMain,
  getRouteManuals,
  getRouteProfile
} from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'

export const getSidebarItems = createSelector(
  getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => MainIconDeprecated,
          on: () => MainIcon
        }),
        text: 'Главная'
      },
      {
        path: getRouteAbout(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => AboutIconDeprecated,
          on: () => AboutIcon
        }),
        text: 'О Сайте'
      }
    ]
    if (userData) {
      const userId = String(getTokenData(userData.token))
      sidebarItemsList.push(
        {
          path: getRouteProfile(userId),
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ProfileIconDeprecated,
            on: () => ProfileIcon
          }),
          text: 'Профиль',
          authOnly: true
        },
        {
          path: getRouteManuals(),
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ManualIconDeprecated,
            on: () => ManualIcon
          }),
          text: 'Документация',
          authOnly: true
        }
      )
    }
    return sidebarItemsList
  }
)
