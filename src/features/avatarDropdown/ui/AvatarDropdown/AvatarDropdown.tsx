import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { Dropdown } from '@/shared/ui/Popups'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { getTokenAllData } from '@/shared/api/getTokenData/getTokenData'
import { getUserAuthData, isUserAdmin, isUserVPBXAdmin, userActions } from '@/entities/User'

interface AvatarDropdownProps {
    className?: string

}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)
    const userData = getTokenAllData(authData?.token)
    const isVPBXAdmin = useSelector(isUserVPBXAdmin)
    const isAdmin = useSelector(isUserAdmin)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminAvailable = isAdmin || isVPBXAdmin

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction={'bottom-left'}
            items={[
                ...(isAdminAvailable
                    ? [{
                        content: t('Админ'),
                        href: RoutePath.admin
                    }]
                    : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + String(userData?.id)
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
            trigger={<Avatar size={30} src={userData?.avatar}/>}
        />
    )
})
