import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContentList.module.scss'
import { ContentView } from '../../model/types/content'
import { ContentListItemSkeleton } from './ContentListItemSkeleton'
import React, { HTMLAttributeAnchorTarget } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { EndpointItem } from '../../../Pbx/Endpoints/ui/EndpointItem/EndpointItem'
import { Endpoint } from '@/entities/Pbx'

interface ContentListProps<T extends object> {
  className?: string
  data: T[] | undefined
  isLoading?: boolean
  view: ContentView
  target?: HTMLAttributeAnchorTarget
  componentName: string
}

const getSkeletons = (view: ContentView) => {
  return new Array(view === 'SMALL' ? 9 : 4)
    .fill(0)
    .map((item, index) => (
          <ContentListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

export const ContentList = <T extends object>(props: ContentListProps<T>) => {
  const {
    className,
    data,
    isLoading,
    target,
    componentName,
    view
  } = props

  const { t } = useTranslation()

  const renderContent = (content: T) => {
    if (componentName === 'endpoints') {
      const endpoint = content as Endpoint
      return (
            <EndpointItem
                key={endpoint.id}
                endpoint={endpoint}
                target={target}
                view={view}
            />
      )
    }
  }

  if (!isLoading && !data?.length) {
    return (
        <div className={classNames(cls.ContentList, {}, [className, cls[view]])}>
          <Text
              size={'xl'}
              text={t('Данные не найдены')}
          />
        </div>
    )
  }

  return (
      <HStack
          gap={'16'}
          wrap={'wrap'}
          data-testid={'ContentList'}
          max
      >
        {data?.length
          ? data.map(renderContent)
          : null
        }
        {isLoading && getSkeletons(view)}
      </HStack>

  )
}
