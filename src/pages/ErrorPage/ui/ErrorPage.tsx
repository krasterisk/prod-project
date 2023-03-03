import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
    className?: string
}

const ErrorPage = memo(({ className }: ErrorPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
})

export default ErrorPage
