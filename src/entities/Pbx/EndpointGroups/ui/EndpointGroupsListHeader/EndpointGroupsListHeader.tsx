import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsListHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import {
  getRouteEndpointGroups, getRouteEndpointGroupsEdit
} from '@/shared/const/router'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface EndpointGroupsListHeaderProps {
  className?: string
  checkedId?: string
  onDelete?: (id: string) => void
}

export const EndpointGroupsListHeader = memo((props: EndpointGroupsListHeaderProps) => {
  const {
    className,
    checkedId,
    onDelete
  } = props

  const { t } = useTranslation('endpoints')

  const deleteHandler = useCallback(() => {
    if (onDelete && checkedId) {
      onDelete(checkedId)
    }
  }, [checkedId, onDelete])

  return (
      <Card
          className={classNames(cls.EndpointGroupsListHeader, {}, [className])}
          padding={'8'}
          border={'partial'}
          max
      >
        <HStack gap={'16'} justify={'start'} max>
          <AppLink
              to={getRouteEndpointGroups()}
          >
            <Button
                title={t('Создать') ?? ''}
                variant={'outline'}>
              {t('Создать')}
            </Button>
          </AppLink>
          <AppLink
              to={getRouteEndpointGroups()}
          >
            <Button
                title={t('Абоненты') ?? ''}
                variant={'outline'}>
              {t('Абоненты')}
            </Button>
          </AppLink>
        </HStack>
        {checkedId &&
            <HStack gap={'16'}>
              <AppLink
                  to={getRouteEndpointGroupsEdit(checkedId)}
              >
                <Button
                    title={t('Изменить') ?? ''}
                    variant={'outline'}
                    color={'success'}
                >
                  {t('Изменить')}
                </Button>
              </AppLink>
              <AppLink
                  to={''}
              >
                <Button
                    title={t('Удалить') ?? ''}
                    variant={'outline'}
                    color={'error'}
                    onClick={deleteHandler}
                >
                  {t('Удалить')}
                </Button>
              </AppLink>
            </HStack>
        }
      </Card>
  )
})
