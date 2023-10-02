import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualDetailsReducer } from '../../model/slice/manualDetailsSlice'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import {
  getManualDetailsData,
  getManualDetailsError,
  getManualDetailsIsLoading
} from '../../model/selectors/manualDetails'
import { Text } from '@/shared/ui/redesigned/Text'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchManualById } from '../../model/services/fetchManualById/fetchManualById'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { renderManualBlock } from './RenderBlock'
import { AppImage } from '@/shared/ui/redesigned/AppImage'

interface ManualDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  manualDetails: manualDetailsReducer
}

// const Deprecated = () => {
//   const manual = useSelector(getManualDetailsData)
//
//   return (
//      <>
//          <HStack justify={'center'} max>
//              <Avatar
//                  className={classNames(cls.avatar, {}, [cls.avatarWrapper])}
//                  size={200}
//                  src={manual?.image}
//              />
//          </HStack>
//          <VStack gap={'4'} max data-testid={'ManualDetails.Info'}>
//              <TextDeprecated
//                  className={cls.title}
//                  title={manual?.title}
//                  text={manual?.subtitle}
//                  size={TextSize.L}
//              />
//              <HStack gap={'8'}>
//                  <Icon Svg={EyeIcon} className={cls.icon}/>
//                  <TextDeprecated
//                      text={String(manual?.views)}
//                  />
//              </HStack>
//              <HStack gap={'8'}>
//                  <Icon Svg={CalendarIcon} className={cls.icon}/>
//                  <TextDeprecated
//                      text={manual?.createdAt}
//                  />
//              </HStack>
//          </VStack>
//          {manual?.blocks.map(renderManualBlock)}
//      </>
//   )
// }

const Redesigned = () => {
  const manual = useSelector(getManualDetailsData)

  return (
       <>
           <Text title={manual?.title} size={'l'} bold />
           <Text title={manual?.subtitle} />
           <AppImage
               fallback={<Skeleton width={'100%'} height={420} border={'16px'} /> }
               src={manual?.image}
               className={cls.image}
           />
            {manual?.blocks.map(renderManualBlock)}
        </>
  )
}

export const ManualDetails = memo(({ className, id }: ManualDetailsProps) => {
  const { t } = useTranslation('manuals')
  const isLoading = useSelector(getManualDetailsIsLoading)
  const error = useSelector(getManualDetailsError)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchManualById(id))
  })

  let content
  if (isLoading) {
    content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={'100%'}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={'100%'}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={'100%'}/>
            </>
    )
  } else if (error) {
    content = (
            <Text
                align={'center'}
                text={t('Произошла ошибка при загрузке страницы')}
            />
    )
  } else {
    content = (
        <Redesigned />
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
