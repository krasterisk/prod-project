import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Endpoints } from '@/features/Pbx'

const EndpointsPage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <Endpoints />
            </VStack>
        </Page>
  )
})

export default EndpointsPage
