import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualDetailsReducer } from '../../model/slice/manualDetailsSlice'
import { memo, useEffect } from 'react'
import { fetchManualById } from 'entities/manual/model/services/fetchManualById/fetchManualById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getManualDetailsData,
    getManualDetailsError,
    getManualDetailsIsLoading
} from '../../model/selectors/manualDetails'

interface ManualDetailsProps {
    className?: string
    id: string
}

const reducers = {
    manualDetails: manualDetailsReducer
}

export const ManualDetails = memo(({ className, id }: ManualDetailsProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getManualDetailsIsLoading)
    const manual = useSelector(getManualDetailsData)
    const error = useSelector(getManualDetailsError)

    useEffect(() => {
        dispatch(fetchManualById(id))
    }, [dispatch, id])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ManualDetails, {}, [className])}>
                ManualDetails
            </div>
        </DynamicModuleLoader>
    )
})
