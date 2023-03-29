import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualListItem.module.scss'
import { memo, useCallback } from 'react'
import { Manual, ManualBlockTypes, ManualTextBlock, ManualView } from '../../model/types/manual'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeLogo from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ManualBlockTextComponent } from '../ManualBlockTextComponent/ManualBlockTextComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ManualListItemProps {
    className?: string
    manual: Manual
    view?: ManualView
}

export const ManualListItem = memo((props: ManualListItemProps) => {
    const {
        className,
        manual,
        view = 'SMALL'
    } = props

    const navigate = useNavigate()
    const onOpenManual = useCallback(() => {
        navigate(RoutePath.manual_details + manual.id)
    }, [manual.id, navigate])

    const { t } = useTranslation('manuals')

    const hashtags = <Text text={manual.hashtags.map((hashtag) => hashtag.title).join(', ')} className={cls.types}/>
    const views = (
        <>
            <Text text={String(manual.views)} className={cls.views} />
            <Icon Svg={EyeLogo}></Icon>
        </>
    )

    if (view === 'BIG') {
        const textBlock = manual.blocks.find((block) => block.type === ManualBlockTypes.TEXT
        ) as ManualTextBlock

        return (
            <div className={classNames(cls.ManualListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={manual.user.avatar} size={30}/>
                        <Text text={manual.user.username} className={cls.username}/>
                        <Text text={manual.createdAt} className={cls.date}/>
                    </div>
                    <Text title={manual.title} className={cls.title}/>
                    {hashtags}
                    <img src={manual.image} className={cls.img} alt={manual.title}/>
                    {textBlock && (
                        <ManualBlockTextComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenManual} theme={ButtonTheme.OUTLINE}>
                            {t('Читать дальше')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ManualListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenManual}>
                <div className={cls.imageWrapper}>
                    <img src={manual.image} className={cls.img} alt={manual.title}/>
                    <Text text={manual.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {hashtags}
                    {views}
                </div>
                <Text text={manual.title} className={cls.title}/>
                <div/>
            </Card>
        </div>
    )
})
