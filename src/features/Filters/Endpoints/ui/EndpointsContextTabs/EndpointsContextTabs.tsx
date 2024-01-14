import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useMemo } from 'react'
import { useGetContexts } from '../../../../../pages/pbx/ContextsPage/api/contextsApi'
import { TabItem, Tabs } from '@/shared/ui/redesigned/Tabs'
import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'

interface EndpointsContextTabsProps {
  className?: string
  value: string
  onChangeTab: (tab: string) => void
}

export const EndpointsContextTabs = memo((props: EndpointsContextTabsProps) => {
  const {
    className,
    value,
    onChangeTab
  } = props

  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'
  const { data } = useGetContexts({ vpbx_user_id })
  const { t } = useTranslation('endpoints')

  const contextTabs = useMemo<TabItem[]>(() => {
    return data?.map(item => ({
      value: item.name,
      content: t(item.name)
    })) || []
  }, [data, t])

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeTab(tab.value)
  }, [onChangeTab])

  return (
    <Tabs
        direction={'column'}
        data-testid={'ManualHashtags'}
        className={classNames('', {}, [className])}
        tabs={contextTabs}
        onTabClick={onTabClick}
        value={value}
    />
  )
})
