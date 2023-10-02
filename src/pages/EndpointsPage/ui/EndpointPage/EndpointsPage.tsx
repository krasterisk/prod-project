import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { EndpointsList } from '@/entities/Endpoints'
import { EndpointHeader } from '../EndpointHeader/EndpointHeader'
import { VStack } from '@/shared/ui/redesigned/Stack'

const EndpointsPage = memo(() => {
  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <EndpointHeader/>
                <EndpointsList/>
            </VStack>
        </Page>
  )
})

export default EndpointsPage
