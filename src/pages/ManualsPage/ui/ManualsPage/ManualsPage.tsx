import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { memo, useCallback } from 'react'
import { ManualList, ManualView, ManualViewSelector } from 'entities/Manual'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getManuals, manualPageActions, manualPageReducer } from '../../model/slice/manualPageSlice'
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

    useInitialEffect(() => {
        dispatch(initManualPage())
    })

    const onChangeView = useCallback((view: ManualView) => {
        dispatch(manualPageActions.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextManualPage())
    }, [dispatch])

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
                <ManualViewSelector view={view} onViewClick={onChangeView}/>
                <ManualList
                    isLoading={isLoading}
                    view={view}
                    manuals={manuals}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ManualsPage)
