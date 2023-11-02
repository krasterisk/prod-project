import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointCard } from '@/features/pbx'

export const EndpointCreatePage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <EndpointCard />
            </VStack>
        </Page>
  )
})
