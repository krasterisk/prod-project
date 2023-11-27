import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContentList.module.scss'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { ContentView } from '../../model/types/content'

interface ContentListItemSkeletonProps {
  className?: string
  view?: ContentView
}

export const ContentListItemSkeleton = memo((props: ContentListItemSkeletonProps) => {
  const {
    className,
    view = 'SMALL'
  } = props

  const mainClass = cls.ContentList

  if (view === 'BIG') {
    return (
            <div className={classNames(mainClass,
              {},
              [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border='50%' width={30} height={30}/>
                        <Skeleton width={150} height={16} className={cls.username}/>
                        <Skeleton width={150} height={16}className={cls.date}/>
                    </div>
                    <Skeleton width={250} height={24} className={cls.title}/>
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
    )
  }

  return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} width={200} height={200}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={16} className={cls.title}/>
                <div/>
            </Card>
        </div>
  )
})
