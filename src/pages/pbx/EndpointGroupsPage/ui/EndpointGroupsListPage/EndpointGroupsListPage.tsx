import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointGroups } from '@/features/Pbx'

export const EndpointGroupsListPage = memo(() => {
  return (
      <Page data-testid={'EndpointGroupPage'}>
        <VStack gap='8'>
          <EndpointGroups />
        </VStack>
      </Page>
  )
})
