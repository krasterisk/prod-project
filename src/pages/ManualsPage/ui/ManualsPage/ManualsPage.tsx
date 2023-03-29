import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { memo, useCallback } from 'react'
import { ManualList, ManualView, ManualViewSelector } from 'entities/Manual'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getManuals, manualPageActions, manualPageReducer } from '../../model/slice/manualPageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchManualsList } from '../../model/services/fetchManualsList/fetchManualsList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getManualsPageIsLoading, getManualsPageView } from '../../model/selectors/manualsPageSelectors'

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
    //    const error = useSelector(getManualsPageError)
    const view = useSelector(getManualsPageView)

    useInitialEffect(() => {
        dispatch(fetchManualsList())
        dispatch(manualPageActions.initState())
    })

    const onChangeView = useCallback((view: ManualView) => {
        dispatch(manualPageActions.setView(view))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ManualsPage, {}, [className])}>
                <ManualViewSelector view={view} onViewClick={onChangeView} />
                <ManualList
                    isLoading={isLoading}
                    view={view}
                    manuals={manuals}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ManualsPage)
