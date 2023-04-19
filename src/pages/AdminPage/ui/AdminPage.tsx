import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const AdminPage = memo(() => {
    const { t } = useTranslation('admin')

    return (
        <Page>
            {t('Панель администратора')}
        </Page>
    )
})

export default AdminPage
