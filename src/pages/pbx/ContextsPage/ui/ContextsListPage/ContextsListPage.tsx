import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Contexts } from '@/features/Pbx'

export const ContextsListPage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <Contexts />
            </VStack>
        </Page>
  )
})
