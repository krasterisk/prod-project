import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualDetailsReducer } from '../../model/slice/manualDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { fetchManualById } from 'entities/manual/model/services/fetchManualById/fetchManualById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getManualDetailsData,
    getManualDetailsError,
    getManualDetailsIsLoading
} from '../../model/selectors/manualDetails'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ManualBlock, ManualBlockTypes } from '../../model/types/manual'
import { ManualBlockCodeComponent } from '../../ui/ManualBlockCodeComponent/ManualBlockCodeComponent'
import { ManualBlockImageComponent } from '../../ui/ManualBlockImageComponent/ManualBlockImageComponent'
import { ManualBlockTextComponent } from '../../ui/ManualBlockTextComponent/ManualBlockTextComponent'

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
    const isLoading = useSelector(getManualDetailsIsLoading)
    const manual = useSelector(getManualDetailsData)
    const error = useSelector(getManualDetailsError)

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchManualById(id))
        }
    }, [dispatch, id])

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

                <Avatar
                    className={classNames(cls.avatar, {}, [cls.avatarWrapper])}
                    size={200}
                    src={manual?.image}
                />
                <Text
                    className={cls.title}
                    title={manual?.title}
                    text={manual?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text
                        text={String(manual?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text
                        text={manual?.createdAt}
                    />
                </div>
                {manual?.blocks.map(renderBlock)}
            </>
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
