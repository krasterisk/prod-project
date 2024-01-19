import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useParams } from 'react-router-dom'
import { ErrorPageAsync as ErrorPage } from '../../../../ErrorPage/ui/ErrorPage.async'
import { ProvisioningCard } from '@/features/Pbx'

export const ProvisioningEditPage = memo(() => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
            <ErrorPage />
    )
  }

  return (
        <Page data-testid={'ProvisioningEditPage'}>
            <VStack gap='8'>
                <ProvisioningCard isEdit provisioningId={id} />
            </VStack>
        </Page>
  )
})
