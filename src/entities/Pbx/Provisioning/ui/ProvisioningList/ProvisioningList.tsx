import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningList.module.scss'
import React from 'react'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ContentList } from '@/entities/Content'
import { ProvisioningListProps } from '../../model/types/provisionging'
import { ProvisioningListHeader } from '../ProvisioningListHeader/ProvisioningListHeader'

export const ProvisioningList = (props: ProvisioningListProps) => {
  const {
    className,
    isLoading,
    isError,
    provisionTemplates,
    view = 'SMALL'
  } = props

  if (isError) {
    return (
            <ErrorGetData/>
    )
  }

  return (
        <VStack gap={'16'} max className={classNames(cls.ProvisioningList, {}, [className])}>
            <ProvisioningListHeader />
            <ContentList
                isLoading={isLoading}
                data={provisionTemplates}
                componentName={'provisioning'}
                view={view}
            />
        </VStack>
  )
}
