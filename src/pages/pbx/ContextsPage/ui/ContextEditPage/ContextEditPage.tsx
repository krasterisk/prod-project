import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ContextCard } from '@/features/Pbx'
import { useParams } from 'react-router-dom'
import { ErrorPageAsync as ErrorPage } from '../../../../ErrorPage/ui/ErrorPage.async'

export const ContextEditPage = memo(() => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
            <ErrorPage />
    )
  }

  return (
        <Page data-testid={'ContextEditPage'}>
            <VStack gap='8'>
                <ContextCard isEdit contextId={id} />
            </VStack>
        </Page>
  )
})
