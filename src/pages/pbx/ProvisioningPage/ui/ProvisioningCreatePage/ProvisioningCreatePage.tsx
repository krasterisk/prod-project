import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ProvisioningCreateCard } from '@/features/Pbx'

export const ProvisioningCreatePage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <ProvisioningCreateCard />
            </VStack>
        </Page>
  )
})
