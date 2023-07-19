import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualListItem.module.scss'
import { memo } from 'react'
import { ManualView } from '../../model/types/manual'
import { Card } from '@/shared/ui/deprecated/Card'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

interface ManualListItemSkeletonProps {
  className?: string
  view?: ManualView
}

export const ManualListItemSkeleton = memo((props: ManualListItemSkeletonProps) => {
  const {
    className,
    view = 'SMALL'
  } = props

  if (view === 'BIG') {
    return (
            <div className={classNames(cls.ManualListItem, {}, [className, cls[view]])}>
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
        <div className={classNames(cls.ManualListItem, {}, [className, cls[view]])}>
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
