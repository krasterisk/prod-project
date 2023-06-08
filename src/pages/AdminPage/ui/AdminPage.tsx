import { Page } from '@/widgets/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const AdminPage = memo(() => {
  const { t } = useTranslation('admin')

  return (
        <Page data-testid={'AdminPage'}>
            {t('Панель администратора')}
        </Page>
  )
})

export default AdminPage
