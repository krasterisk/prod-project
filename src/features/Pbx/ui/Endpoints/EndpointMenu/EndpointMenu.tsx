import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointMenu.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import {
  getRouteEndpointEdit
} from '@/shared/const/router'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface EndpointMenuProps {
  className?: string
  id: string
}

export const EndpointMenu = memo((props: EndpointMenuProps) => {
  const {
    className,
    id
  } = props
  const { t } = useTranslation('endpoints')
  // const dispatch = useDispatch()
  // const authData = useSelector(getUserAuthData)
  // const isVPBXAdmin = useSelector(isUserVPBXAdmin)
  // const isAdmin = useSelector(isUserAdmin)
  //
  // const isAdminAvailable = isAdmin || isVPBXAdmin

  const items = [
    {
      content: t('Изменить'),
      href: getRouteEndpointEdit(id)
    },
    {
      content: t('Копировать'),
      href: getRouteEndpointEdit(id)
    },
    {
      content: t('Удалить')
      // onClick: onDelete
    }
  ]

  return (
        <Dropdown
            className={classNames(cls.EndpointMenu, {}, [className])}
            direction={'bottom-left'}
            items={items}
            trigger={<MoreVertIcon className={cls.trigger}/>}
        />

  )
})
