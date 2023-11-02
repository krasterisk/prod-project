import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react'
import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ThemeSwitcher } from '@/entities/ThemeSwitcher'
import { LangSwitcher } from '@/entities/LangSwitcher'
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
  )
})
