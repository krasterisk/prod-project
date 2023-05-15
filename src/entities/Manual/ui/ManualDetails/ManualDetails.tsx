import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualDetailsReducer } from '../../model/slice/manualDetailsSlice'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
    getManualDetailsData,
    getManualDetailsError,
    getManualDetailsIsLoading
} from '../../model/selectors/manualDetails'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Avatar } from '@/shared/ui/Avatar'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import { Icon } from '@/shared/ui/Icon'
import { ManualBlock } from '../../model/types/manual'
import { ManualBlockCodeComponent } from '../../ui/ManualBlockCodeComponent/ManualBlockCodeComponent'
import { ManualBlockImageComponent } from '../../ui/ManualBlockImageComponent/ManualBlockImageComponent'
import { ManualBlockTextComponent } from '../../ui/ManualBlockTextComponent/ManualBlockTextComponent'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchManualById } from '../../model/services/fetchManualById/fetchManualById'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ManualBlockTypes } from '../../model/consts/consts'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ManualDetailsProps {
    className?: string
    id?: string
}

const reducers: ReducersList = {
    manualDetails: manualDetailsReducer
}

export const ManualDetails = memo(({ className, id }: ManualDetailsProps) => {
    const { t } = useTranslation('manuals')
    const isLoading = useSelector(getManualDetailsIsLoading)
    const manual = useSelector(getManualDetailsData)
    const error = useSelector(getManualDetailsError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchManualById(id))
    })

    const renderBlock = useCallback((block: ManualBlock) => {
        switch (block.type) {
            case ManualBlockTypes.TEXT:
                return <ManualBlockTextComponent className={cls.block} block={block} key={Math.random() * 123}/>
            case ManualBlockTypes.CODE:
                return <ManualBlockCodeComponent className={cls.block} block={block} key={block.code}/>
            case ManualBlockTypes.IMAGE:
                return <ManualBlockImageComponent className={cls.block} block={block} key={block.src}/>
            default:
                return null
        }
    }, [])

    let content
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={500}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={300}/>
            </>
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
            <>
                <HStack justify={'center'} max>
                    <Avatar
                        className={classNames(cls.avatar, {}, [cls.avatarWrapper])}
                        size={200}
                        src={manual?.image}
                    />
                </HStack>
                <VStack gap={'4'} max>
                    <Text
                        className={cls.title}
                        title={manual?.title}
                        text={manual?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap={'8'}>
                        <Icon Svg={EyeIcon} className={cls.icon}/>
                        <Text
                            text={String(manual?.views)}
                        />
                    </HStack>
                    <HStack gap={'8'}>
                        <Icon Svg={CalendarIcon} className={cls.icon}/>
                        <Text
                            text={manual?.createdAt}
                        />
                    </HStack>
                </VStack>
                {manual?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap={'16'} max className={classNames(cls.ManualDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
