import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import React, { memo, useCallback, useState } from 'react'
import { Icon } from '@/shared/ui/redesigned/Icon'
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { NotificationList } from '@/entities/Notification'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Popover } from '@/shared/ui/redesigned/Popups'

interface NotificationButtonProps {
  className?: string

}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className
  } = props
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
        <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer}/>
  )

  const isMobile = useDevice()

  return (
        <div>
            {isMobile
              ? <>
                    <Icon
                        Svg={NotificationIconDeprecated}
                        clickable
                        onClick={onOpenDrawer}
                    />
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList className={cls.notifications}/>
                    </Drawer>
                </>
              : <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                    direction="bottom-left"
                >
                    <NotificationList className={cls.notifications}/>
                </Popover>
            }

        </div>
  )
})
