import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualBlockTextComponent.module.scss'
import { memo } from 'react'
import { ManualTextBlock } from '../../model/types/manual'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'

interface ManualBlockTextComponentProps {
  className?: string
  block: ManualTextBlock
}

export const ManualBlockTextComponent = memo(({ className, block }: ManualBlockTextComponentProps) => {
  return (
        <div className={classNames(cls.ManualBlockTextComponent, {}, [className])}>

            {block.title && (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text title={block.title} className={cls.title} />
                    }
                    off={
                        <TextDeprecated title={block.title} className={cls.title} />
                    }
                    />
            )}
            {block.paragraphs.length && block.paragraphs.map((par) => (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <Text key={par.paragraph} text={par.paragraph} className={cls.paragraph}/>
                    }
                    off={
                        <TextDeprecated key={par.paragraph} text={par.paragraph} className={cls.paragraph}/>
                    }
                    />
            ))}
        </div>
  )
})
