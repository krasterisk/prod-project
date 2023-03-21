import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { memo } from 'react'

interface ManualsPageProps {
    className?: string

}

const ManualsPage = ({ className }: ManualsPageProps) => {
    return (
        <div className={classNames(cls.ManualsPage, {}, [className])}>
            MANUALS LIST PAGE
        </div>
    )
}

export default memo(ManualsPage)
