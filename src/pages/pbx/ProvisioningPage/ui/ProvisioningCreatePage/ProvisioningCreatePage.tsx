import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ProvisioningCard } from '@/features/Pbx'

export const ProvisioningCreatePage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <ProvisioningCard />
            </VStack>
        </Page>
  )
})
