import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import React, { memo, useCallback, useState } from 'react'
import { Popover } from '@/shared/ui/Popups'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notification'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'

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
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted/>
        </Button>
    )

    const isMobile = useDevice()

    return (
        <div>
            {isMobile
                ? <>
                    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                        <Icon Svg={NotificationIcon} inverted/>
                    </Button>
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
