import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContentList.module.scss'
import { memo } from 'react'

interface ContentListProps {
  className?: string

}

export const ContentList = memo((props: ContentListProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.ContentList, {}, [className])}>

        </div>
  )
})
