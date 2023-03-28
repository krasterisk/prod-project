import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualList.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Manual, ManualView } from '../../model/types/manual'
import { ManualListItem } from '../ManualListItem/ManualListItem'

interface ManualListProps {
    className?: string
    manuals: Manual[]
    isLoading?: boolean
    view?: ManualView
}

export const ManualList = memo((props: ManualListProps) => {
    const {
        className,
        view = ManualView.SMALL,
        manuals,
        isLoading
    } = props

    const renderManual = (manual: Manual) => {
        return (
            <ManualListItem
                manual={manual}
                view={view}
                key={manual.id}
            />
        )
    }

    return (
        <div className={classNames(cls.ManualList, {}, [className])}>
            {manuals.length > 0
                ? manuals.map(renderManual)
                : null
            }
        </div>
    )
})
