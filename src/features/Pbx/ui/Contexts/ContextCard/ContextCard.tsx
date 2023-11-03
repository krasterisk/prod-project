import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ContextCreateCard } from '../ContextCreateCard/ContextCreateCard'
import { useNavigate } from 'react-router-dom'
import { Context } from '@/entities/Pbx'
import { getRouteEndpoints } from '@/shared/const/router'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { useSetContexts } from '../../../api/contextsApi'

interface ContextCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
}

export const ContextCard = memo((props: ContextCardProps) => {
  const {
    className,
    isLoading
  } = props

  const { t } = useTranslation('endpoints')
  const [contextMutation, { isError }] = useSetContexts()
  //  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // const userData = useSelector(getUserAuthData)
  // const vpbx_user_id = userData?.vpbx_user_id || '0'

  console.log(isError)

  const handleCreateContext = useCallback((data: Context) => {
    console.log(data)
    contextMutation([{ ...data }])
      .unwrap()
      .then((payload) => {
        // console.log('fulfilled', payload)
        // dispatch(
        //   contextsApi.util.updateQueryData('getContexts', { vpbx_user_id }, (draftContexts) => {
        //     draftContexts.push(payload[0])
        //   })
        // )
        navigate(getRouteEndpoints())
      })
      .catch(() => {
      })
  }, [contextMutation, navigate])

  const onCreate = useCallback((data: Context) => {
    handleCreateContext(data)
  }, [handleCreateContext])

  if (isLoading) {
    return (
            <Card padding="24" max>
                <VStack gap="32">
                    <HStack gap="32" max>
                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
    )
  }

  return (
        <VStack gap={'8'} max className={classNames(cls.ContextCard, {}, [className])}>
            <ContextCreateCard
                onCreate={onCreate}
                isError={isError} />
        </VStack>
  )
})
