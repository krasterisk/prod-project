import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const PeersPage = memo(() => {
  const { t } = useTranslation('peers')

  return (
        <Page
            data-testid={'PeersPage'}>
            {t('Абоненты')}
        </Page>
  )
})

export default PeersPage
