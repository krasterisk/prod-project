import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualListItem.module.scss'
import { memo } from 'react'
import { Manual, ManualView } from '../../model/types/manual'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeLogo from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'

interface ManualListItemProps {
    className?: string
    manual: Manual
    view?: ManualView
}

export const ManualListItem = memo((props: ManualListItemProps) => {
    const {
        className,
        manual,
        view = ManualView.SMALL
    } = props

    if (view === ManualView.BIG) {
        return (
            <div className={classNames(cls.ManualListItem, {}, [className, cls[view]])}>
                {manual.title}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ManualListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={manual.image} className={cls.img} alt={manual.title} />
                    <Text text={manual.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={manual.hashtags.join(', ')} className={cls.types}/>
                    <Text text={String(manual.views)} className={cls.views} />
                    <Icon Svg={EyeLogo}></Icon>
                </div>
                <Text text={manual.title} className={cls.title}/>
                <div/>
            </Card>
        </div>
    )
})
