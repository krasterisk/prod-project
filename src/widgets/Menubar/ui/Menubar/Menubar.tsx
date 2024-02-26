import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Menubar.module.scss'
import React, { memo, useState } from 'react'
import { useMenubarItems } from '../../model/selectors/getMenubarItems'

import { VStack } from '@/shared/ui/redesigned/Stack'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { MenubarItemType } from '../../model/types/menubar'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'

interface MenubarProps {
  className?: string

}

export const Menubar = memo((props: MenubarProps) => {
  const {
    className
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const menubarItemList = useMenubarItems()
  const isMobile = useMediaQuery('(max-width:800px)')

  console.log(isMobile)

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
                    // className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed }, [])}
                    // activeClassName={cls.active}
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
                data-testid="menubar"
                className={classNames(cls.Menubar, {}, [className])}
            >
                <VStack
                    role="navigation"
                    className={cls.items}
                >
                    {renderTree(menubarItemList)}
                </VStack>
            </section>
  )
})
