import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './MenubarItem.module.scss'
import { memo } from 'react'
import { MenubarItemType } from '../../model/types/menubar'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { TreeItem } from '@mui/x-tree-view'

interface MenubarItemProps {
  className?: string

}

interface MenubarItemProps {
  item: MenubarItemType
  collapsed: boolean
}

export const MenubarItem = memo((props: MenubarItemProps) => {
  const {
    className,
    item,
    collapsed
  } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)
  if (item.authOnly && !isAuth) {
    return null
  }

  return (
        <AppLink
            to={item.path}
            className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed }, [])}
            activeClassName={cls.active}
        >
            <TreeItem
                key={item.path}
                nodeId={item.path}
                label={t(item.text)}
                // icon={<Icon Svg={node.Icon} />}
            />

        </AppLink>

  )
})
