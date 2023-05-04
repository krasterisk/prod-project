import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { SidebarItemType } from '../types/sidebar'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ManualIcon from '@/shared/assets/icons/manual-20-20.svg'
import { getTokenData } from '@/shared/api/getTokenData/getTokenData'
import { RoutePath } from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getUserAuthData, (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О Сайте'
            }
        ]
        if (userData) {
            const userId = String(getTokenData(userData.token))
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userId,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true
                },
                {
                    path: RoutePath.manuals,
                    Icon: ManualIcon,
                    text: 'Документация',
                    authOnly: true
                }
            )
        }
        return sidebarItemsList
    }
)
