import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { memo, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    ...otherProps
  } = props

  return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
  )
})
