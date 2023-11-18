import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsEditHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteEndpointGroups } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface EndpointGroupsEditHeaderProps {
  className?: string
  onEdit?: () => void
  onDelete?: (id: string) => void
  endpointGroupId?: string
}

export const EndpointGroupsEditHeader = memo((props: EndpointGroupsEditHeaderProps) => {
  const {
    className,
    onEdit,
    onDelete,
    endpointGroupId
  } = props
  const { t } = useTranslation('endpoints')

  const deleteHandler = useCallback(() => {
    if (endpointGroupId) {
      onDelete?.(endpointGroupId)
    }
  }, [endpointGroupId, onDelete])

  return (
      <Card
          className={classNames(cls.EndpointGroupsEditHeader, {}, [className])}
          padding={'8'}
          border={'partial'}
          max
      >
        <HStack max justify={'start'}>
          <Text title={t('Редактировать')}/>
        </HStack>
        <HStack gap="24">
            <Button
                title={t('Удалить') ?? ''}
                variant={'outline'}
                color={'error'}
                onClick={deleteHandler}
            >
              {t('Удалить')}
            </Button>
          <AppLink
              to={getRouteEndpointGroups()}
          >
            <Button
                title={t('Закрыть') ?? ''}
                variant={'outline'}
                color={'error'}
            >
              {t('Закрыть')}
            </Button>
          </AppLink>
          <Button
              title={t('Сохранить') ?? ''}
              variant={'outline'}
              color={'success'}
              onClick={onEdit}
          >
            {t('Сохранить')}
          </Button>
        </HStack>
      </Card>
  )
})
