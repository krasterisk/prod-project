import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { Dropdown } from '@/shared/ui/deprecated/Popups'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { getTokenAllData } from '@/app/providers/getTokenData/getTokenData'
import { getUserAuthData, isUserAdmin, isUserVPBXAdmin, userActions } from '@/entities/User'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

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
                    href: getRouteAdmin()
                  }]
                : []),
              {
                content: t('Профиль'),
                href: getRouteProfile(String(userData?.id))
              },
              {
                content: t('Выйти'),
                onClick: onLogout
              }
            ]}
            trigger={<Avatar fallbackInverted size={30} src={userData?.avatar}/>}
        />
  )
})
