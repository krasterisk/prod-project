import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { memo, useCallback } from 'react'
import { ManualList } from 'entities/Manual'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getManuals, manualPageReducer } from '../../model/slice/manualPageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getManualsPageError,
    getManualsPageIsLoading,
    getManualsPageView
} from '../../model/selectors/manualsPageSelectors'
import { Page } from 'widgets/Page/Page'
import { fetchNextManualPage } from '../../model/services/fetchNextManualPage/fetchNextManualPage'
import ErrorPage from '../../../ErrorPage/ui/ErrorPage'
import { initManualPage } from '../../model/services/initManualPage/initManualPage'
import { ManualPageFilters } from 'pages/ManualPageFilters/ManualPageFilters'
import { useSearchParams } from 'react-router-dom'

interface ManualsPageProps {
    className?: string
}

const reducers: ReducersList = {
    manualsPage: manualPageReducer
}

const ManualsPage = ({ className }: ManualsPageProps) => {
    const dispatch = useAppDispatch()
    const manuals = useSelector(getManuals.selectAll)
    const isLoading = useSelector(getManualsPageIsLoading)
    const error = useSelector(getManualsPageError)
    const view = useSelector(getManualsPageView)
    const [searchParams] = useSearchParams()

    // const onChangeView = useCallback((view: ManualView) => {
    //     dispatch(manualPageActions.setView(view))
    // }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextManualPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initManualPage(searchParams))
    })

    if (error) {
        return <ErrorPage />
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ManualsPage, {}, [className])}
                isSaveScroll={true}
            >
                <ManualPageFilters />
                <ManualList
                    isLoading={isLoading}
                    view={view}
                    manuals={manuals}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ManualsPage)
