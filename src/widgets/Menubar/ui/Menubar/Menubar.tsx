import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Menubar.module.scss'
import React, { memo, useState } from 'react'
import { useMenubarItems } from '../../model/selectors/getMenubarItems'
import {
  IconButton
} from '@mui/material'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ThemeSwitcher } from '@/entities/ThemeSwitcher'
import { LangSwitcher } from '@/entities/LangSwitcher'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { MenubarItemType } from '../../model/types/menubar'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { useTranslation } from 'react-i18next'

interface MenubarProps {
  className?: string

}

export const Menubar = memo((props: MenubarProps) => {
  const {
    className
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const menubarItemList = useMenubarItems()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  const { t } = useTranslation('endpoints')

  const renderTree = (nodes: MenubarItemType[]) => (
        <SimpleTreeView>
            {nodes.map((node) => (
                <AppLink
                    key={node.path}
                    to={node.path}
                    className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed }, [])}
                    activeClassName={cls.active}
                >
                    <TreeItem
                        key={node.path}
                        nodeId={node.path}
                        label={t(node.text)}
                        // icon={<Icon Svg={node.Icon} />}
                    >
                        {node.subItems ? renderTree(node.subItems) : null}
                    </TreeItem>
                </AppLink>
            ))}
        </SimpleTreeView>
  )

  return (
        <section
            data-testid='sidebar'
            className={classNames(cls.Menubar, { [cls.collapsedRedesigned]: collapsed }, [className])}
        >
            <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo}/>
            <IconButton onClick={onToggle}>
                toggle
            </IconButton>

            <VStack role='navigation' gap='8' className={cls.items}>
                {renderTree(menubarItemList)}
            </VStack>

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
