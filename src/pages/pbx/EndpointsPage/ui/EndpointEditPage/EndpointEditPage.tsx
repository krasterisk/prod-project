import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointCard } from '@/features/Pbx'
import { useParams } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage'

export const EndpointEditPage = memo(() => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
            <ErrorPage />
    )
  }

  return (
        <Page data-testid={'EndpointsPage'}>
            <VStack gap='8'>
                <EndpointCard isEdit endpointId={id} />
            </VStack>
        </Page>
  )
})
