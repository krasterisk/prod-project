import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointCard } from '@/entities/Endpoints'

export const EndpointCreatePage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <EndpointCard create />
            </VStack>
        </Page>
  )
})
