import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualListItemRedesigned.module.scss'
import { memo } from 'react'
import { ManualListItemProps } from '../ManualListItem'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/redesigned/Text'
import { Icon } from '@/shared/ui/redesigned/Icon'
import EyeLogo from '@/shared/assets/icons/eye.svg'
import { ManualBlockTypes } from '../../../model/consts/consts'
import { ManualTextBlock } from '../../../model/types/manual'
import { Card } from '@/shared/ui/redesigned/Card'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { ManualBlockTextComponent } from '../../ManualBlockTextComponent/ManualBlockTextComponent'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteManualDetails } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

export const ManualListItemRedesigned = memo((props: ManualListItemProps) => {
  const {
    className,
    manual,
    view = 'SMALL',
    target
  } = props

  const { t } = useTranslation('manuals')

  const hashtags = <Text text={manual.hashtags.map((hashtag) => hashtag.title).join(', ')} className={cls.types}/>
  const views = (
        <HStack gap={'8'}>
            <Icon Svg={EyeLogo}></Icon>
            <Text text={String(manual.views)} className={cls.views}/>
        </HStack>
  )

  if (view === 'BIG') {
    const textBlock = manual.blocks.find((block) => block.type === ManualBlockTypes.TEXT
    ) as ManualTextBlock

    return (
                <Card
                    max
                    padding={'24'}
                    data-testid={'ManualListItem'}
                      className={classNames(cls.ManualListItem, {}, [className, cls[view]])}
                >
                    <VStack max gap={'16'}>
                        <HStack gap={'8'}>
                            <Avatar src={manual.user.avatar} size={32}/>
                            <Text bold text={manual.user.username} />
                            <Text text={manual.createdAt} />
                        </HStack>
                        <Text text={manual.id + '. ' + manual.title} bold className={cls.title}/>
                        <Text text={manual.subtitle} size={'s'}/>
                        {hashtags}
                        <AppImage
                            fallback={<Skeleton width={'100%'} height={250} />}
                            src={manual.image}
                            className={cls.img}
                            alt={manual.title}
                        />
                        {textBlock && (
                            <ManualBlockTextComponent block={textBlock} className={cls.textBlock}/>
                        )}
                        <HStack max justify={'between'}>
                            <AppLink
                                target={target}
                                to={getRouteManualDetails(manual.id)}
                            >
                                <Button variant={'outline'}>
                                    {t('Читать дальше')}
                                </Button>
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>

                    <div className={cls.footer}>

                    </div>
                </Card>
    )
  }

  return (
        <AppLink
            data-testid={'ManualListItem'}
            target={target}
            className={classNames(cls.ManualListItem, {}, [className, cls[view]])}
            to={getRouteManualDetails(manual.id)}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={manual.image}
                        className={cls.img}
                        alt={manual.title}
                    />
                    <Text text={manual.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {hashtags}
                    {views}
                </div>
                <Text text={manual.id + '. ' + manual.title} className={cls.title} />
                <div/>
            </Card>
        </AppLink>
  )
})
