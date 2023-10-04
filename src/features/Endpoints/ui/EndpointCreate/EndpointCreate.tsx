import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCreate.module.scss'
import { memo, useCallback } from 'react'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointCreateArg, EndpointCreateCard } from '@/entities/Endpoints'

import { useSetEndpoints } from '../../api/endpointsApi'

export interface EndpointCreateProps {
  data?: EndpointCreateArg
  className?: string
  onCreate?: (data: EndpointCreateArg) => void
}

export const EndpointCreate = memo((props: EndpointCreateProps) => {
  const {
    className
  } = props

  const [endpointMutation] = useSetEndpoints()

  const handleCreateEndpoint = useCallback((data: EndpointCreateArg) => {
    try {
      endpointMutation([{ ...data }])
    } catch (e) {
      throw Error()
    }
  }, [endpointMutation])

  const onCreate = useCallback((data: EndpointCreateArg) => {
    handleCreateEndpoint(data)
  }, [handleCreateEndpoint])

  return (
        <VStack gap={'8'} max className={classNames(cls.EndpointCreateHeader, {}, [className])}>
            <EndpointCreateCard
                onCreate={onCreate}
                className={cls.EndpointCreateHeader}
            />

        </VStack>
  )
})
