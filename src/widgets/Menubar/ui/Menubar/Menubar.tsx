import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Menubar.module.scss'
import React, { memo } from 'react'

import { VStack } from '@/shared/ui/redesigned/Stack'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { MenubarItemType } from '../../model/types/menubar'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { MenubarItems } from '../MenubarItems/MenubarItems'

interface MenubarProps {
  className?: string
}

export const Menubar = memo((props: MenubarProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('endpoints')
  const isMobile = useMediaQuery('(max-width:800px)')

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
                <AppLogo className={cls.appLogo}/>
                <VStack
                    role="navigation"
                    className={cls.items}
                >
                    <MenubarItems openDrawer={false} />
                </VStack>

            </section>
  )
})
