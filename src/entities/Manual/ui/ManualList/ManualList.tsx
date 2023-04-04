import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualList.module.scss'
import { memo } from 'react'
import { Manual, ManualView } from '../../model/types/manual'
import { ManualListItem } from '../ManualListItem/ManualListItem'
import { ManualListItemSkeleton } from '../ManualListItem/ManualListItemSkeleton'

interface ManualListProps {
    className?: string
    manuals: Manual[]
    isLoading?: boolean
    view?: ManualView
}

const getSkeletons = (view: ManualView) => {
    return new Array(view === 'SMALL' ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ManualListItemSkeleton className={cls.card} key={index} view={view} />
        ))
}
export const ManualList = memo((props: ManualListProps) => {
    const {
        className,
        view = 'SMALL',
        manuals,
        isLoading
    } = props

    const renderManual = (manual: Manual) => {
        return (
            <ManualListItem
                manual={manual}
                view={view}
                key={manual.id}
                className={cls.card}
            />
        )
    }
    return (
        <div className={classNames(cls.ManualList, {}, [className, cls[view]])}>
            {manuals.length
                ? manuals.map(renderManual)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    )
})
