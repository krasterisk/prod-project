import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointGroupsCard } from '@/features/Pbx'

export const EndpointGroupsCreatePage = memo(() => {
  return (
      <Page data-testid={'EndpointsPage'}>
        <VStack gap='8'>
          <EndpointGroupsCard />
        </VStack>
      </Page>
  )
})
