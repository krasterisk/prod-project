import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsListHeader.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import {
  getRouteEndpointCreate
} from '@/shared/const/router'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { IconButton } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

interface EndpointsListHeaderProps {
  className?: string
}

export const EndpointsListHeader = memo((props: EndpointsListHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.EndpointsListHeader, {}, [className])}
            padding={'16'}
            border={'partial'}
            max
        >
            <HStack justify={'start'} max gap={'8'}>
                <AppLink
                    to={getRouteEndpointCreate()}
                >
                    <IconButton>
                        <PersonAddAlt1Icon className={cls.icon} fontSize={'large'} />
                    </IconButton>
                </AppLink>
            </HStack>
        </Card>
  )
})
