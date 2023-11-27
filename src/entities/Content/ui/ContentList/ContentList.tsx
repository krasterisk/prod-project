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
  view?: ContentView
  target?: HTMLAttributeAnchorTarget
  componentName: string
}

const getSkeletons = (view: ContentView) => {
  return new Array(view === 'SMALL' ? 9 : 3)
    .fill(0)
    .map((item, index) => (
          <ContentListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

export const ContentList = <T extends object>(props: ContentListProps<T>) => {
  const {
    className,
    view = 'SMALL',
    data,
    isLoading,
    target,
    componentName
  } = props

  const { t } = useTranslation('manuals')

  const renderContent = (content: T) => {
    if (componentName === 'endpoints') {
      return (
          <>
            <EndpointItem
                endpoint={content as Endpoint}
                view={view}
                className={cls.card}
                target={target}
            />
          </>
      )
    }
  }

  if (!isLoading && !data?.length) {
    return (
        <div className={classNames(cls.ManualList, {}, [className, cls[view]])}>
          <Text
              size={'xl'}
              text={t('Статьи не найдены')}
          />
        </div>
    )
  }

  return (
      <HStack
          className={classNames(cls.ManualList, {}, [className, cls[view]])}
          gap={'16'}
          wrap={'wrap'}
          data-testid={'ManualList'}
      >
        {data?.length
          ? data.map(renderContent)
          : null
        }
        {isLoading && getSkeletons(view)}
      </HStack>

  )
}
