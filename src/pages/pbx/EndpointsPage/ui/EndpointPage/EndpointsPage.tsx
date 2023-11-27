import { memo, useCallback } from 'react'
import cls from './EndpointsPage.module.scss'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ViewSelectorContainer } from '../../../../ManualsPage/ui/ViewSelectorContainer/ViewSelectorContainer'
import { FiltersContainer } from '../../../../ManualsPage/ui/FiltersContainer/FiltersContainer'
import { Endpoints } from '@/features/Pbx'

interface EndpointsPageProps {
  className?: string
}

const EndpointsPage = ({ className }: EndpointsPageProps) => {
  const onLoadNextPart = useCallback(() => {
    console.log('onLoadNextPart')
  }, [])

  const content = <StickyContentLayout
        left={<ViewSelectorContainer/>}
        right={<FiltersContainer />}
        content={
            <Page
                data-testid={'EndpointsPage'}
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.EndpointsPage, {}, [className])}
                isSaveScroll={true}
            >
                <Endpoints className={cls.list}/>
            </Page>
        }
    />

  return content
}

export default memo(EndpointsPage)
