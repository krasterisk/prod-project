import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ThemeSwitcher } from '@/entities/ThemeSwitcher'
import { LangSwitcher } from '@/entities/LangSwitcher'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
interface SidebarProps {
  className?: string

}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemList = useSidebarItems()

  const onToggle = () => {
    console.log(collapsed)
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
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
                >
                <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo}/>
                    <VStack role='navigation' gap='8' className={cls.items}>
                        {itemList}
                    </VStack>

                    <Icon
                        Svg={ArrowIcon}
                        data-testid='sidebar-toggle'
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher/>
                        <LangSwitcher
                            short={collapsed}
                            className={cls.lang}
                        />
                    </div>
                </section>
            }
            off={
            <section
                data-testid='sidebar'
                className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            >
                <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo}/>
                <VStack role='navigation' gap='8' className={cls.items}>
                    {itemList}
                </VStack>

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
