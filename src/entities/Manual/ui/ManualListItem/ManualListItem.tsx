import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualListItem.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Manual, ManualTextBlock, ManualView } from '../../model/types/manual'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeLogo from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ManualBlockTextComponent } from '../ManualBlockTextComponent/ManualBlockTextComponent'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ManualBlockTypes } from '../../model/consts/consts'

interface ManualListItemProps {
    className?: string
    manual: Manual
    view?: ManualView
    target?: HTMLAttributeAnchorTarget
}

export const ManualListItem = memo((props: ManualListItemProps) => {
    const {
        className,
        manual,
        view = 'SMALL',
        target
    } = props

    const { t } = useTranslation('manuals')

    const hashtags = <Text text={manual.hashtags.map((hashtag) => hashtag.title).join(', ')} className={cls.types}/>
    const views = (
        <>
            <Text text={String(manual.views)} className={cls.views}/>
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
                    <Text text={manual.id + '. ' + manual.title} className={cls.title}/>
                    {hashtags}
                    <img src={manual.image} className={cls.img} alt={manual.title}/>
                    {textBlock && (
                        <ManualBlockTextComponent block={textBlock} className={cls.textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.manual_details + manual.id}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать дальше')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink
            target={target}
            className={classNames(cls.ManualListItem, {}, [className, cls[view]])}
            to={RoutePath.manual_details + manual.id}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={manual.image} className={cls.img} alt={manual.title}/>
                    <Text text={manual.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {hashtags}
                    {views}
                </div>
                <Text text={manual.id + '. ' + manual.title} className={cls.title}/>
                <div/>
            </Card>
        </AppLink>
    )
})
