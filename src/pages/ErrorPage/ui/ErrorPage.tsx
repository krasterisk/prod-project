import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { Page } from '@/widgets/Page'

interface ErrorPageProps {
    className?: string
}

const ErrorPage = memo(({ className }: ErrorPageProps) => {
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    )
})

export default ErrorPage
