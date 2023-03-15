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
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ManualDetailsProps {
    className?: string
    id: string
}

const reducers = {
    manualDetails: manualDetailsReducer
}

export const ManualDetails = memo(({ className, id }: ManualDetailsProps) => {
    const { t } = useTranslation('manuals')
    const dispatch = useAppDispatch()
    //    const isLoading = useSelector(getManualDetailsIsLoading)
    const isLoading = true
    const manual = useSelector(getManualDetailsData)
    const error = useSelector(getManualDetailsError)

    useEffect(() => {
        dispatch(fetchManualById(id))
    }, [dispatch, id])

    let content
    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={500}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={300}/>
            </div>
        )
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                text={t('Произошла ошибка при загрузке страницы')}
            />
        )
    } else {
        content = (
            <div>Manual Details</div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ManualDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
