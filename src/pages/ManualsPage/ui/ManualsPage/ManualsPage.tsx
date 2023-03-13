import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ManualsPageProps {
    className?: string

}

const ManualsPage = ({ className }: ManualsPageProps) => {
    const { t } = useTranslation('manual')

    return (
        <div className={classNames(cls.ManualsPage, {}, [className])}>
            MANUALS LIST PAGE
        </div>
    )
}

export default memo(ManualsPage)
