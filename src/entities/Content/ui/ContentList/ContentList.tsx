import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContentList.module.scss'
import { ContentView } from '../../model/types/content'
import { ContentListItemSkeleton } from './ContentListItemSkeleton'
import React, { HTMLAttributeAnchorTarget } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Context } from '../../../Pbx/Contexts/model/types/contexts'
import { ContextItem } from '../../../Pbx/Contexts/ui/ContextItem/ContextItem'
import { EndpointItem } from '../../../Pbx/Endpoints/ui/EndpointItem/EndpointItem'
import { Endpoint } from '../../../Pbx/Endpoints/model/types/endpoints'
import { EndpointGroups } from '../../../Pbx/EndpointGroups/model/types/endpointGroups'
import { EndpointGroupItem } from '../../../Pbx/EndpointGroups/ui/EndpointGroupItem/EndpointGroupItem'
import { ProvisioningItem } from '../../../Pbx/Provisioning/ui/ProvisioningItem/ProvisioningItem'
import { ProvisionTemplate } from '@/entities/Pbx'

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
    if (componentName === 'contexts') {
      const context = content as Context
      return (
          <ContextItem
              key={context.id}
              context={context}
              target={target}
              view={view}
          />
      )
    }
    if (componentName === 'endpointGroups') {
      const endpointGroups = content as EndpointGroups
      return (
          <EndpointGroupItem
              key={endpointGroups.id}
              endpointGroup={endpointGroups}
              target={target}
              view={view}
          />
      )
    }
    if (componentName === 'provisioning') {
      const provisioning = content as ProvisionTemplate
      return (
          <ProvisioningItem
              key={provisioning.id}
              provisionTemplate={provisioning}
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
