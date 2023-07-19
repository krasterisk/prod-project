import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { ThemeSwitcher } from '@/entities/ThemeSwitcher'
import { LangSwitcher } from '@/entities/LangSwitcher'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'

interface SidebarProps {
  className?: string

}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemList = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
  )), [collapsed, sidebarItemList])

  return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <section
                    data-testid='sidebar'
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}
                >
                <AppLogo className={cls.appLogo}/>
                </section>
            }
            off={
            <section
                data-testid='sidebar'
                className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            >
                <Button
                    data-testid='sidebar-toggle'
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    size={ButtonSize.XL}
                    square
                >
                    {collapsed ? '>' : '<'}
                </Button>
                <VStack role='navigation' gap='8' className={cls.items}>
                    {itemList}
                </VStack>
                <div className={cls.switchers}>
                    <ThemeSwitcher/>
                    <LangSwitcher
                        short={collapsed}
                        className={cls.lang}
                    />
                </div>
            </section>
        }
        />
  )
})
