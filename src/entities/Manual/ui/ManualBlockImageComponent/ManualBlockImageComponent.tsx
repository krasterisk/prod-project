import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualBlockImageComponent.module.scss'
import { memo } from 'react'
import { ManualImageBlock } from '../../model/types/manual'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'

interface ManualBlockImageComponentProps {
    className?: string
    block: ManualImageBlock
}

export const ManualBlockImageComponent = memo(({ className, block }: ManualBlockImageComponentProps) => {
    return (
        <div className={classNames(cls.ManualBlockImageComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title}/>
            {block.title && (
                <Text title={block.title} align={TextAlign.CENTER} size={TextSize.S}/>
            )}
        </div>
    )
})
