import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface DrawerProps {
  className?: string

}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.Drawer, {}, [className])}>

        </div>
  )
})
