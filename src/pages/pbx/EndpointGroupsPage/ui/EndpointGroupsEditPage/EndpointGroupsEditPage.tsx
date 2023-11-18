import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointGroupsCard } from '@/features/Pbx'
import { useParams } from 'react-router-dom'
import { ErrorPageAsync as ErrorPage } from '../../../../ErrorPage/ui/ErrorPage.async'

export const EndpointGroupsEditPage = memo(() => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
        <ErrorPage />
    )
  }

  return (
      <Page data-testid={'EndpointsPage'}>
        <VStack gap='8'>
          <EndpointGroupsCard isEdit endpointGroupId={id} />
        </VStack>
      </Page>
  )
})
