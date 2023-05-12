import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualPageReducer } from '../../model/slice/manualPageSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import { fetchNextManualPage } from '../../model/services/fetchNextManualPage/fetchNextManualPage'
import { ManualPageFilters } from '../ManualPageFilters/ManualPageFilters'
import { ManualInfiniteList } from '../../ui/ManualInfiniteList/ManualInfiniteList'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initManualPage } from '../../model/services/initManualPage/initManualPage'
import { useSearchParams } from 'react-router-dom'
import {useManualItemById} from "@/pages/ManualsPage/model/selectors/manualsPageSelectors";

interface ManualsPageProps {
    className?: string
}

const reducers: ReducersList = {
    manualsPage: manualPageReducer
}

const ManualsPage = ({ className }: ManualsPageProps) => {
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextManualPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initManualPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ManualsPage, {}, [className])}
                isSaveScroll={true}
            >
                <ManualPageFilters />
                <ManualInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ManualsPage)
