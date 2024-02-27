import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { memo, ReactNode } from 'react'
import { Drawer as MuiDrawer } from '@mui/material'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  return (
        <div
            className={classNames(cls.Drawer, {}, [className])}
        >
          <MuiDrawer
              open={isOpen}
              onClose={onClose}

          >
            {children}
          </MuiDrawer>
        </div>
  )
})
