import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualBlockImageComponent.module.scss'
import { memo } from 'react'
import { ManualImageBlock } from '../../model/types/manual'
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'

interface ManualBlockImageComponentProps {
  className?: string
  block: ManualImageBlock
}

export const ManualBlockImageComponent = memo(({ className, block }: ManualBlockImageComponentProps) => {
  return (
        <div className={classNames(cls.ManualBlockImageComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title}/>
            {block.title && (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text title={block.title} align={TextAlign.CENTER} size={'s'}/>
                    }
                    off={
                        <TextDeprecated title={block.title} align={TextAlign.CENTER} size={TextSize.S}/>
                    }
                />

            )}
        </div>
  )
})
