import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ContextCreateCard } from '@/features/Pbx'

export const ContextCreatePage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <ContextCreateCard />
            </VStack>
        </Page>
  )
})
