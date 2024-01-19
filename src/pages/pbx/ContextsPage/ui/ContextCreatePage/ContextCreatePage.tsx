import React, { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ContextCard } from '@/features/Pbx'

export const ContextCreatePage = memo(() => {
  return (
        <Page data-testid={'ContextCreatePage'}>
            <VStack gap='8'>
                <ContextCard />
            </VStack>
        </Page>
  )
})
